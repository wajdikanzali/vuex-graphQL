import SET_SOURCES from './types';

export default {
  [SET_SOURCES](state, payload) {
    console.log('state', state);
    console.log('payload', payload);
    const currentState = state;
    currentState.sources = payload;
  },
};
