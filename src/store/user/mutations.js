import * as types from "./mutation-types";

export default {
  [types.SET_USER](state, payload) {
    state.user = payload;
  },
  [types.SET_ERROR](state, payload) {
    state.error = payload;
  },
  [types.SET_DATE](state, payload) {
    state.currentDay = payload;
  },
  [types.GET_TASKS](state, payload) {
    state.tasks = payload;
  },
  [types.CHECK_TASK](state, payload) {
    state.check = payload;
  },
  [types.SHOW_TASK](state, payload) {
    state.task = payload;
  },
  [types.SHOW_MODAL_WINDOW](state, payload) {
    state.modalWindow = payload;
  }
};
