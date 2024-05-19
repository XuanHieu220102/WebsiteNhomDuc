package DATN.ndhoanggia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String accsessToken;
    private String tokenType = "Bearer";

    public LoginResponse(String accsessToken) {
        this.accsessToken = accsessToken;
    }
}
