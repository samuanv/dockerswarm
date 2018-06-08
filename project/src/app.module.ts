import { Module, MiddlewareConsumer  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './photos/photo.schema';
import { JWT } from 'jwt.middleware';
process.env.DB_URL = process.env.DB_URL || 'mongodb://localhost/photos';
@Module({
  // This module uses forFeature() method to define which models shall be registered in the current scope
  imports: [MongooseModule.forRoot(process.env.DB_URL),
  MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // TODO: uncomment
  /*configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JWT)
      .forRoutes('/photo');
  }*/
}
