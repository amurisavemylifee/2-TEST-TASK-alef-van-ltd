<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="form__title">Персональные данные</div>
    <ParentCard />
    <div class="form__title">Дети</div>
    <div class="flex-wrapper">
      <ChildCard v-for="Child in ChildsData" :Data="Child" />
    </div>
  </div>
</template>

<script>
import ChildCard from "../components/ChildCard.vue";
import ParentCard from "../components/ParentCard.vue";
export default {
  inject: ["ChildsData"],
  components: {
    ChildCard,
    ParentCard,
  },
};
</script>

<style scoped>
.form__title {
  width: 100%;
}
</style>