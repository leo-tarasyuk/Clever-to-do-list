<template>
  <div>
    <lazyForm :name="name" :text="text" :route="route" :auth="register" />
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
      name: "Register",
      text: "Have an account?",
      route: "/login"
    };
  },
  methods: {
    ...mapActions("user", ["setRegisterUser", "setError"]),
    register(email, password) {
      this.setRegisterUser({ email, password }).then(
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
