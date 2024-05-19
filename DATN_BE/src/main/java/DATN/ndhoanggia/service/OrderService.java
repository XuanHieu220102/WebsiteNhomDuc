package DATN.ndhoanggia.service;

import DATN.ndhoanggia.DTO.OrderDTO;
import DATN.ndhoanggia.entity.Account;
import DATN.ndhoanggia.entity.CastAluminum;
import DATN.ndhoanggia.entity.Order;
import DATN.ndhoanggia.form.CreateOderForm;
import DATN.ndhoanggia.repository.IAccountRepository;
import DATN.ndhoanggia.repository.ICastAluminumRepository;
import DATN.ndhoanggia.repository.IOrderRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final IOrderRepository iOrderRepository;
    private final IAccountRepository iAccountRepository;
    private final ICastAluminumRepository iCastAluminumRepository;
    private final ModelMapper modelMapper;

    @Override
    public Page<OrderDTO> getALlOrder(Pageable pageable) {
        Page<Order> orders = iOrderRepository.findAll(pageable);
        List<OrderDTO> orderDTOS = orders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
        return new PageImpl<>(orderDTOS, pageable, orders.getTotalElements());
    }


    @Override
    public List<OrderDTO> getOrderByAccountId(int id) {
        List<Order> orders = iOrderRepository.findByAccountId(id);
        List<OrderDTO> orderDTOS = orders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
        return orderDTOS;
    }

    @Override
    public OrderDTO getOrderByOrderId(int id) {
        Order order = iOrderRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        return modelMapper.map(order, OrderDTO.class);
    }

    @Override
    public Order createNewOrder(CreateOderForm form) {
        Order order = new Order();
        Account account = iAccountRepository.findById(form.getAccountId()).orElseThrow(() -> new RuntimeException("Not found account with id = " + form.getAccountId()));
        account.setFullName(form.getUsername());
        account.setEmail(form.getEmail());
        account.setAddress(form.getProvince());
        account.setPhoneNumber(form.getPhoneNumber());
        iAccountRepository.save(account);
        CastAluminum castAluminum = iCastAluminumRepository.findById(form.getCastAluminumId()).orElseThrow(() -> new RuntimeException("Not found cast aluminum with id = " + form.getCastAluminumId()));
        order.setAccount(account);
        order.setCastAluminum(castAluminum);
        order.setSpecificAddress(form.getSpecificAddress());
        order.setTotalAmount(form.getTotalAmount());
        order.setFeeShip(form.getFeeShip());
        order.setQuantity(form.getQuantity());
        order.setNote(form.getNote());
        order.setCreationDate(LocalDateTime.now());
        iOrderRepository.save(order);
        return order;
    }

    @Override
    public void deleteOrder(int accountId, int productId) {
        iOrderRepository.deleteByAccountIdAndCastAluminumId(accountId, productId);
    }

    @Override
    public List<OrderDTO> getOrderByPhonenumber(String phonenumber) {
        List<Order> orders = iOrderRepository.findByAccountPhoneNumber(phonenumber);
        List<OrderDTO> orderDTOS = orders.stream()
                .map(order -> modelMapper.map(order, OrderDTO.class))
                .collect(Collectors.toList());
        return orderDTOS;
    }


}
