<template>
  <v-app>
    <v-navigation-drawer app v-model="isNavShown">
      <v-list>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/test">Test</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="isNavShown = !isNavShown">
        <v-btn icon>
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { mdiMenu } from '@mdi/js';

  const isNavShown = ref<boolean | null>(null);
</script>
