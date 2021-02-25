<template>
  <div class="tasks">
    <h2 class="count-task">{{ data.length }} Tasks Today</h2>
    <ul v-if="data.length" class="list">
      <li
        v-for="item in data"
        :key="item.name"
        class="name-of-task"
        @click="cheakTask"
      >
        <label :class="{ done: item.status, label: !item.status }"></label>
        <div class="name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="button">
      <button @click="cheakTask">+ Add a new task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    cheakTask() {
      if (this.data.length !== 0) this.$router.replace({ name: "Task" });
    }
  }
};
</script>

<style lang="sass" scoped>
*
  margin: 0px
  padding: 0px
  .tasks
    .count-task
      padding: 0px 10px 15px 10px
    .list
      .name-of-task
        display: flex
        align-item: center
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
        &:hover
          background: rgba(255,106,0,0.7)
</style>
