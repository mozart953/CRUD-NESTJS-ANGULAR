import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost:27017/products-nest',{
    useNewUrlParser:true})], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
