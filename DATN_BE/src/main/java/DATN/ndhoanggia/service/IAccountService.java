package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.AccountDTO;
import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.form.ChangePasswordForm;
import DATN.ndhoanggia.form.CreateAccountForm;
import DATN.ndhoanggia.form.ForgetPasswordForm;
import DATN.ndhoanggia.form.UpdateAccountForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;

@Service
public interface IAccountService extends UserDetailsService {
    Page<AccountDTO> getAllAccount (Pageable pageable);

    AccountDTO getAccountById(int id);

    Account createNewAccount(CreateAccountForm form);
    Account updateAccountById(UpdateAccountForm form, int id);

    void changePassword(int id, ChangePasswordForm form);

    String forgetPassword(ForgetPasswordForm form) throws MessagingException;

    void deleteAccountById(int id);
}
