import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Task from "../views/Task";
import firebase from "firebase/app";

Vue.use(VueRouter);

export const routePath = {
  home: "/",
  login: "/login",
  register: "/register",
  task: "/task"
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: routePath.home,
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: routePath.login,
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: routePath.register,
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: routePath.task,
      component: Task,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser && !localStorage.getItem("email")) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser && localStorage.getItem("email")) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
