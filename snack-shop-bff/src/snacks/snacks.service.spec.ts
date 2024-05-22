import { Test, TestingModule } from '@nestjs/testing';
import { SnacksService } from './snacks.service';

describe('SnacksService', () => {
  let service: SnacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnacksService],
    }).compile();

    service = module.get<SnacksService>(SnacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
