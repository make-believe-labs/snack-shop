package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.*
import com.makebelievelabs.snackshop.repository.OrderRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class OrderServiceImpl(
    @Autowired val orderRepository: OrderRepository,
) : OrderService {
    override fun getAllOrders(): List<OrderResponse> = orderRepository.findAll().map { it.toResponse() }

    override fun addOrder(orderRequest: OrderRequest): OrderResponse = orderRepository.insert(orderRequest.toDomain()).toResponse()
}
