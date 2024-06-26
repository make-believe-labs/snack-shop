package com.makebelievelabs.snackshop.repository

import com.makebelievelabs.snackshop.model.Snack
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface SnackRepository : MongoRepository<Snack, ObjectId>
