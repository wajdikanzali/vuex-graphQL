import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/Home.vue';
import ArticlesPage from '@/components/pages/Articles.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'articles',
      path: '/articles',
      component: ArticlesPage,
    },
  ],
});
