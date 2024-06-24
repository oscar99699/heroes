export interface Heroe{
    show : boolean;
    _id : string;
    id : number;
    name : string;
    slug : string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    appearance: {
      gender: string;
      race: string;
      height: [];
      weight: [];
      eyeColor: string;
      hairColor: string;
    };
    biography: {
      fullName: string;
      alterEgos: string;
      aliases: [];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
    };
    work: {
      occupation : string;
      base: string;
    };
    connections: {
      groupAffiliation : string;
      relatives : string;
    };
    images: {
      xs : string;
      sm : string;
      md : string;
      lg : string;
    }
}