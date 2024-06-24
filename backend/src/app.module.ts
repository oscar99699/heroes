import dotenv from "dotenv"
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';


@Module({
  imports: [
    HeroesModule,
    MongooseModule.forRoot('mongodb+srv://CWrUPJfPvftc0XC:CWrUPJfPvftc0XC@cluster0.xqdctmp.mongodb.net/heroes?retryWrites=true&w=majority'),
    
  ]
})
export class AppModule {}
