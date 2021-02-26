import * as types from "./mutation-types";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

async function setRegisterUser({ commit }, payload) {
  const user = await firebase.default
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password);

  commit(types.SET_USER, user.user.uid);
}

async function setLoginUser({ commit }, payload) {
  const user = await firebase.default
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password);

  commit(types.SET_USER, user.user.uid);
}

function setError({ commit }, payload) {
  commit(types.SET_ERROR, payload);
}

async function createTask({ state }, payload) {
  payload.user = state.user;
  await firebase.default
    .database()
    .ref("tasks")
    .push(payload);
}

async function showTasks({ commit }) {
  const task = await firebase.default
    .database()
    .ref("tasks")
    .once("value");
  const tasks = task.val();
  const data = [];
  if (tasks !== null) {
    Object.keys(tasks).forEach(key => {
      data.push({ ...tasks[key], id: key });
    });
  }

  commit(types.GET_TASKS, data);
}

function checkTask({ commit }, payload) {
  commit(types.CHECK_TASK, payload);
}

function showTask({ commit }, payload) {
  commit(types.SHOW_TASK, payload);
}

async function completeTask({ state }, payload) {
  const id = state.task.id;
  await firebase.default
    .database()
    .ref("tasks")
    .child(id)
    .update({ status: payload });
}

export default {
  setRegisterUser,
  setLoginUser,
  setError,
  createTask,
  showTasks,
  checkTask,
  showTask,
  completeTask
};
