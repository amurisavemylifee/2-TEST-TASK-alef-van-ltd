<template>
  <div class="child-card">
    {{ childData.name }}, {{ childData.age + " " }}{{ AgeCheck(childData.age) }}
  </div>
</template>

<script>
export default {
  name: "PreviewChildCard",
  props: {
    childData: {
      type: Object,
    },
  },
  inject: ["AgeCheck"],
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