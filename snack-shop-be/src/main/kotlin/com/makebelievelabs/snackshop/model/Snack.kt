package com.makebelievelabs.snackshop.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.stereotype.Component
import java.time.Instant

@Component
@Document("snacks")
data class Snack(
    @Id
    val _id: ObjectId = ObjectId(),
    var snackName: String?,
    var details: SnackDetail?,
    var categories: List<String> = emptyList(),
    var stock: Int?,
    var unitPrice: Int?,
)

data class SnackDetail(
    var flavour: String,
    var weight: String,
)

data class SnackRequest(
    var snackName: String?,
    var details: SnackDetail?,
    var categories: List<String> = emptyList(),
    var stock: Int?,
    var unitPrice: Int?,
)

data class SnackResponse(
    val _id: String,
    var snackName: String?,
    var details: SnackDetail?,
    var categories: List<String> = emptyList(),
    var stock: Int?,
    var unitPrice: Int?,
)

fun SnackRequest.toDomain(): Snack =
    Snack(
        _id = ObjectId(),
        snackName = snackName,
        details = details,
        categories = categories,
        stock = stock,
        unitPrice = unitPrice,
    )

fun Snack.toResponse(): SnackResponse =
    SnackResponse(
        _id = _id.toString(),
        snackName = snackName,
        details = details,
        categories = categories,
        stock = stock,
        unitPrice = unitPrice,
    )
