<!-- eslint-disable -->
<template>
  <div class="container">
    <!-- Формы для изменения данных родителя -->
    <div class="title">Персональные данные</div>
    <Input
      :input_label="'Имя'"
      :input_value="Form_Parent_Data.name"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    />
    <Input
      :input_label="'Возраст'"
      :input_value="Form_Parent_Data.age"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    />
    <!-- Формы для изменения данных детей -->
    <div class="title">Дети (макс. 5)</div>
    <!-- Кнопка добавления ребенка(если детей 5 она исчезает) -->
    <button class="add-btn" v-if="!BlockButton" @click="AddChild()">
      <img src="@/assets/Union.png" />
      Добавить ребенка
    </button>
    <!-- Флекс обертка для форм с данными детей -->
    <div class="flex-wrapper">
      <child-forms
        v-for="(Child, id) in Form_Childs_Data"
        :key="Child"
        :child_data="Child"
        :childID="id"
        @DeleteChild="DeleteChild(id)"
        @inputChange="ChildDataLocalSave"
      ></child-forms>
    </div>
    <!-- Кнопка сохранения форм -->
    <button class="save-btn" @click="SaveData">Сохранить</button>
  </div>
</template>

<script>
import ChildForms from "../components/ChildForms.vue";
import Input from "../components/Input.vue";
export default {
  data() {
    return {
      Form_Parent_Data: {
        name: this.ParentData.name,
        age: this.ParentData.age,
      },
      // slice использован для копирования списка
      Form_Childs_Data: this.ChildsData.slice(),
    };
  },
  inject: ["ParentData", "ChildsData"],
  components: {
    Input,
    ChildForms,
  },
  computed: {
    BlockButton() {
      return this.Form_Childs_Data.length == 5 ? true : false;
    },
  },
  methods: {
    AddChild() {
      this.Form_Childs_Data.push({ name: "", age: "" });
    },
    DeleteChild(id) {
      this.Form_Childs_Data.splice(id, 1);
    },
    ChildDataLocalSave(name, age, id) {
      this.Form_Childs_Data[id].name = name;
      this.Form_Childs_Data[id].age = age;
    },
    ParentDataChange(type, value) {
      if (type == "Имя") {
        this.Form_Parent_Data.name = value;
      } else if (type == "Возраст") {
        this.Form_Parent_Data.age = value;
      }
    },
    SaveData() {
      this.ParentData.name = this.Form_Parent_Data.name;
      this.ParentData.age = this.Form_Parent_Data.age;
    },
  },
};
</script>
<!-- eslint-enable -->