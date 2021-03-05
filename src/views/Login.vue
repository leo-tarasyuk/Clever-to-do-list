<template>
  <div>
    <lazyForm :name="name" :text="text" :route="route" :auth="login" />
  </div>
</template>

<script>
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
      route: "/register"
    };
  },
  methods: {
    ...mapActions("user", ["setLoginUser", "setError"]),
    login(email, password) {
      this.setLoginUser({ email, password }).then(
        () => {
          this.setError("");
          this.$router.replace({ name: "Home" });
        },
        err => {
          this.setError(err.message);
        }
      );
    }
  }
};
</script>
