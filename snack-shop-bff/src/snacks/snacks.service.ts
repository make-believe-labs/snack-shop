import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SnacksService {

    constructor(private configService: ConfigService, private readonly httpService: HttpService){}

    private snackShopBeUrl = this.configService.get<string>('SNACK_SHOP_BE_URL');
    private path = `${this.snackShopBeUrl}api/snacks`;

    async getSnacks(): Promise<any> {
        const {data} = await firstValueFrom(this.httpService.get(
            `${this.path}`
            ))
        return data;
    }
}
