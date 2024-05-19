package DATN.ndhoanggia.DTO;

import DATN.ndhoanggia.entity.Account.ROLE;
import DATN.ndhoanggia.entity.Account.GENDER;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.management.relation.Role;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
    private int id;
    private String username;
    private String email;
    private String phoneNumber;
    private String fullName;
    private String address;
    private Date birthdate;
    private ROLE role;
    private GENDER gender;
}
