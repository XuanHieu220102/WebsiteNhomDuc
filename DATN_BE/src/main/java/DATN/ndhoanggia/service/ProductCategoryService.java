package DATN.ndhoanggia.service;

import DATN.ndhoanggia.entity.ProductCategory;
import DATN.ndhoanggia.form.CreateCategoryForm;
import DATN.ndhoanggia.form.UpdateCategoryForm;
import DATN.ndhoanggia.repository.IProductCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductCategoryService implements IProductCategoryService {
    private final IProductCategoryRepository categoryRepository;
    @Override
    public List<ProductCategory> getAllProductCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public ProductCategory getProductCategoryById(int id) {
        return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
    }

    @Override
    public ProductCategory createNewCategory(CreateCategoryForm form) {
        ProductCategory category = new ProductCategory();
        category.setName(form.getName());
        category.setDescription(form.getDescription());
        categoryRepository.save(category);
        return category;
    }

    @Override
    public void deleteCategoryById(int id) {
        ProductCategory category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        categoryRepository.delete(category);
    }

    @Override
    public ProductCategory updateCategoryById(int id, UpdateCategoryForm form) {
        ProductCategory category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        if (category != null) {
            category.setName(form.getName());
            category.setDescription(form.getDescription());
        }
        categoryRepository.save(category);
        return category;
    }
}
