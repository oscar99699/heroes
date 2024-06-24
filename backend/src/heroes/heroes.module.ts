import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroeSchema, Heroe } from 'src/schemas/heroes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Heroe.name, schema: HeroeSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService]
})
export class HeroesModule {}
