package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.AccountDTO;
import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.entity.CustomUserDetail;
import DATN.ndhoanggia.form.ChangePasswordForm;
import DATN.ndhoanggia.form.CreateAccountForm;
import DATN.ndhoanggia.form.ForgetPasswordForm;
import DATN.ndhoanggia.form.UpdateAccountForm;
import DATN.ndhoanggia.repository.IAccountRepository;
import DATN.ndhoanggia.utils.EmailSender;
import DATN.ndhoanggia.utils.RamdomNewPassword;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService implements IAccountService{
    private final IAccountRepository iAccountRepository;
    private final ModelMapper modelMapper;
    @Override
    public Page<AccountDTO> getAllAccount(Pageable pageable) {
        Page<Account> accounts = iAccountRepository.findAll(pageable);
        List<AccountDTO> accountDTOS = accounts.getContent().stream()
                .map(account -> modelMapper.map(account, AccountDTO.class))
                .collect(Collectors.toList());
        return new PageImpl<>(accountDTOS, pageable, accounts.getTotalElements());
    }

    @Override
    public AccountDTO getAccountById(int id) {
        Account account = iAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        return modelMapper.map(account, AccountDTO.class);
    }

    @Override
    public Account createNewAccount(CreateAccountForm form) {
        Account account = new Account();
        String passwordEncoder = new BCryptPasswordEncoder().encode(form.getPassword());
        account.setUsername(form.getUsername());
        account.setPassword(passwordEncoder);
        account.setEmail(form.getEmail());
        account.setAddress(form.getAddress());
        account.setFullName(form.getFullName());
        account.setPhoneNumber(form.getPhoneNumber());
        account.setBirthdate(form.getBirthdate());
        account.setGender(form.getGender());
        account.setRole(Account.ROLE.User);
        iAccountRepository.save(account);
        return account;
    }

    @Override
    public Account updateAccountById(UpdateAccountForm form, int id) {
        Account account = iAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        account.setEmail(form.getEmail());
        account.setPhoneNumber(form.getPhoneNumber());
        account.setFullName(form.getFullName());
        account.setAddress(form.getAddress());
        account.setGender(form.getGender());
        account.setBirthdate(form.getBirthdate());
        iAccountRepository.save(account);
        return account;
    }

    @Override
    public void changePassword(int id, ChangePasswordForm form) {
        try {
            Account account = iAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
            if (BCrypt.checkpw(form.getOldPassword(), form.getNewPassword())){
                account.setPassword(new BCryptPasswordEncoder().encode(form.getNewPassword()));;
                iAccountRepository.save(account);
            }
        }catch (Exception ex) {
            System.out.println(ex);
        }
    }

    @Override
    public String forgetPassword(ForgetPasswordForm form) throws MessagingException {
        if (!iAccountRepository.existsByEmail(form.getEmail())) {
            return null;
        }
        Account account = iAccountRepository.findByEmail(form.getEmail());
        String newPassword = RamdomNewPassword.RamdomPass();
        account.setPassword(newPassword);
        iAccountRepository.save(account);
        EmailSender.sendNewPassword(form.getEmail(), newPassword);
        return newPassword;
    }

    @Override
    public void deleteAccountById(int id) {
        Account account = iAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        iAccountRepository.delete(account);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = iAccountRepository.findByUsername(username);
        if (account == null) {
            throw  new UsernameNotFoundException(username);
        }
        return new CustomUserDetail(account);
    }
}
