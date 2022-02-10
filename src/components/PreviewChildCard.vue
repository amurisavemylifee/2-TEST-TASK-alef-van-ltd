<template>
  <div class="child-card">
    {{ childData.name }}, {{ childData.age + " " }}{{ AgeCheck(childData.age) }}
  </div>
</template>

<script>
export default {
  inject: ["AgeCheck"],
  props: {
    childData: {
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