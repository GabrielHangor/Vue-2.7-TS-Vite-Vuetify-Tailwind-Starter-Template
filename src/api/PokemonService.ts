import ApiClient from './ApiClient';
import type { IPokemon } from './../models/pokemon.models';

export class PokemonService {
  static async findAllPokemons({ limit = 20, offset = 20 }) {
    const { data } = await ApiClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
    const pokemons: IPokemon[] = data.results;

    return pokemons;
  }
}
