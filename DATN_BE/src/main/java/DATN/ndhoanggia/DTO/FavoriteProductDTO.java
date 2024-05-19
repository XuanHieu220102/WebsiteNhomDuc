package DATN.ndhoanggia.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteProductDTO {
    int accountId;
    int castAluminumId;
    String castAluminumName;
    String castAluminumImage;
    int castAluminumPrice;
    int castAluminumRating;
}
