<template>
  <div class="container">
    <!-- Данные Родителя -->
    <div class="title">Персональные данные</div>
    <div class="parent-card" v-if="checkFormData">
      {{ ParentData.name }}, {{ ParentData.age + " " }}
      {{ AgeCheck(ParentData.age) }}
    </div>
    <!-- Данные детей -->
    <div class="title">Дети</div>
    <div class="flex-wrapper">
      <ChildCard v-for="Child in ChildsData" :ChildData="Child" :key="Child" />
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
      if (age.slice(-2, -1)[0] == "1") {
        return "лет";
      } else if (["1"].includes(age.slice(-1))) {
        return "год";
      } else if (["2", "3", "4"].includes(age.slice(-1))) {
        return "года";
      }
      return "лет";
    },
  },
  provide() {
    return {
      AgeCheck: this.AgeCheck,
    };
  },
  computed: {
    checkFormData() {
      return this.ParentData.name !== "" && this.ParentData.age !== "";
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
}
</style>