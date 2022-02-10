<template>
  <div :class="{ input_wrapper: true, warning: !ErrorCheck }">
    <div class="label">{{ Label }}</div>
    <input
      :type="inputType"
      class="input"
      v-model="Value"
      @input="this.$emit('inputChange', Label, Value)"
    />
    <small v-for="i in errorsHandler" :key="i">{{ i }}</small>
  </div>
</template>
  
<script>
export default {
  name: "AppInput",
  emits: ["inputChange"],
  props: {
    inputLabel: {
      type: String,
      default: "",
    },
    inputValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    errorsHandler: {
      type: Array,
    },
  },
  data() {
    return {
      Value: this.inputValue,
      Label: this.inputLabel,
    };
  },
  computed: {
    ErrorCheck() {
      return this.errorsHandler.every((el) => el === null);
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