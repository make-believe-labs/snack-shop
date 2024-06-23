package com.makebelievelabs.snackshop.controller

import com.makebelievelabs.snackshop.model.Snack
import com.makebelievelabs.snackshop.model.SnackRequest
import com.makebelievelabs.snackshop.model.SnackResponse
import com.makebelievelabs.snackshop.service.SnackService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/snacks")
class SnackController(
    @Autowired val snackService: SnackService,
) {
    @GetMapping
    fun getAllSnacks(): ResponseEntity<List<Snack>> = ResponseEntity.ok(snackService.getAllSnacks())

    @PostMapping
    fun addSnack(
        @RequestBody snackRequest: SnackRequest,
    ): ResponseEntity<SnackResponse> = ResponseEntity(snackService.addSnack(snackRequest), HttpStatus.CREATED)
}
