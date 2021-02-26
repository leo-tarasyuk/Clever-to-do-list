<template>
  <div class="login">
    <h1 class="introduction">Welcome to the Clever to-do list</h1>
    <form class="form" @submit.prevent="login(email, password)">
      <h2 class="logo-page">Log in</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" />
      </div>
      <button class="submit" type="submit">Log in</button>
      <div v-if="getError" class="error">{{ getError }}</div>
      <p>
        Need an account?
        <router-link to="/register">Click here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters("user", ["getError"])
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

<style lang="sass">
.login
  margin: 0 auto
  max-width: 762px
  .introduction
    width: 100%
    height: auto
    text-align: center
    padding: 50px 0px 30px 0px;
  .form
    background: #fff
    padding: 20px
    margin: 0 auto
    box-shadow: 0 0 10px #999
    border-radius: 2px
    @media (max-width: 992px)
      box-shadow: none
    .logo-page
      padding: 10px
      text-align: center
      color: darken(#e5e5e5, 80%)
      border-bottom: solid 1px #e5e5e5
      margin-top: 0px
    .form-group
      position: relative
      margin-bottom: 10px
      label
        position: absolute
        left: 5px
        top: 10px
        color: #999
        font-size: 16px
        display: inline-block
        padding: 5px 10px
        font-weight: 400
        background-color: rgba(255,255,255,0)
      input
        display: block
        box-sizing: border-box
        width: 100%
        outline: none
        background: #fff
        border: 1px solid #dbdbdb
        font-size: 20px
        padding: 10px
        border-radius: 2px
        &:focus
          background: #fff
    button
      width: 100%
      background: rgba(255,106,0,1)
      border-radius: 2px
      border: none
      color: #fff
      cursor: pointer
      display: block
      font-size: 20px
      line-height: 15px
      outline: none
      padding: 10px
      margin-bottom: 10px
      &:hover
        background: rgba(255,106,0,0.7)
    .error
      margin: 0
      text-align: center
      color: red
      font-size: 16p
      padding-bottom: 10px
    p
      margin: 0
      text-align: center
      color: darken(#e5e5e5, 50%)
      font-size: 16px
      a
        color: darken(#e5e5e5, 80%)
</style>
