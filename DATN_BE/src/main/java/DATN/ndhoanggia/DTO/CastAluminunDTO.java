package DATN.ndhoanggia.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CastAluminunDTO {
    private int id;
    private String name;
    private long price;
    private String image;
    private int rating;
}
