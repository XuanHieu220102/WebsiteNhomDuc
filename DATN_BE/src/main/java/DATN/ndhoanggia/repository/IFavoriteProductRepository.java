package DATN.ndhoanggia.repository;

import DATN.ndhoanggia.entity.FavoriteProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFavoriteProductRepository extends JpaRepository<FavoriteProduct, Integer> {
    List<FavoriteProduct> findByAccountId(int id);
    void deleteByAccountIdAndCastAluminumId(int accountId, int castAluminumId);
    FavoriteProduct findByAccountIdAndCastAluminumId(int accountId, int castAluminumId);
}
