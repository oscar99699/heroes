import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Heroe{
    @Prop({
        unique : false
    })
    id : number;
    @Prop({
        trim : true,
    })
    name : string;
    @Prop({
        trim : true,
    })
    slug : string;
    @Prop({type:Object})
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    @Prop({type:Object})
    appearance: {
      gender: string;
      race: string;
      height: [];
      weight: [];
      eyeColor: string;
      hairColor: string;
    };
    @Prop({type:Object})
    biography: {
      fullName: string;
      alterEgos: string;
      aliases: [];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
    };
    @Prop({type:Object})
    work: {
      occupation : string;
      base: string;
    };
    @Prop({type:Object})
    connections: {
      groupAffiliation : string;
      relatives : string;
    };
    @Prop({type:Object})
    images: {
      xs : string;
      sm : string;
      md : string;
      lg : string;
    }
}

export const HeroeSchema = SchemaFactory.createForClass(Heroe);