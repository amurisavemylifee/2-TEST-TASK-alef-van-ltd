<!-- eslint-disable -->
<template>
  <div class="grid-wrapper">
    <Input
      :input_label="'Имя'"
      :input_value="name"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('enterPress')"
    />
    <Input
      :input_label="'Возраст'"
      :input_value="age"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('enterPress')"
    />
    <div class="delete-btn" @click="this.$emit('DeleteChild')">Удалить</div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  data() {
    return {
      name: this.child_data.name,
      age: this.child_data.age,
    };
  },
  props: {
    child_data: {
      type: Object,
    },
    childID: {
      type: Number,
    },
  },
  components: {
    Input,
  },
  methods: {
    InputChanges(type, value) {
      if (type == "Имя") {
        this.name = value;
      } else if (type == "Возраст") {
        this.age = value;
      }
      this.$emit("inputChange", this.name, this.age, this.childID);
    },
  },
};
</script>