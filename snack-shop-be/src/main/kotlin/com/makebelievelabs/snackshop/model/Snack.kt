package com.makebelievelabs.snackshop.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.stereotype.Component

@Component
@Document("snacks")
data class Snack (
    @Id
    val _id: ObjectId = ObjectId(),
    var snackName: String?,
    var details: SnackDetail?,
    var categories: List<String> = emptyList(),
    var stock: Int?,
    var unitPrice: Int?
)

data class SnackDetail(
    var flavour: String,
    var weight: String
)