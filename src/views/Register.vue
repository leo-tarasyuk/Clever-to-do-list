<template>
  <div>
    <lazyForm
      :name="name"
      :text="text"
      :route="route"
      :auth="register"
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
      name: "Register",
      text: "Have an account?",
      route: "/login",
      error: ""
    };
  },
  methods: {
    ...mapActions("user", ["setRegisterUser"]),
    async register(email, password) {
      const mistake = await this.setRegisterUser({ email, password });

      if (mistake) {
        this.error = mistake;
      } else {
        this.error = "";
        this.$router.push(routePath.home);
      }
    }
  }
};
</script>
