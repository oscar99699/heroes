import { Controller, Get , Post, Delete, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';


@Controller('heroes')
export class HeroesController {

    constructor(private HeroeService: HeroesService){

    }

    @Get(':name')
    async getAllHeroes(@Param('name') name: string){
        return this.HeroeService.findAllHeroes(name);
    }

    @Get('/heroe/:id')
    async getHeroe(@Param('id') id: string){
        return this.HeroeService.findHeroe(id);
    }

    @Post()
    createUniverse(){
        return this.HeroeService.createUniverse();
    }

    @Delete()
    deleteUniverse(){
        return this.HeroeService.deleteUniverse();
    }

    @Get('/void/hole')
    async blackHole(){
        return this.HeroeService.blackHole();
    }

}
