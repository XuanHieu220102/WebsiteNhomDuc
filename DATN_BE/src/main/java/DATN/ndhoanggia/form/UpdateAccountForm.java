package DATN.ndhoanggia.form;

import DATN.ndhoanggia.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateAccountForm {
    @NotBlank
    private String email;
    @NotBlank
    private String phoneNumber;
    @NotBlank
    private String fullName;
    @NotBlank
    private String address;
    @NotBlank
    private Date birthdate;

    @NotBlank
    private Account.GENDER gender;
}
