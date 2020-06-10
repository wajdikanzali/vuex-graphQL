import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage,
    },
  ],
});
