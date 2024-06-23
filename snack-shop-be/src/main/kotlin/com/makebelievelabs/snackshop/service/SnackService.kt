package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.Snack
import com.makebelievelabs.snackshop.model.SnackRequest
import com.makebelievelabs.snackshop.model.SnackResponse

interface SnackService {
    fun getAllSnacks(): List<Snack>

    fun addSnack(snackRequest: SnackRequest): SnackResponse
}
