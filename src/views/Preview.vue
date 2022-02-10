<template>
  <div class="container">
    <!-- Данные Родителя -->
    <div class="title">Персональные данные</div>
    <div class="parent-card" v-if="CheckFormData">
      {{ ParentData.name }}, {{ ParentData.age + " " }}
      {{ AgeCheck(ParentData.age) }}
    </div>
    <!-- Данные детей -->
    <div class="title">Дети</div>
    <div class="flex-wrapper">
      <preview-child-card
        v-for="Child in ChildsData"
        :child-data="Child"
        :key="Child"
      ></preview-child-card>
    </div>
  </div>
</template>

<script>
import PreviewChildCard from "../components/PreviewChildCard.vue";
export default {
  name: "Preview",
  components: {
    PreviewChildCard,
  },
  inject: ["ParentData", "ChildsData"],
  computed: {
    CheckFormData() {
      return this.ParentData.name !== "" && this.ParentData.age !== "";
    },
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
};
</script>

<style scoped>
.title {
  width: 100%;
}
</style>