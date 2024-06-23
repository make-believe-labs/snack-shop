package com.makebelievelabs.snackshop.controller

import com.makebelievelabs.snackshop.model.Order
import com.makebelievelabs.snackshop.service.OrderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/orders")
class OrderController(
    @Autowired val orderService: OrderService,
) {
    @GetMapping
    fun getAllOrders(): ResponseEntity<List<Order>> = ResponseEntity.ok(orderService.getAllOrders())
}
