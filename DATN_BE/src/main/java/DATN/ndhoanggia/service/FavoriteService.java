package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.FavoriteProductDTO;
import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.entity.FavoriteProduct;
import DATN.ndhoanggia.entity.Order;
import DATN.ndhoanggia.repository.IAccountRepository;
import DATN.ndhoanggia.repository.ICastAluminumRepository;
import DATN.ndhoanggia.repository.IFavoriteProductRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class FavoriteService implements IFavoriteProductService{
    private final IFavoriteProductRepository favoriteProductRepository;
    private final IAccountRepository accountRepository;
    private final ICastAluminumRepository aluminumRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<FavoriteProductDTO> getAllFavoriteProduct() {
        List<FavoriteProduct> favoriteProducts =  favoriteProductRepository.findAll();
        List<FavoriteProductDTO> favoriteProductDTOS = favoriteProducts
                .stream().map(favoriteProduct -> modelMapper.map(favoriteProduct, FavoriteProductDTO.class))
                .collect(Collectors.toList());
        return favoriteProductDTOS;
    }

    @Override
    public List<FavoriteProductDTO> getFavoriteProductByAccountId(int accountId) {
        List<FavoriteProduct> favoriteProducts =  favoriteProductRepository.findByAccountId(accountId);
        List<FavoriteProductDTO> favoriteProductDTOS = favoriteProducts.stream()
                .map(favoriteProduct -> modelMapper.map(favoriteProduct, FavoriteProductDTO.class))
                .collect(Collectors.toList());
        return favoriteProductDTOS;
    }

    @Override
    public FavoriteProduct createNewFavoriteProduct(int accountId, int castAluminumId) {
        FavoriteProduct favoriteProduct = new FavoriteProduct();
        Account account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Not found"));
        CastAluminum castAluminum = aluminumRepository.findById(castAluminumId).orElseThrow(() -> new RuntimeException("Not found"));
        favoriteProduct.setAccount(account);
        favoriteProduct.setCastAluminum(castAluminum);
        favoriteProductRepository.save(favoriteProduct);
        return favoriteProduct;
    }

    @Override
    public void deleteFavoriteProduct(int accountId, int productId) {
        favoriteProductRepository.deleteByAccountIdAndCastAluminumId(accountId, productId);
    }

    @Override
    public boolean favoriteProductExisted(int accountId, int castAluminumId) {
        FavoriteProduct favoriteProductExist = favoriteProductRepository.findByAccountIdAndCastAluminumId(accountId, castAluminumId);
        if (favoriteProductExist != null) {
            return true;
        }
        return false;
    }
}
