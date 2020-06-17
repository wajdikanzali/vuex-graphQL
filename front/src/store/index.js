import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import sources from './modules/sources';
import articles from './modules/articles';

Vue.use(Vuex);

export default () => new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    sources,
    articles,
  },
});
