import {
  SET_ARTICLE,
} from './types';


export default {
  async saveArticle({ commit }, article) {
    commit(SET_ARTICLE, article);
  },
};
