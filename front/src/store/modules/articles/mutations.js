import {
  SET_PARAMS,
} from './types';

export default {
  [SET_PARAMS](state, params) {
    const currentState = state;
    currentState.params = params;
  },
};
