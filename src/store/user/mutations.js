export default {
  ["SET_USER"](state, payload) {
    state.user = payload;
  },
  ["SET_ERROR"](state, payload) {
    state.error = payload;
  },
  ["SET_DATE"](state, payload) {
    state.currentDay = payload;
  },
  ["GET_TASKS"](state, payload) {
    state.tasks = payload;
  },
  ["CHECK_TASK"](state, payload) {
    state.check = payload;
  },
  ["SHOW_TASK"](state, payload) {
    state.task = payload;
  }
};
