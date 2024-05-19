package DATN.ndhoanggia.service;

import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.form.CreateCastAluminumForm;
import DATN.ndhoanggia.form.ProductFilterForm;
import DATN.ndhoanggia.form.UpdateCastAluminumForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface ICastAluminumService {
    Page<CastAluminum> getAllCastAluminum(Pageable pageable, ProductFilterForm form);
    CastAluminum getCastAluminumById(int id);
    CastAluminum createNewCastAluminum(CreateCastAluminumForm form);
    CastAluminum updateCastAluminum(UpdateCastAluminumForm form, int id);
    void deleteCastAluminum(int id);
    void updateRatingById(int id, int rating);
    Page<CastAluminum> getCastAluminumByCategoryId(Pageable pageable, int id);
}
