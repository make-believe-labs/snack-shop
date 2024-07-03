import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SnacksService } from './../src/snacks/snacks.service';
import { SnacksModule } from './../src/snacks/snacks.module';

describe('SnackController (e2e)', () => {
  let app: INestApplication;
  let snacksService = { getSnacks: () => [{_id: 1, snackName: "Delicious Cake"}] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SnacksModule],
    })
    .overrideProvider(SnacksService)
    .useValue(snacksService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/snacks (GET)', () => {
    return request(app.getHttpServer())
      .get('/snacks')
      .expect(200)
      .expect(snacksService.getSnacks());
  });
});
