<template>
  <div class="child_card">{{ Data.Name }}, {{ Data.Age + " " }}лет</div>
</template>

<script>
export default {
  props: {
    Data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.child_card {
  display: inline-block;
  margin-right: auto;
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
.child_card + .child_card {
  margin-top: 20px;
}
</style>