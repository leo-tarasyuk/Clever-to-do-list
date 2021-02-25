<template>
  <div class="header">
    <h2 class="logo-page">Tassker</h2>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async signOut() {
      await firebase.default.auth().signOut();
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  height: 50px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 50px 0px 10px 0px
  .logo-page
    margin: 0px
    padding: 10px
    font-size: 30px
    color: darken(#e5e5e5, 80%)
  button
    width: 75px
    height: 25px
    border-radius: 5px
    background: rgba(255,106,0,0.9)
    border: none
    color: #fff
    cursor: pointer
    display: block
    font-size: 16px
    outline: none
    margin: 10px
    &:hover
      background: rgba(239,239,239, 1)
</style>
