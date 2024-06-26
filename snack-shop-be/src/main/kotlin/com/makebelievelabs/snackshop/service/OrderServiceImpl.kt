package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.Order
import com.makebelievelabs.snackshop.repository.OrderRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class OrderServiceImpl(
    @Autowired val orderRepository: OrderRepository,
) : OrderService {
    override fun getAllOrders(): List<Order> = orderRepository.findAll()
}
