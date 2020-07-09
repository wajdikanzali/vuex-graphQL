import { apolloClient } from '@/plugins/vue-apollo';
import { getSources } from '@/services/news';
import SET_SOURCES from './types';

export default {
  async getSources({ commit }) {
    try {
      console.log('alooooo');
      const sources = await getSources(apolloClient);
      commit(SET_SOURCES, sources);
    } catch (err) {
      console.log(err);
    }
  },
};
