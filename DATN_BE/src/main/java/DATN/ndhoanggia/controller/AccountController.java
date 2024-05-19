package DATN.ndhoanggia.controller;


import DATN.ndhoanggia.DTO.AccountDTO;
import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.form.ChangePasswordForm;
import DATN.ndhoanggia.form.CreateAccountForm;
import DATN.ndhoanggia.form.ForgetPasswordForm;
import DATN.ndhoanggia.form.UpdateAccountForm;
import DATN.ndhoanggia.service.IAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("api/v1/account")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AccountController {
    private final IAccountService iAccountService;

    @GetMapping
    public Page<AccountDTO> getAllAccount (Pageable pageable) {
        return iAccountService.getAllAccount(pageable);
    }

    @GetMapping("/{id}")
    public AccountDTO getAccountById (@PathVariable int id) {
        return iAccountService.getAccountById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAccountById(@PathVariable int id) {
        try {
            iAccountService.deleteAccountById(id);
            return ResponseEntity.ok("Delete successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

}
