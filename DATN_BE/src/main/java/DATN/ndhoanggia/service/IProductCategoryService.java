package DATN.ndhoanggia.service;

import DATN.ndhoanggia.entity.ProductCategory;
import DATN.ndhoanggia.form.CreateCategoryForm;
import DATN.ndhoanggia.form.UpdateCategoryForm;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductCategoryService {
    List<ProductCategory> getAllProductCategory();
    ProductCategory getProductCategoryById(int id);
    ProductCategory createNewCategory(CreateCategoryForm form);
    void deleteCategoryById(int id);

    ProductCategory updateCategoryById(int id, UpdateCategoryForm form);
}
