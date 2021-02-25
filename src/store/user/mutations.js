import * as types from "./mutation-types";

export default {
  [types.SET_USER](state, payload) {
    state.user = payload;
  },
  [types.SET_ERROR](state, payload) {
    state.error = payload;
  }
};
