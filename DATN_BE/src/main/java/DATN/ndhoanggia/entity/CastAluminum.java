package DATN.ndhoanggia.entity;


import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "cast_aluminum")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CastAluminum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name", length = 255, nullable = false)
    private String name;

    @Column(name = "price",length = 50, nullable = false)
    private long price;

    @Column(name = "image", length = 255, nullable = false)
    private String image;

    @Column(name = "votes", length = 10, nullable = false)
    private int votes;

    @Column(name = "rating", length = 10, nullable = false)
    @ColumnDefault("5")
    private int rating;

    @OneToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private ProductCategory category;
}
