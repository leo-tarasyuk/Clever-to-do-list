<template>
  <div class="home">
    <Header />
    <Calendar />
    <ListOfTasks />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Calendar from "@/components/Calendar";
import ListOfTasks from "@/components/ListOfTasks";

export default {
  components: {
    Header,
    Calendar,
    ListOfTasks
  }
};
</script>

<style lang="sass" scoped>
.home
  margin: 0 auto
  max-width: 762px
</style>
