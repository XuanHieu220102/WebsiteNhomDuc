package DATN.ndhoanggia.repository;

import DATN.ndhoanggia.entity.CastAluminum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ICastAluminumRepository extends JpaRepository<CastAluminum, Integer>, JpaSpecificationExecutor {
    Page<CastAluminum> findByCategoryId(Pageable pageable, int categoryId);
}
