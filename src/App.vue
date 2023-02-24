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

    <v-main></v-main>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { mdiMenu } from '@mdi/js';

  const isNavShown = ref(false);
</script>
