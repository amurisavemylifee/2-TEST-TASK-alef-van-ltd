<!-- eslint-disable -->
<template>
  <div class="container">
    <!-- Данные Родителя -->
    <div class="title">Персональные данные</div>
    <div class="parent-card">
      {{ ParentData.name }}, {{ ParentData.age + " " }}
      {{ AgeCheck(ParentData.age) }}
    </div>
    <!-- Данные детей -->
    <div class="title">Дети</div>
    <div class="flex-wrapper">
      <ChildCard v-for="Child in ChildsData" :Data="Child" />
    </div>
  </div>
</template>

<script>
import ChildCard from "../components/ChildCard.vue";
export default {
  inject: ["ParentData", "ChildsData"],
  components: {
    ChildCard,
  },
  methods: {
    AgeCheck(age) {
      if (
        ["1", "21", "31", "41", "51", "61", "71", "81", "91", "101"].includes(
          age
        )
      ) {
        return "год";
      } else if (
        [
          "2",
          "3",
          "4",
          "22",
          "23",
          "24",
          "32",
          "33",
          "34",
          "42",
          "43",
          "44",
          "52",
          "53",
          "54",
          "62",
          "63",
          "64",
          "72",
          "73",
          "74",
          "82",
          "83",
          "84",
          "92",
          "93",
          "94",
        ].includes(age)
      ) {
        return "года";
      } else {
        return "лет";
      }
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
}
</style>