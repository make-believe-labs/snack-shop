import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';

describe('SnacksController', () => {
  let snacksController: SnacksController;
  let snacksService: SnacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnacksController],
      imports: [ConfigModule, HttpModule],
      providers: [SnacksService],
    }).compile();

    snacksController = module.get<SnacksController>(SnacksController);
    snacksService = module.get<SnacksService>(SnacksService);
  });

  it('should be defined', () => {
    expect(snacksController).toBeDefined();
    expect(snacksService).toBeDefined();
  });

  describe('findAll', () => {
    describe('if snacks exist', () => {
      it('should return all snacks', () => {
        const expectedResult = [{ _id: 3, snackName: 'Disgusting Pie' }];
        jest
          .spyOn(snacksService, 'getSnacks')
          .mockResolvedValue(expectedResult);

        return snacksController.findAll().then((result) => {
          expect(result).toBe(expectedResult);
        });
      });
    });
  });
});
