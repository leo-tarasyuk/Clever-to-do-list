import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

async function setRegisterUser({ commit }, payload) {
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(data => {
      commit("SET_USER", data.user.uid);
      return null;
    })
    .catch(e => e.message);

  return user;
}

async function setLoginUser({ commit }, payload) {
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(data => {
      commit("SET_USER", data.user.uid);
      return null;
    })
    .catch(e => e.message);

  return user;
}

async function chooseDateAndSignOut({ commit, state }, payload) {
  const { day, month, year } = payload;

  state.currentDay.day = day;
  state.currentDay.month = month;
  state.currentDay.year = year;

  await firebase.auth().signOut();
  commit("SET_DATE", state.currentDay);
}

async function createTask({ state }, payload) {
  payload.user = state.user;
  payload.date = state.currentDay;

  await firebase
    .database()
    .ref("tasks")
    .push(payload);
}

async function showTasks({ commit, state }) {
  const task = await firebase
    .database()
    .ref("tasks")
    .once("value");
  const tasks = task.val();
  const data = [];

  if (tasks !== null) {
    Object.keys(tasks).forEach(key => {
      if (
        tasks[key].user === state.user &&
        tasks[key].date.day === state.currentDay.day &&
        tasks[key].date.month === state.currentDay.month
      ) {
        data.push({ ...tasks[key], id: key });
      }
    });
  }

  commit("GET_TASKS", data);
}

function checkTask({ commit }, payload) {
  commit("CHECK_TASK", payload);
}

function showTask({ commit }, payload) {
  commit("SHOW_TASK", payload);
}

async function completeTask({ state }, payload) {
  const id = state.task.id;

  await firebase
    .database()
    .ref("tasks")
    .child(id)
    .update({ status: payload });
}

async function changeTask({ state }, payload) {
  const id = state.task.id;

  await firebase
    .database()
    .ref("tasks")
    .child(id)
    .update({ name: payload.name, description: payload.description });
}

export default {
  setRegisterUser,
  setLoginUser,
  chooseDateAndSignOut,
  createTask,
  showTasks,
  checkTask,
  showTask,
  completeTask,
  changeTask
};
