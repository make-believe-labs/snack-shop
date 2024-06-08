package com.makebelievelabs.snackshop.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.stereotype.Component
import java.time.Instant

@Component
@Document("orders")
data class Order (
    @Id
    val _id: ObjectId = ObjectId(),
    var orderStatus: List<OrderStatus> = emptyList(),
    var snacks: List<OrderSnack> = emptyList(),
    var vat: Int?,
    var shippingCost: Int?,
    var orderTotal: Int?
)

data class OrderStatus(
    var status: String,
    @Field(name="when")
    var orderTime: Instant
)

data class OrderSnack(
    var snack: ObjectId,
    var qnt: Int,
    var unitPrice: Int
)