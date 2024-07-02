import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';

describe('SnacksController', () => {
  let controller: SnacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnacksController],
      imports: [ConfigModule, HttpModule],
      providers: [SnacksService],
    }).compile();

    controller = module.get<SnacksController>(SnacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
