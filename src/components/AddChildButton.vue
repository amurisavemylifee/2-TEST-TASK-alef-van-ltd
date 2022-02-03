<template>
  <button class="component_button_add_child">
    <img src="@/assets/Union.png" />
    Добавить ребенка
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.component_button_add_child {
  cursor: pointer;
  color: #01a7fd;
  border: 2px solid #01a7fd;
  font-size: 14px;
  line-height: 24px;
  background: white;
  border-radius: 100px;
  padding: 10px 20px;
  img {
    margin-right: 8px;
    transform: translate(0, 20%);
  }
}
</style>