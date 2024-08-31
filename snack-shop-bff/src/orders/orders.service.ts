import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class OrdersService {

    constructor(private configService: ConfigService, private readonly httpService: HttpService){}

    private snackShopBeUrl = this.configService.get<string>('SNACK_SHOP_BE_URL');
    private path = `${this.snackShopBeUrl}api/orders`;

    async getOrders(): Promise<any> {
        const {data} = await firstValueFrom(this.httpService.get(
            `${this.path}`
            ))
        return data;
    }

    async createOrder(orderRequest): Promise<any> {
        const requestConfig: AxiosRequestConfig = {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          };

        const data = await firstValueFrom(this.httpService.post(
            `${this.path}`,
            orderRequest,
            requestConfig
        ).pipe(
            map((response) => {
                return response.data;
            })
        ))
        
        return data;
    }
}
