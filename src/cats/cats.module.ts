
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatService } from './cats.service';
import { CatMiddleware } from 'src/middleware/cat.middleware';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService]
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(CatMiddleware)
    .forRoutes(CatController)
  }
}
