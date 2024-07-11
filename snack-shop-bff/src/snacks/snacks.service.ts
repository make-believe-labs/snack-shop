import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class SnacksService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private snackShopBeUrl = this.configService.get<string>('SNACK_SHOP_BE_URL');
  private path = `${this.snackShopBeUrl}api/snacks`;

  async getSnacks(): Promise<any> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.path}`));
    return data;
  }

  async createSnack(snackRequest): Promise<any> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    const data = await firstValueFrom(
      this.httpService.post(`${this.path}`, snackRequest, requestConfig).pipe(
        map((response) => {
          return response.data;
        }),
      ),
    );

    return data;
  }
}
