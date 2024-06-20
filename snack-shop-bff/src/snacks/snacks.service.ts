import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SnacksService {
    private path = '/api/snacks';

    constructor(private readonly httpService: HttpService){}

    async getSnacks(): Promise<any> {
        const {data} = await firstValueFrom(this.httpService.get(
            `http://localhost:8080${this.path}`
            ))
        return data;
    }
}
