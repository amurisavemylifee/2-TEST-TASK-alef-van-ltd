<template>
  <div :class="{ input_wrapper: true, warning: !errorCheck }">
    <div class="label">{{ label }}</div>
    <input
      :type="input_type"
      class="input"
      v-model="value"
      @input="this.$emit('inputChange', label, value)"
    />
    <small v-for="i in error" :key="i">{{ i }}</small>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      value: this.input_value,
      label: this.input_label,
    };
  },
  props: {
    input_label: {
      type: String,
      default: "",
    },
    input_value: {
      type: Number,
    },
    input_type: {
      type: String,
      default: "text",
    },
    error: {
      type: Array,
    },
  },
  computed: {
    errorCheck() {
      return this.error.every((el) => el === null);
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
.warning {
  border: 1px solid #ff0000;
}
small {
  font-size: 10px;
  color: #ff0000;
}
</style>