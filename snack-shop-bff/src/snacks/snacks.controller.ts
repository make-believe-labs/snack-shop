import { Controller, Get } from '@nestjs/common';

@Controller('snacks')
export class SnacksController {
  @Get()
  findAll() {
    const snacks = [
      {
        _id: '9034b608-fa95-4ff5-9ed9-9d57cb472588',
        snackName: 'Tortilla Chips',
        details: {
          flavor: 'Cheese',
          weight: '45g',
        },
        categories: ['Savory', 'Crisps'],
        stock: 100,
        unitPrice: 90,
      },
      {
        _id: 'd003235d-d1db-4402-aebe-133f5a3081e2',
        snackName: 'Tortilla Chips',
        details: {
          flavour: 'Cool Original',
          weight: '45g',
        },
        catagories: ['Savory', 'Crisps'],
        stock: 30,
        unitPrice: 90,
      },
    ];
    return snacks;
  }
}
