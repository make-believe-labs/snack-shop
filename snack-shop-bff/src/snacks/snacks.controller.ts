import { Body, Controller, Get, Post } from '@nestjs/common';
import { SnacksService } from './snacks.service';

@Controller('snacks')
export class SnacksController {
  constructor(private snacksService: SnacksService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.snacksService.getSnacks();
  }

  @Post()
  async createSnack(@Body() snackRequest): Promise<any> {
    return this.snacksService.createSnack(snackRequest);
  }
}
