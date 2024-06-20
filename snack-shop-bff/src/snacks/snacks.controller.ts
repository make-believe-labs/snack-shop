import { Controller, Get } from '@nestjs/common';
import { SnacksService } from './snacks.service';

@Controller('snacks')
export class SnacksController {
    constructor(private snacksService: SnacksService){}

    @Get()
    async findAll(): Promise<any> {
        return this.snacksService.getSnacks();
    }
}
