export default {
  getError: state => state.error,
  getUser: state => state.user,
  getTasks: (state, getters) =>
    state.tasks.filter(task => {
      return task.user === getters.getUser;
    }),
  getCheckTask: state => state.check,
  getTask: state => state.task
};
