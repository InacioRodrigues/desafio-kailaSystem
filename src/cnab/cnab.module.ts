import { Module } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { CnabController } from './cnab.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CnabController],
  providers: [CnabService, PrismaService],
})
export class CnabModule {}
