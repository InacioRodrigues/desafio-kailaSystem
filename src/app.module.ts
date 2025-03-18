import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnabModule } from './cnab/cnab.module';
import { StoreModule } from './store/store.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [CnabModule, StoreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
