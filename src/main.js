import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  databaseURL: process.env.VUE_APP_DATABASE_URI,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSI,
  appId: process.env.VUE_APP_ID
};

const firestore = store.dispatch("INIT_FIREBASE", firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default firestore;
