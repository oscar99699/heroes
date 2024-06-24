import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Heroe } from 'src/schemas/heroes.schema';
import { Model } from 'mongoose'
import axios from 'axios';

@Injectable()
export class HeroesService {
    constructor(@InjectModel(Heroe.name) private heroeModel: Model<Heroe>){

    }

    async findAllHeroes(name:string) : Promise<Heroe[]>{
        return this.heroeModel.find({'name': {'$regex': name, $options: 'i'}});
    }

    async findHeroe(id:string) {
        const heroe = await this.heroeModel.findOne({_id:id})
        if (!heroe) throw new NotFoundException('Heroe is Dead or has dissapeared');
        return heroe;
    }

    async deleteUniverse(){

        await this.heroeModel.deleteMany();
        return "universo eliminado"

    }

    //Los documentos en la base de datos de mongoDB se crean a partir de este archivo online
    async createUniverse(){
        const response = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        await this.heroeModel.insertMany(response.data) 
        return "Universo Creado"

    }

    async blackHole() {
        const total = await this.heroeModel.countDocuments();
        return {total:total}
    }
}
