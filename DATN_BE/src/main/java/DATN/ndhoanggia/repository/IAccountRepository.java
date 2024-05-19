package DATN.ndhoanggia.repository;

import DATN.ndhoanggia.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Account findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    Account findByEmail(String email);
}
