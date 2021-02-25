<template>
  <div class="task">
    <header>
      <div class="button" @click="backHome">≪</div>
      <h2 class="logo-page">Today's Task</h2>
    </header>
    <div class="task-and-description">
      <div class="name-of-task">
        <label :class="{ done: data.status, label: !data.status }"></label>
        <p class="name">{{ data.name }}</p>
      </div>
      <div class="description">{{ data.description }}</div>
    </div>
    <div class="buttons">
      <button class="change">Change</button>
      <button class="complite">Complite</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "Improve your skills",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus impedit iusto neque laboriosam nisi dolores illo? Fugit ex dignissimos, enim nam, natus, aperiam fugiat id hic nihil molestiae aspernatur optio.",
        status: false
      }
    };
  },
  methods: {
    backHome() {
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style lang="sass">
*
  margin: 0px
  padding: 0px
  .task
    margin: 0 auto
    max-width: 762px
    header
      width: 100%
      height: 50px
      display: flex
      align-items: center
      padding: 50px 0px 10px 0px
      .button
        cursor: pointer
        margin: 10px
      .logo-page
        padding: 10px
        font-size: 30px
        color: darken(#e5e5e5, 80%)
    .task-and-description
      .name-of-task
        display: flex
        align-item: center
        list-style: none
        padding: 15px 0px
        .label
          display: block
          width: 16px
          height: 16px
          border-radius: 50%
          border: 2px solid rgba(255,106,0,1)
          margin: 0px 10px 0px 15px
        .name
          height: auto
          font-size: 20px;
      .description
        padding: 0px 15px
        line-height: 1.5
    .buttons
      width: 100%
      display: flex
      justify-content: space-between;
      align-items: center;
      padding-top: 50px;
      .change
        width: 100px
        height: 40px
        border-radius: 5px
        background: rgba(255,106,0,1)
        border: none
        color: #fff
        cursor: pointer
        display: block
        font-size: 16px
        outline: none
        margin: 10px
        &:hover
          background: rgba(255,106,0,0.7)
      .complite
        width: 100px
        height: 40px
        border-radius: 5px
        background: rgba(193,255,206,1)
        border: none
        color: rgba(0,64,32,1)
        cursor: pointer
        display: block
        font-size: 16px
        outline: none
        margin: 10px
        &:hover
          background: rgba(193,255,206, 0.7)
</style>
