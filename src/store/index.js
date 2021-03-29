import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import init from "./init";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    init
  }
});

export default store;
