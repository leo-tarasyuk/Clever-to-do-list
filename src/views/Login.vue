<template>
  <div>
    <lazyForm
      :name="name"
      :text="text"
      :route="route"
      :auth="login"
      :error="error"
    />
  </div>
</template>

<script>
import { routePath } from "../router";
import { mapActions } from "vuex";

const lazyForm = () => import("@/components/Form");

export default {
  components: {
    lazyForm
  },
  data() {
    return {
      name: "Log in",
      text: "Need an account?",
      route: "/register",
      error: ""
    };
  },
  methods: {
    ...mapActions("user", ["setLoginUser"]),
    async login(email, password) {
      const mistake = await this.setLoginUser({ email, password });

      if (mistake) {
        this.error = mistake;
      } else {
        this.error = "";
        localStorage.setItem("email", email);
        this.$router.push(routePath.home);
      }
    }
  }
};
</script>
