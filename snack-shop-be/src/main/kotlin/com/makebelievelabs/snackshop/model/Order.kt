package com.makebelievelabs.snackshop.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.stereotype.Component
import java.time.Instant

@Component
@Document("orders")
data class Order(
    @Id
    val _id: ObjectId = ObjectId(),
    var orderStatus: List<OrderStatus> = emptyList(),
    var snacks: List<OrderSnack> = emptyList(),
    var vat: Int?,
    var shippingCost: Int?,
    var orderTotal: Int?,
)

data class OrderStatus(
    var status: String,
    @Field(name = "when")
    var orderTime: Instant,
)

data class OrderSnack(
    var snack: ObjectId,
    var snackName: String,
    var qnt: Int,
    var unitPrice: Int,
)

data class OrderRequest(
    var orderStatus: List<OrderStatus> = emptyList(),
    var snacks: List<OrderSnack> = emptyList(),
    var vat: Int?,
    var shippingCost: Int?,
    var orderTotal: Int?,
)

data class OrderResponse(
    val _id: String,
    var orderStatus: List<OrderStatus> = emptyList(),
    var snacks: List<OrderSnack> = emptyList(),
    var vat: Int?,
    var shippingCost: Int?,
    var orderTotal: Int?,
)

fun OrderRequest.toDomain(): Order =
    Order(
        _id = ObjectId(),
        orderStatus = orderStatus,
        snacks = snacks,
        vat = vat,
        shippingCost = shippingCost,
        orderTotal = orderTotal,
    )

fun Order.toResponse(): OrderResponse =
    OrderResponse(
        _id = _id.toString(),
        orderStatus = orderStatus,
        snacks = snacks,
        vat = vat,
        shippingCost = shippingCost,
        orderTotal = orderTotal,
    )