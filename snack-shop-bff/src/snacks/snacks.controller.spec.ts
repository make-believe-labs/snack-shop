import { Test, TestingModule } from '@nestjs/testing';
import { SnacksController } from './snacks.controller';

describe('SnacksController', () => {
  let controller: SnacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnacksController],
    }).compile();

    controller = module.get<SnacksController>(SnacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
