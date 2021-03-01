<template>
  <div class="modal" @click="showModalWindow(false)">
    <div
      @click="
        event => {
          event.stopPropagation();
        }
      "
    >
      <div class="modal-head">
        <span class="close" @click="showModalWindow(false)"></span>
      </div>
      <div class="component">
        <div class="task-name">
          Task :
          <input v-model="task" class="name" type="text" />
        </div>
        <div class="description-size">
          <textarea
            v-model="text"
            class="description"
            rows="10"
            cols="20"
          ></textarea>
        </div>
        <div class="buttons" @click="getTextOfTask(task, text)">
          <button class="save">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    description: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      task: this.name,
      text: this.description
    };
  },
  methods: {
    ...mapActions("user", ["showModalWindow", "changeTask"]),
    getTextOfTask(name, description) {
      this.changeTask({ name, description });
      this.showModalWindow(false);
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style lang="sass" scoped>
.modal
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  .modal-head
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    position: relative;
    .close
      position: absolute;
      right: 10px;
      width: 20px;
      height: 20px;
      opacity: 0.3;
      &:hover
        opacity: 1;
      &:before,
      &:after
        position: absolute;
        left: 15px;
        content: " ";
        height: 20px;
        width: 2px;
        background-color: #333;
      &:before
        transform: rotate(45deg);
      &:after
        transform: rotate(-45deg);
  .component
    min-width: 662px;
    height: 100%
    background-color: #ffffff;
    display: flex
    flex-direction: column
    @media (max-width: 762px)
      min-width: 300px;
    .task-name
      margin: 0px
      font-size: 20px
      padding: 0px 0px 20px 10px
      .name
        font-size: 20px
        width: 70%;
    .description-size
        display: flex
        width: 100%
        justify-content: center
        .description
            width: 90%
            height: 200px
            font-size: 18px
            resize: none;
            font-weight: normal;
    .buttons
      .save
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
        margin: 10px 0px 0px 20px
        &:hover
          background: rgba(255,106,0,0.7)
</style>
