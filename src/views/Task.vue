<template>
  <div class="task">
    <header>
      <div class="button" @click="backHome">≪</div>
      <h2 class="logo-page">Today's Task</h2>
    </header>
    <div class="task-and-description">
      <div class="name-of-task">
        <label
          :class="{ done: getTask.status, label: !getTask.status }"
        ></label>
        <input
          v-show="!getCheckTask"
          v-model="getTask.name"
          class="name"
          type="text"
        />
        <div v-show="getCheckTask" class="name" type="text">
          {{ getTask.name }}
        </div>
      </div>
      <textarea
        v-show="!getCheckTask"
        v-model="getTask.description"
        class="description"
        rows="20"
        cols="45"
      ></textarea>
      <div v-show="getCheckTask" class="description">
        {{ getTask.description }}
      </div>
    </div>
    <div class="buttons">
      <button
        v-if="!getCheckTask"
        class="save"
        @click="createNewTask(getTask.description, getTask.name, false)"
      >
        Save
      </button>
      <button v-if="getCheckTask" class="edit" @click="showModalWindow(true)">
        Edit
      </button>
      <button
        v-if="getCheckTask"
        v-show="!getTask.status"
        class="complete"
        @click="taskIsComplete(true)"
      >
        Complite
      </button>
    </div>
    <lazyModal
      v-if="stateForShowModal"
      :description="getTask.description"
      :name="getTask.name"
      :modal="stateForShowModal"
      @stateChanged="stateForShowModal = $event"
    />
  </div>
</template>

<script>
import { routePath } from "../router";
import { mapGetters, mapActions } from "vuex";

const lazyModal = () => import("@/components/Modal");

export default {
  components: {
    lazyModal
  },
  data() {
    return {
      stateForShowModal: false
    };
  },
  computed: {
    ...mapGetters("user", ["getCheckTask", "getTask"])
  },
  methods: {
    ...mapActions("user", ["createTask", "completeTask", "showTasks"]),
    backHome() {
      this.$router.push(routePath.home);
    },
    createNewTask(description, name, status) {
      const data = {
        description,
        name,
        status
      };

      this.createTask(data);
      this.backHome();
    },
    taskIsComplete(state) {
      this.completeTask(state);
      this.$router.push(routePath.home);
    },
    showModalWindow(state) {
      this.stateForShowModal = state;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;

  .task {
    margin: 0 auto;
    max-width: 762px;
    margin-top: 40px;
    box-shadow: 0 0 10px #999;
    border-radius: 2px;
    position: relative;
    @media (max-width: 662px) {
      box-shadow: none;
    }

    header {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 20px 0px 10px 0px;

      .button {
        cursor: pointer;
        margin: 10px;
        padding-left: 30px;
      }

      .logo-page {
        padding: 10px;
        font-size: 30px;
        color: darken(#e5e5e5, 80%);
      }
    }

    .task-and-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px 50px;

      .name-of-task {
        width: 100%;
        display: flex;
        align-items: center;
        list-style: none;
        padding: 15px 0px;

        .label {
          display: block;
          cursor: pointer;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 1);
          margin: 0px 10px 0px 15px;
        }

        .done {
          display: block;
          cursor: pointer;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 255, 0, 1);
          margin: 0px 10px 0px 15px;
        }

        .name {
          width: 90%;
          font-size: 20px;
          word-wrap: break-word;
        }
      }

      .description {
        width: 80%;
        height: 200px;
        font-size: 18px;
        resize: none;
        font-weight: normal;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;

      .save {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        background: rgba(255, 106, 0, 1);
        border: none;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 16px;
        outline: none;
        margin: 10px 10px 10px 50px;
        &:hover {
          background: rgba(255, 106, 0, 0.7);
        }
      }

      .complete {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        background: rgba(193, 255, 206, 1);
        border: none;
        color: rgba(0, 64, 32, 1);
        cursor: pointer;
        display: block;
        font-size: 16px;
        outline: none;
        margin: 10px 50px 10px 0px;
        &:hover {
          background: rgba(193, 255, 206, 0.7);
        }
      }

      .edit {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        background: rgba(193, 215, 255, 1);
        border: none;
        color: rgba(0, 64, 32, 1);
        cursor: pointer;
        display: block;
        font-size: 16px;
        outline: none;
        margin: 10px 10px 10px 50px;
        &:hover {
          background: rgba(193, 215, 255, 0.7);
        }
      }
    }
  }
}
</style>
