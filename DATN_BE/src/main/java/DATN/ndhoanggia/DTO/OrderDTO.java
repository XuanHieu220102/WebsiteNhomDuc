package DATN.ndhoanggia.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private int orderId;
    private String accountUsername;
    private String accountEmail;
    private String accountPhoneNumber;
    private String castAluminumName;
    private String castAluminumImage;
    private int castAluminumPrice;
    private String specificAddress;
    private int quantity;
    private int totalAmount;
    private int feeShip;
    private String note;
    private LocalDateTime creationDate;
}
