package DATN.ndhoanggia.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCategoryForm {
    @NotBlank
    private String name;

    @NotBlank
    private String description;
}
