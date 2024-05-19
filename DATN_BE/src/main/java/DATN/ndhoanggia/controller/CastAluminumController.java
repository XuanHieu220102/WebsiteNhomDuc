package DATN.ndhoanggia.controller;


import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.form.CreateCastAluminumForm;
import DATN.ndhoanggia.form.ProductFilterForm;
import DATN.ndhoanggia.form.UpdateCastAluminumForm;
import DATN.ndhoanggia.service.ICastAluminumService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/cast-aluminum")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CastAluminumController {
    private final ICastAluminumService iCastAluminumService;

    @GetMapping
    public Page<CastAluminum> getAllCastAluminum(Pageable pageable, ProductFilterForm form) {
        return iCastAluminumService.getAllCastAluminum(pageable, form);
    }

    @GetMapping("/{id}")
    public CastAluminum getCastAluminumById(@PathVariable int id) {
        return iCastAluminumService.getCastAluminumById(id);
    }

    @PostMapping
    public ResponseEntity<?> createNewCastAluminum(@RequestBody CreateCastAluminumForm form) {
        try {
            iCastAluminumService.createNewCastAluminum(form);
            return ResponseEntity.ok("Create cast aluminum successfully");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail to create new cast aluminum");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCastAluminum(@RequestBody UpdateCastAluminumForm form, @PathVariable int id) {
        try {
            iCastAluminumService.updateCastAluminum(form,id);
            return ResponseEntity.ok("Update cast aluminum successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail to update cast aluminum with id = " + id);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCastAluminumById(@PathVariable int id) {
        try {
            iCastAluminumService.deleteCastAluminum(id);
            return ResponseEntity.ok("Cast aluminum is deleted successfully");
        }catch (Exception ex){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete cast aluminum with id = " + id);
        }
    }

    @PostMapping("/voting/{id}/{rate}")
    public ResponseEntity<?> updateRatingById(@PathVariable int id, @PathVariable int rate) {
        try {
            iCastAluminumService.updateRatingById(id, rate);
            return ResponseEntity.ok("Update rating successfully");
        }catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @GetMapping("/category/{id}")
    public Page<CastAluminum> getCastAluminumById(@PathVariable int id, Pageable pageable) {
        return iCastAluminumService.getCastAluminumByCategoryId(pageable, id);
    }
}
