package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.OrderDTO;
import DATN.ndhoanggia.entity.Order;
import DATN.ndhoanggia.form.CreateOderForm;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IOrderService {
    Page<OrderDTO> getALlOrder(Pageable pageable);

    List<OrderDTO> getOrderByAccountId(int id);

    OrderDTO getOrderByOrderId(int id);

    Order createNewOrder(CreateOderForm form);

    void deleteOrder(int accountId, int productId);

    List<OrderDTO> getOrderByPhonenumber(String phonenumber);
}
