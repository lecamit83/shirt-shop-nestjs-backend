import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShirtsController } from './shirts/shirts.controller';

@Module({
  imports: [],
  controllers: [AppController, ShirtsController],
  providers: [AppService],
})
export class AppModule {}
