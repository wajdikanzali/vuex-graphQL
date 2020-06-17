import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  current: null,
  articles: [],
  totalResults: 0,
  params: {},
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
