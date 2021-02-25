import * as types from "./mutation-types";
import * as firebase from "firebase/app";
import "firebase/auth";

async function setRegisterUser({ commit }, payload) {
  const user = await firebase.default
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password);

  commit(types.SET_USER, user.user);
}

async function setLoginUser({ commit }, payload) {
  const user = await firebase.default
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password);

  commit(types.SET_USER, user.user);
}

function setError({ commit }, payload) {
  commit(types.SET_ERROR, payload);
}

export default {
  setRegisterUser,
  setLoginUser,
  setError
};
