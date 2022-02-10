<template>
  <div class="child-card">
    {{ ChildData.name }}, {{ ChildData.age + " " }}{{ AgeCheck(ChildData.age) }}
  </div>
</template>

<script>
export default {
  inject: ["AgeCheck"],
  props: {
    ChildData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.child-card {
  display: inline-block;
  margin-right: auto;
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
</style>