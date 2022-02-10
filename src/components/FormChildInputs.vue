<template>
  <div class="grid-wrapper">
    <app-input
      input_label="Имя"
      :input_value="name"
      input_type="text"
      :error="[error.ChildNameIncludesNumbers, error.ChildNameEmpty]"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('enterPress')"
    ></app-input>
    <app-input
      input_label="Возраст"
      :input_value="age"
      input_type="number"
      :error="[error.ChildAgeEmpty]"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('enterPress')"
    ></app-input>
    <div class="delete-btn" @click="this.$emit('DeleteChild')">Удалить</div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
export default {
  data() {
    return {
      name: this.ChildData.name,
      age: this.ChildData.age,
    };
  },
  props: {
    ChildData: {
      type: Object,
    },
    ChildID: {
      type: Number,
    },
    error: {
      type: Object,
    },
  },
  components: {
    AppInput,
  },
  methods: {
    InputChanges(type, value) {
      if (type == "Имя") {
        this.name = value;
      } else if (type == "Возраст") {
        this.age = value;
      }
      this.$emit("inputChange", this.name, this.age, this.ChildID);
    },
  },
};
</script>