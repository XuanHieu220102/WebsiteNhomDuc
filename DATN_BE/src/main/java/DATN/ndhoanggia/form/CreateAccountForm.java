package DATN.ndhoanggia.form;

import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.entity.Account.ROLE;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateAccountForm {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private Date birthdate;
    @NotBlank
    private String phoneNumber;
    @NotBlank
    private String fullName;
    @NotBlank
    private String address;
    @NotBlank
    private Account.GENDER gender;
}
