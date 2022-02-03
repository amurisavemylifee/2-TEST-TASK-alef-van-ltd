<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="form__title">Персональные данные</div>
    <Input
      :label_value="'Имя'"
      :PlaceholderData="ParentData.Name"
      @changeInput="console.log()"
    />
    <Input :label_value="'Возраст'" :PlaceholderData="ParentData.Age" />
    <div class="form__title">Дети (макс. 5)</div>
    <AddBtn class="add-btn" @click="AddChild()" v-if="!BlockButton" />
    <div class="flex-wrapper">
      <div class="child__wrapper" v-for="(Child, id) in ChildsData">
        <Input :label_value="'Имя'" :PlaceholderData="Child.Name" />
        <Input :label_value="'Возраст'" :PlaceholderData="Child.Age" />
        <div class="delete-btn" @click="DeleteChild(id)">Удалить</div>
      </div>
    </div>
    <SaveBtn class="save-btn" />
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import AddBtn from "../components/AddChildButton.vue";
import SaveBtn from "../components/SaveButton.vue";
export default {
  data() {
    return {
      ParentFormValues: { Name: "", Age: "" },
    };
  },
  inject: ["ParentData", "ChildsData"],
  components: {
    Input,
    AddBtn,
    SaveBtn,
  },
  computed: {
    BlockButton() {
      return this.ChildsData.length == 5 ? true : false;
    },
  },
  methods: {
    DeleteChild(id) {
      this.ChildsData.splice(id, 1);
    },
    AddChild() {
      this.ChildsData.push({ Name: "", Age: "" });
    },
  },
};
</script>
<!-- eslint-enable -->