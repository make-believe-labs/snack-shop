import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
    private path = '/api/orders';

    constructor(private readonly httpService: HttpService){}

    async getOrders(): Promise<any> {
        const {data} = await firstValueFrom(this.httpService.get(
            `http://localhost:8080${this.path}`
            ))
        return data;
    }
}
