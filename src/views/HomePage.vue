<template>
  <v-container>
    <h1>THIS IS HOME PAGE</h1>
    <v-btn :loading="isLoading" color="primary" @click="fetchPokemons">fetch</v-btn>
    <v-btn :loading="isLoading" color="primary" @click="fetchPokemons({ limit: 100 })">fetch</v-btn>
    <h1 v-if="isLoading">DATA IS LOADING...</h1>
    <ul v-else>
      <li v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
  </v-container>
</template>

<script setup lang="ts">
  import useFetch from '@/composables/useFetch';
  import { PokemonService } from '@/api/PokemonService';

  const {
    data: pokemons,
    error,
    isLoading,
    fetch: fetchPokemons,
  } = useFetch(PokemonService.findAllPokemons, { isCacheable: true });
</script>
