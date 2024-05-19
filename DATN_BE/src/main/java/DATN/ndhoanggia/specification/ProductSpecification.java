package DATN.ndhoanggia.specification;

import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.form.ProductFilterForm;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ProductSpecification {
    public static Specification<CastAluminum> buildWhere(ProductFilterForm form) {
        Specification<CastAluminum> where = null;
        if (form.getName() != null && !form.getName().isEmpty()) {
            String name = form.getName().trim();
            CustomSpecification specification = new CustomSpecification("name", name);
            where = Specification.where(specification);
        }
        return where;
    }

    @RequiredArgsConstructor
    static class CustomSpecification implements Specification<CastAluminum> {
        @NonNull
        private String field;
        @NonNull
        private String value;

        private final String NAME = "name";

        @Override
        public Predicate toPredicate(Root<CastAluminum> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (field.equalsIgnoreCase(NAME)) {
                return criteriaBuilder.like(root.get(NAME), "%" + value.toString() + "%");
            }
            return null;
        }
    }
}
