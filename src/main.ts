import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import '@/assets/styles/vuetify-variables.scss';
import App from './App.vue';
import router from './router';
import Vuetify from '@/plugins/vuetify';
import './assets/styles/tailwind.css';

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  vuetify: Vuetify,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app');
