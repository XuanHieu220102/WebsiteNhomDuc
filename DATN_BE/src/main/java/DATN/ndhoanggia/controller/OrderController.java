package DATN.ndhoanggia.controller;


import DATN.ndhoanggia.DTO.OrderDTO;
import DATN.ndhoanggia.entity.Order;
import DATN.ndhoanggia.form.CreateOderForm;
import DATN.ndhoanggia.service.IOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order")
@RequiredArgsConstructor
@CrossOrigin("*")
public class OrderController {
    private final IOrderService iOrderService;

    @GetMapping
    public Page<OrderDTO> getAllOrder(Pageable pageable) {
        return iOrderService.getALlOrder(pageable);
    }

    @GetMapping("/{id}")
    public OrderDTO getOrderByOrderId(@PathVariable int id) {
        return iOrderService.getOrderByOrderId(id);
    }


    @GetMapping("/account/{id}")
    public List<OrderDTO> getOrderByAccountId(@PathVariable int id) {
        return iOrderService.getOrderByAccountId(id);
    }


    @PostMapping
    public ResponseEntity<?> createNewOrder(@RequestBody CreateOderForm form) {
        try {
            iOrderService.createNewOrder(form);
            return ResponseEntity.ok("Create order successfully");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }

    @GetMapping("/phonenumber/{phone}")
    public List<OrderDTO> getOrderByPhonenumber(@PathVariable String phone) {
        return iOrderService.getOrderByPhonenumber(phone);
    }

    @DeleteMapping("/{accountId}/{productId}")
    public ResponseEntity<?> deleteOrderById(@PathVariable int accountId, @PathVariable int productId) {
        try {
            iOrderService.deleteOrder(accountId, productId);
            return ResponseEntity.ok("Delete order successfully");
        }catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Fail");
        }
    }
}
