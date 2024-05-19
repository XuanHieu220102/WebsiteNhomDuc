package DATN.ndhoanggia.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCategoryForm {
    @NotBlank
    private String name;

    @NotBlank
    private String description;
}
