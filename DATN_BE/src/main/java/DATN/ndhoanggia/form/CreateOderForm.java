package DATN.ndhoanggia.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateOderForm {
    @NotBlank
    private int accountId;

    @NotBlank
    private int castAluminumId;

    @NotBlank
    private String specificAddress;

    @NotBlank
    private String username;

    @NotBlank
    private String email;

    @NotBlank
    private String phoneNumber;

    @NotBlank
    private String province;

    @NotBlank
    private int totalAmount;

    @NotBlank
    private int quantity;

    @NotBlank
    private String note;

    @NotBlank
    private int feeShip;
}
