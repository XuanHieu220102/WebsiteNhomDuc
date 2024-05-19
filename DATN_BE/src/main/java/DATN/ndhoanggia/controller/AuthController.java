package DATN.ndhoanggia.controller;

import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.entity.CustomUserDetail;
import DATN.ndhoanggia.entity.LoginRequest;
import DATN.ndhoanggia.form.ChangePasswordForm;
import DATN.ndhoanggia.form.CreateAccountForm;
import DATN.ndhoanggia.form.ForgetPasswordForm;
import DATN.ndhoanggia.form.UpdateAccountForm;
import DATN.ndhoanggia.repository.IAccountRepository;
import DATN.ndhoanggia.security.JwtTokenProvider;
import DATN.ndhoanggia.service.IAccountService;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthController {
    private final IAccountService accountService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final IAccountRepository iAccountRepository;
    @PostMapping("/login")
    public String authenticationUser(@Valid @RequestBody LoginRequest  loginRequest){
        System.out.println(1);
        System.out.println(loginRequest.toString());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        System.out.println(2);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Account account = iAccountRepository.findByUsername(loginRequest.getUsername());
        System.out.println(account.toString());
        String jwt = jwtTokenProvider.generateToken((CustomUserDetail) authentication.getPrincipal());
        String rs = account.getId()+"/"+account.getRole()+"/"+account.getUsername()+"/"+jwt;
        return rs;
    }

    @PostMapping("/register")
    public ResponseEntity<?> createNewAccount(@RequestBody CreateAccountForm form) {
        try {
            accountService.createNewAccount(form);
            return ResponseEntity.ok("Create account successfully");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @PostMapping("/change-password/{id}")
    public ResponseEntity<?> changePasswordById(@RequestBody ChangePasswordForm form, @PathVariable int id) {
        try {
            accountService.changePassword(id, form);
            return ResponseEntity.ok("Change password successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @PostMapping("/forget-password")
    public ResponseEntity<?> forgerPassword(@RequestBody ForgetPasswordForm form) {
        try {
            accountService.forgetPassword(form);
            return ResponseEntity.ok("Password was send to email");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/update-account/{id}")
    public ResponseEntity<?> updateAccountById(@PathVariable int id, @RequestBody UpdateAccountForm form) {
        try {
            accountService.updateAccountById(form, id);
            return ResponseEntity.ok("Update account successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }
}
