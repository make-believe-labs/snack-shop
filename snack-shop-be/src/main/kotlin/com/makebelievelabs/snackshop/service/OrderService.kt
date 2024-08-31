package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.OrderRequest
import com.makebelievelabs.snackshop.model.OrderResponse

interface OrderService {
    fun getAllOrders(): List<OrderResponse>

    fun addOrder(orderRequest: OrderRequest): OrderResponse
}
