package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.SnackRequest
import com.makebelievelabs.snackshop.model.SnackResponse

interface SnackService {
    fun getAllSnacks(): List<SnackResponse>

    fun addSnack(snackRequest: SnackRequest): SnackResponse
}
