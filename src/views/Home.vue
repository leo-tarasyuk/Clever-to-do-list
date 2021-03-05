<template>
  <div class="home">
    <lazyHeader />
    <lazyCalendar />
    <lazyListOfTasks />
  </div>
</template>

<script>
const lazyHeader = () => import("@/components/Header");
const lazyCalendar = () => import("@/components/Calendar");
const lazyListOfTasks = () => import("@/components/ListOfTasks");
// import Header from "@/components/Header";
// import Calendar from "@/components/Calendar";
// import ListOfTasks from "@/components/ListOfTasks";

export default {
  components: {
    lazyHeader,
    lazyCalendar,
    lazyListOfTasks
  }
};
</script>

<style scoped>
.home {
  margin: 0px auto;
  margin-top: 40px;
  margin-bottom: 20px;
  max-width: 762px;
  box-shadow: 0 0 10px #999;
  border-radius: 2px;
}
@media (max-width: 762px) {
  .home {
    box-shadow: none;
  }
}
</style>
