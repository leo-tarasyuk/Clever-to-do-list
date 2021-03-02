export default {
  user: null,
  error: "",
  tasks: [],
  task: null,
  check: false,
  currentDay: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }
};
