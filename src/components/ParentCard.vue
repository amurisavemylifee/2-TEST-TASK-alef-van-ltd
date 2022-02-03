<template>
  <div class="parent_card">
    {{ ParentData.Name }}, {{ ParentData.Age + " " }} лет
  </div>
</template>

<script>
export default {
  inject: ["ParentData"],
};
</script>


<style lang="scss" scoped>
.parent_card {
  color: #111111;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
</style>
