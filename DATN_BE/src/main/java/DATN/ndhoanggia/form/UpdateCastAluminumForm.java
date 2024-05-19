package DATN.ndhoanggia.form;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateCastAluminumForm {
    @NotBlank
    @NotNull
    private String name;

    @NotNull
    @NotBlank
    private long price;

    @NotNull
    @NotBlank
    private String image;
}
