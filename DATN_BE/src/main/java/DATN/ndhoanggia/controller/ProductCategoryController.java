package DATN.ndhoanggia.controller;

import DATN.ndhoanggia.entity.ProductCategory;
import DATN.ndhoanggia.form.CreateCategoryForm;
import DATN.ndhoanggia.form.UpdateCategoryForm;
import DATN.ndhoanggia.service.IProductCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/category")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ProductCategoryController {
    private final IProductCategoryService productCategoryService;

    @GetMapping
    public List<ProductCategory> getAllCategory(){
        return productCategoryService.getAllProductCategory();
    }

    @GetMapping("/{id}")
    public ProductCategory getProductById(@PathVariable int id) {
        return productCategoryService.getProductCategoryById(id);
    }

    @PostMapping
    public ResponseEntity<?> createNewCategory(@RequestBody CreateCategoryForm form) {
        try{
            productCategoryService.createNewCategory(form);
            return ResponseEntity.ok("Create new category successfully");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategoryById(@PathVariable int id, @RequestBody UpdateCategoryForm form) {
        try {
            productCategoryService.updateCategoryById(id, form);
            return ResponseEntity.ok("Update successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategoryById(@PathVariable int id) {
        try {
            productCategoryService.deleteCategoryById(id);
            return ResponseEntity.ok("Delete successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }
}
