<template>
  <div class="header">
    <h2 class="logo-page">Tassker</h2>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    ...mapActions("user", ["chooseDate"]),
    async signOut() {
      const currentDay = {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      };
      this.chooseDate(currentDay);
      await firebase.auth().signOut();
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 10px 0px;
  .logo-page {
    margin: 0;
    padding: 10px 10px 10px 50px;
    font-size: 30px;
    color: darken(#e5e5e5, 80%);
  }
  button {
    width: 75px;
    height: 25px;
    border-radius: 5px;
    background: rgba(255, 106, 0, 0.9);
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    outline: none;
    margin: 10px 50px 10px 10px;
    &:hover {
      background: rgba(239, 239, 239, 1);
    }
  }
}
</style>
