package com.makebelievelabs.snackshop.controller

import com.makebelievelabs.snackshop.model.OrderResponse
import com.makebelievelabs.snackshop.model.OrderRequest
import com.makebelievelabs.snackshop.service.OrderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/orders")
class OrderController(
    @Autowired val orderService: OrderService,
) {
    @GetMapping
    fun getAllOrders(): ResponseEntity<List<OrderResponse>> = ResponseEntity.ok(orderService.getAllOrders())

    @PostMapping
    fun addOrder(
        @RequestBody orderRequest: OrderRequest,
    ): ResponseEntity<OrderResponse> = ResponseEntity(orderService.addOrder(orderRequest), HttpStatus.CREATED)
}
