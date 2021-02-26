<template>
  <div class="tasks">
    <h2 class="count-task">{{ getTasks.length }} Tasks Today</h2>
    <ul v-if="getTasks.length" class="list">
      <li
        v-for="item in getTasks"
        :key="item.id"
        class="name-of-task"
        @click="goToTask(true, item)"
      >
        <label :class="{ done: item.status, label: !item.status }"></label>
        <div class="name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="button">
      <button @click="goToTask(false, {})">+ Add a new task</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["getTasks"])
  },
  created() {
    this.showTasks();
  },
  methods: {
    ...mapActions("user", ["showTasks", "checkTask", "showTask"]),
    goToTask(isState, data) {
      this.checkTask(isState);
      this.showTask(data);
      this.$router.replace({ name: "Task" });
    }
  }
};
</script>

<style lang="sass" scoped>
*
  margin: 0px
  padding: 0px
  .tasks
    padding: 0px 50px 0px 50px
    .count-task
      padding: 0px 10px 15px 10px
    .list
      .name-of-task
        display: flex
        align-items: center
        list-style: none
        padding: 15px 0px
        cursor: pointer;
        &:hover
          background: rgba(0,0,0,0.1)
        .label
          display: block
          cursor: pointer;
          width: 16px
          height: 16px
          border-radius: 50%
          border: 2px solid rgba(255,106,0,1)
          margin: 0px 10px 0px 15px
        .done
          display: block
          width: 8px
          height: 8px
          border-radius: 50%
          border: 7px solid rgba(255,106,0,1)
          margin: 0px 10px 0px 15px
          cursor: pointer;
        .name
          height: auto
          font-size: 20px;
    .button
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      padding-top: 15px
      button
        width: 95%
        background: rgba(255,106,0,1)
        border: none
        color: #fff
        cursor: pointer
        font-size: 20px
        padding: 10px 0px
        border-radius: 10px
        margin-bottom: 40px
        &:hover
          background: rgba(255,106,0,0.7)
</style>
