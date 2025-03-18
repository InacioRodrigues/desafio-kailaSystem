import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('stores')
export class StoreController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getStores() {
    const stores = await this.prisma.transaction.groupBy({
      by: ['storeName'],
      _sum: {
        amount: true,
      },
    });

    return stores.map((store) => ({
      storeName: store.storeName,
      totalAmount: store._sum.amount,
    }));
  }
}