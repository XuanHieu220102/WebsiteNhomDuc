package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.FavoriteProductDTO;
import DATN.ndhoanggia.entity.FavoriteProduct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IFavoriteProductService {
    List<FavoriteProductDTO> getAllFavoriteProduct();
    List<FavoriteProductDTO> getFavoriteProductByAccountId(int accountId);
    FavoriteProduct createNewFavoriteProduct(int accountId, int castAluminumId);
    void deleteFavoriteProduct(int accountId, int productId);
    boolean favoriteProductExisted(int accountId, int castAluminumId);
}
