package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.Snack
import com.makebelievelabs.snackshop.model.SnackRequest
import com.makebelievelabs.snackshop.model.SnackResponse
import com.makebelievelabs.snackshop.model.toDomain
import com.makebelievelabs.snackshop.model.toResponse
import com.makebelievelabs.snackshop.repository.SnackRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SnackServiceImpl(
    @Autowired val snackRepository: SnackRepository,
) : SnackService {
    override fun getAllSnacks(): List<Snack> = snackRepository.findAll()

    override fun addSnack(snackRequest: SnackRequest): SnackResponse = snackRepository.insert(snackRequest.toDomain()).toResponse()
}
