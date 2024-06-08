package com.makebelievelabs.snackshop.repository

import com.makebelievelabs.snackshop.model.Order
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface OrderRepository : MongoRepository<Order, ObjectId> {

}