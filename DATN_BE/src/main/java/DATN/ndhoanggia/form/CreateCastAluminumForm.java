package DATN.ndhoanggia.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCastAluminumForm {
    @NotBlank
    @NotNull
    private String name;

    @NotNull
    @NotBlank
    private long price;

    @NotNull
    @NotBlank
    private String image;

    @NotBlank
    private int categoryId;
}
