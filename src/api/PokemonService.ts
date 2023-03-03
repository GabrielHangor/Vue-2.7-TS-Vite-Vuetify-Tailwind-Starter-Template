import { ApiClient } from './ApiClient';
import type { IPokemon } from './../models/pokemon.models';

export class PokemonService {
  static async findAll(limit = 20, offset = 20) {
    const response = await ApiClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
    const pokemons: IPokemon[] = response.data.results;

    return pokemons;
  }
}
