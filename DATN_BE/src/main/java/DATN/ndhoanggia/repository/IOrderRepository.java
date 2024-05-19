package DATN.ndhoanggia.repository;

import DATN.ndhoanggia.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByAccountId(int accountId);
    void deleteByAccountIdAndCastAluminumId(int accountId, int castAluminumId);
    List<Order> findByAccountPhoneNumber(String phoneNumber);
}
