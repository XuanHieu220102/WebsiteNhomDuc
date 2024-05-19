package DATN.ndhoanggia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "order_id_gen")
    @SequenceGenerator(name = "order_id_gen", sequenceName = "order_id_seq", initialValue = 10000)
    @Column(name = "order_id")
    private int orderId;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "account_id", nullable = false, referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "cast_aluminum_id", nullable = false, referencedColumnName = "id")
    private CastAluminum castAluminum;

    @Column(name = "specificAddress", length = 1000)
    private String specificAddress;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "total_amount")
    private int totalAmount;

    @Column(name = "fee_ship")
    private int feeShip;

    @Column(name = "note")
    private String note;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;
}
