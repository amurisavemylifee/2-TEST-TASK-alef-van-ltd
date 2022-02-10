<template>
  <div class="grid-wrapper">
    <app-input
      input-label="Имя"
      :input-value="name"
      input-type="text"
      :errors-handler="[error.ChildNameIncludesNumbers, error.ChildNameEmpty]"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('enterPress')"
    ></app-input>
    <app-input
      input-label="Возраст"
      :input-value="age"
      input-type="number"
      :errors-handler="[error.ChildAgeEmpty]"
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