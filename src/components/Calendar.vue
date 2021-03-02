<template>
  <div class="calendar">
    <div class="calendar-size" @mousemove="onScroll" @mouseleave="offScroll">
      <ul class="list-of-days">
        <li
          v-for="item in calendar"
          :key="item.day"
          class="day"
          :class="{
            black: item.dayOfWeek !== 'Sun',
            orange: item.dayOfWeek === 'Sun',
            current:
              item.day === getCurrentDay.day &&
              item.numberOfMonth === getCurrentDay.numberOfMonth
          }"
          @click="checkTasks(item)"
        >
          <div>{{ item.dayOfWeek }}</div>
          <div>{{ item.day }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      calendar: this.createCalendar(
        new Date().getMonth(),
        new Date().getDay(),
        new Date().getFullYear()
      )
    };
  },
  computed: {
    ...mapGetters("user", ["getCurrentDay"])
  },
  methods: {
    ...mapActions("user", ["chooseDate", "showTasks"]),
    checkTasks(date) {
      this.chooseDate(date);
      this.showTasks();
    },
    offScroll() {
      document.querySelector(".list-of-days").style.overflow = "hidden";
    },
    onScroll() {
      document.querySelector(".list-of-days").style.overflow = "auto";
    },
    createCalendar(month, day, year) {
      const date = new Date(year, month, day);
      const week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
      const calendar = [];
      do {
        calendar.push({
          day: date.getDate(),
          dayOfWeek: week.find((item, index) => {
            if (index === date.getDay()) return item;
          }),
          month: date.getMonth(),
          year: date.getFullYear()
        });

        date.setDate(date.getDate() + 1);
      } while (day !== date.getDate());
      return calendar;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  .calendar {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    .calendar-size {
      width: 662px;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .list-of-days {
        width: 95%;
        overflow: hidden;
        display: flex;
        position: absolute;
        margin-right: 10px;
        .day {
          min-width: 40px;
          min-height: 50px;
          margin: 10px;
          list-style: none;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
        .current {
          background-color: black;
          color: white;
        }
        .black {
          border: 2px solid rgba(0, 0, 0, 0.1);
        }
        .orange {
          border: 2px solid rgba(255, 106, 0, 0.9);
          color: rgba(255, 106, 0, 0.9);
        }
      }
    }
  }
}
</style>
