package DATN.ndhoanggia.controller;

import DATN.ndhoanggia.DTO.FavoriteProductDTO;
import DATN.ndhoanggia.entity.FavoriteProduct;
import DATN.ndhoanggia.service.IFavoriteProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/favorite-product")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FavoriteProductController {
    private final IFavoriteProductService favoriteProductService;

    @GetMapping
    List<FavoriteProductDTO> getAllFavoriteProduct() {
        return favoriteProductService.getAllFavoriteProduct();
    }

    @GetMapping("/{accountId}")
    List<FavoriteProductDTO> getAllFavoriteProductByAccountId(@PathVariable int accountId) {
        return favoriteProductService.getFavoriteProductByAccountId(accountId);
    }

    @PostMapping("/{accountId}/{castAluminumId}")
    public ResponseEntity<?> createNewFavoriteProduct(@PathVariable int accountId, @PathVariable int castAluminumId) {
        try {
            if (favoriteProductService.favoriteProductExisted(accountId, castAluminumId)){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Sản phẩm đã có sẵn trong giỏ hàng");
            }
            favoriteProductService.createNewFavoriteProduct(accountId, castAluminumId);
            return ResponseEntity.ok("Sản phẩm đã được thêm vào giỏ hàng");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @DeleteMapping("/{accountId}/{castAluminumId}")
    public ResponseEntity<?> deleteFavoriteProductByAccountIdAndCastAluminumId(@PathVariable int accountId, @PathVariable int castAluminumId) {
        try {
            favoriteProductService.deleteFavoriteProduct(accountId, castAluminumId);
            return ResponseEntity.ok("Delete successculy !!!");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Not found product with accountID = " + accountId + " and CastAluminumId = " + castAluminumId);
        }
    }
}
