<template>
  <div class="input_wrapper">
    <div class="label">{{ label_value }}</div>
    <input
      type="text"
      class="input"
      :value="PlaceholderData"
      @input="$emit('changeInput', PlaceholderData)"
    />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      label_text: this.label_value,
    };
  },
  props: {
    label_value: {
      type: String,
      default: "",
    },
    PlaceholderData: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.input_wrapper {
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px;
}
.input {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  &:focus {
    outline: 0;
  }
}
.label {
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
  user-select: none;
}
</style>