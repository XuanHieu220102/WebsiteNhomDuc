package DATN.ndhoanggia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "favorite_product")
public class FavoriteProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "favorite_product_id_gen")
    @SequenceGenerator(name = "favorite_product_id_gen", sequenceName = "favorite_product_id_seq", initialValue = 10000)
    @Column(name = "love_product_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false, referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "cast_aluminum_id", nullable = false, referencedColumnName = "id")
    private CastAluminum castAluminum;
}
