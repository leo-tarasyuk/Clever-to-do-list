export default {
  getError: state => state.error,
  getUser: state => state.user,
  getCurrentDay: state => state.currentDay,
  getTasks: (state, getters) =>
    state.tasks.filter(task => {
      return task.user === getters.getUser;
    }),
  getCheckTask: state => state.check,
  getTask: state => state.task,
  getModalWindow: state => state.modalWindow
};
