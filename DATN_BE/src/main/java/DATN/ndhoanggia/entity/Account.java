package DATN.ndhoanggia.entity;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Data
@Table(name="`Account`")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="`id`")
    private int id;

    @Column(name="`username`",length = 50,nullable = false,unique = true)
    private String username;

    @Column(name="`password`",length = 800,nullable = false)
    private String password;

    @Column(name="`email`",length = 50,nullable = false,unique = true)
    private String email;

    @Column(name = "birthdate")
    private Date birthdate;

    @Column(name = "phone_number", length = 20, nullable = false, unique = true)
    private String phoneNumber;

    @Column(name="`fullName`",length = 50,nullable = false)
    private String fullName;

    @Column(name = "address", length = 255, nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private GENDER gender;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private ROLE role=ROLE.User;
    public enum ROLE{
        Admin,User
    }

    public enum GENDER {
        Male, Female, Other
    }

}