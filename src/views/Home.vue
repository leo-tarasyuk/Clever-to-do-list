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
  margin: 0px auto
  margin-top: 40px
  margin-bottom: 20px
  max-width: 762px
  box-shadow: 0 0 10px #999
  border-radius: 2px
  @media (max-width: 762px)
    box-shadow: none
</style>
