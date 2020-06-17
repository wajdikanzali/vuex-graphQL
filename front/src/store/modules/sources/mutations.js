import SET_SOURCES from './types';

export default {
  [SET_SOURCES](state, payload) {
    const currentState = state;
    currentState.sources = payload;
  },
};
