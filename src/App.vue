<template>
  <v-app>
    <v-navigation-drawer absolute temporary app v-model="isNavShown">Sidebar</v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="isNavShown = !isNavShown">
        <v-btn icon>
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 v-if="isLoading">DATA IS LOADING...</h1>
        <ul v-else>
          <li v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</li>
        </ul>
      </v-container>
    </v-main>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { mdiMenu } from '@mdi/js';
  import useFetch from './composables/useFetch';
  import { PokemonService } from './api/PokemonService';
  import type { IFindAllParams, IPokemon } from './models/pokemon.models';

  const isNavShown = ref(false);
  const {
    data: pokemons,
    error,
    isLoading,
    fetch,
  } = useFetch<IPokemon[], IFindAllParams>(PokemonService.findAll);

  onMounted(() => {
    fetch(100);
  });
</script>
