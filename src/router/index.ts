import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    { component: () => import('@/views/HomePage.vue'), name: 'HomePage', path: '/' },
    { component: () => import('@/views/TestPage.vue'), name: 'TestPage', path: '/test' },
  ],
});

export default router;
