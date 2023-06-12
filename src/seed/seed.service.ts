import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter
  ) { }

  async excecuteSeed() {

    await this.pokemonModel.deleteMany({});// delete * from pokemons

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    // Opcion 1 - insertar uno tras otro

    /* data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = segments[segments.length - 2];
      const pokeon = await this.pokemonModel.create({ name, no });
      console.log({ name, no });
    }); */

    // Opcion 2 - inserciones simultánea

    /* const insertPromisesArray = [];
  
      data.results.forEach(async ({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];
        insertPromisesArray.push(
          this.pokemonModel.create({ name, no })
        );
      });
  
      await Promise.all(insertPromisesArray); */


    // Opcion 3 - inserciones simultánea en orden consecutivo (RECOMENDADA)

    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });// [{name: bulbasaur, no: 1}]
    });

    this.pokemonModel.insertMany(pokemonToInsert);


    return 'Seed Executed';
  }
}
