<template>
  <div class="grid-wrapper">
    <app-input
      input-label="Имя"
      :input-value="Name"
      input-type="text"
      :errors-handler="[
        errorsHandler.ChildNameIncludesNumbers,
        errorsHandler.ChildNameEmpty,
      ]"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('EnterPress')"
    ></app-input>
    <app-input
      input-label="Возраст"
      :input-value="Age"
      input-type="number"
      :errors-handler="[errorsHandler.ChildAgeEmpty]"
      @inputChange="InputChanges"
      @keypress.enter="this.$emit('EnterPress')"
    ></app-input>
    <div class="delete-btn" @click="this.$emit('DeleteChild')">Удалить</div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
export default {
  emits: ["EnterPress", "DeleteChild", "InputChange"],
  data() {
    return {
      Name: this.childData.name,
      Age: this.childData.age,
    };
  },
  props: {
    childData: {
      type: Object,
    },
    childId: {
      type: Number,
    },
    errorsHandler: {
      type: Object,
    },
  },
  components: {
    AppInput,
  },
  methods: {
    InputChanges(type, value) {
      if (type == "Имя") {
        this.Name = value;
      } else if (type == "Возраст") {
        this.Age = value;
      }
      this.$emit("InputChange", this.Name, this.Age, this.childId);
    },
  },
};
</script>