import { Controller, Get } from '@nestjs/common';

@Controller('snacks')
export class SnacksController {
  @Get()
  findAll() {
    const snacks = [
      {
        snackName: 'Tortilla Chips',
        details: {
          flavor: 'Cheese',
          weight: '45g',
        },
        catagories: ['Savory', 'Crisps'],
        stock: 100,
      },
      {
        snackName: 'Tortilla Chips',
        details: {
          flavor: 'Cool Original',
          weight: '45g',
        },
        catagories: ['Savory', 'Crisps'],
        stock: 30,
      },
    ];
    return snacks;
  }
}
