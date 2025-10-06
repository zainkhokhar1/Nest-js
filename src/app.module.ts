import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats.controller';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [AppService],
})
export class AppModule {}
