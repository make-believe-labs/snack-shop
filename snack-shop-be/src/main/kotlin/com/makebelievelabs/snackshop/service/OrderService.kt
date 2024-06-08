package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.Order

interface OrderService {
    fun getAllOrders() : List<Order>
}