package com.makebelievelabs.snackshop.service

import com.makebelievelabs.snackshop.model.Snack

interface SnackService {
    fun getAllSnacks() : List<Snack>
}