package DATN.ndhoanggia.service;

import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.entity.ProductCategory;
import DATN.ndhoanggia.form.CreateCastAluminumForm;
import DATN.ndhoanggia.form.ProductFilterForm;
import DATN.ndhoanggia.form.UpdateCastAluminumForm;
import DATN.ndhoanggia.repository.ICastAluminumRepository;
import DATN.ndhoanggia.repository.IProductCategoryRepository;
import DATN.ndhoanggia.specification.ProductSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Transactional
@Service
@RequiredArgsConstructor
public class CastAluminumService implements ICastAluminumService{
    private final ICastAluminumRepository iCastAluminumRepository;
    private final IProductCategoryRepository iProductCategoryRepository;
    @Override
    public Page<CastAluminum> getAllCastAluminum(Pageable pageable, ProductFilterForm form) {
        Specification bWhere  = ProductSpecification.buildWhere(form);
        return iCastAluminumRepository.findAll(bWhere, pageable);
    }

    @Override
    public CastAluminum getCastAluminumById(int id) {
        return iCastAluminumRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
    }

    @Override
    public CastAluminum createNewCastAluminum(CreateCastAluminumForm form) {
        CastAluminum castAluminum = new CastAluminum();
        ProductCategory category = iProductCategoryRepository.findById(form.getCategoryId()).orElseThrow(() -> new RuntimeException("Not found"));
        castAluminum.setCategory(category);
        castAluminum.setName(form.getName());
        castAluminum.setPrice(form.getPrice());
        castAluminum.setImage(form.getImage());
        castAluminum.setVotes(1);
        castAluminum.setRating(5);
        return iCastAluminumRepository.save(castAluminum);
    }

    @Override
    public CastAluminum updateCastAluminum(UpdateCastAluminumForm form, int id) {
        CastAluminum castAluminum = iCastAluminumRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        castAluminum.setName(form.getName());
        castAluminum.setPrice(form.getPrice());
        castAluminum.setImage(form.getImage());
        return iCastAluminumRepository.save(castAluminum);
    }

    @Override
    public void deleteCastAluminum(int id) {
        CastAluminum castAluminum = iCastAluminumRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        iCastAluminumRepository.delete(castAluminum);
    }

    @Override
    public void updateRatingById(int id, int rating) {
        CastAluminum castAluminum = iCastAluminumRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        int rate = (castAluminum.getRating() + rating)/2;
        castAluminum.setRating(rate);
        castAluminum.setVotes(castAluminum.getVotes()+1);
        iCastAluminumRepository.save(castAluminum);
    }

    @Override
    public Page<CastAluminum> getCastAluminumByCategoryId(Pageable pageable, int id) {
        if(id <= 0) {
            throw new IllegalArgumentException("Invalid category id: " + id);
        }
        Page<CastAluminum> page = iCastAluminumRepository.findByCategoryId(pageable, id);
        return page;
    }
}
