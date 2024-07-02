import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SnacksService } from './snacks.service';

describe('SnacksService', () => {
  let service: SnacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, HttpModule],
      providers: [SnacksService],
    }).compile();

    service = module.get<SnacksService>(SnacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
