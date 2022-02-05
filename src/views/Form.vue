<template>
  <div class="container">
    <!-- Формы для изменения данных родителя -->
    <div class="title">Персональные данные</div>
    <Input
      :input_label="'Имя'"
      :input_value="FormParentData.name"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    />
    <Input
      :input_label="'Возраст'"
      :input_value="FormParentData.age"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    />
    <!-- Формы для изменения данных детей -->
    <div class="title">Дети (макс. 5)</div>
    <!-- Кнопка добавления ребенка(если детей 5 она исчезает) -->
    <button class="add-btn" v-if="!ChildCountCheck" @click="AddChild()">
      <img src="@/assets/Union.png" />
      <span>Добавить ребенка</span>
    </button>
    <!-- Флекс обертка для форм с данными детей -->
    <div class="flex-wrapper">
      <child-forms
        v-for="(Child, id) in FormChildsData"
        :key="Child"
        :ChildData="Child"
        :ChildID="id"
        @DeleteChild="DeleteChild(id)"
        @inputChange="ChildDataFormChange"
        @enterPress="SaveData"
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
  inject: ["ParentData", "ChildsData", "FormParentData", "FormChildsData"],
  components: {
    Input,
    ChildForms,
  },
  computed: {
    // Проверка количества детей
    ChildCountCheck() {
      return this.FormChildsData.length == 5 ? true : false;
    },
  },
  methods: {
    // Добавить ребенка
    AddChild() {
      this.FormChildsData.push({ name: "", age: "" });
    },
    // Удалить ребенка
    DeleteChild(id) {
      this.FormChildsData.splice(id, 1);
    },
    // Изменение данных детей в формах
    ChildDataFormChange(name, age, id) {
      this.FormChildsData[id].name = name;
      this.FormChildsData[id].age = age;
    },
    // Изменение данных родителя
    ParentDataChange(type, value) {
      if (type == "Имя") {
        this.FormParentData.name = value;
      } else if (type == "Возраст") {
        this.FormParentData.age = value;
      }
    },
    // Сохранить данные из инпутов
    SaveData() {
      if (
        this.FormValidation(this.FormParentData) &&
        this.FormChildsData.every((el) => this.FormValidation(el))
      ) {
        this.ParentData.name = this.FormParentData.name;
        this.ParentData.age = this.FormParentData.age;
        this.ChildsData.splice(0);
        Object.values(this.FormChildsData).forEach((el) =>
          this.ChildsData.push(el)
        );
        this.$router.push("preview");
      } else {
        alert("Введены некорректные данные");
      }
    },
    // Валидация форм
    FormValidation(obj) {
      if (
        obj.name != "" &&
        obj.age != "" &&
        /^[a-zA-ZА-Яа-я\u0020]*$/g.test(obj.name) &&
        /^[0-9]*$/g.test(obj.age)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>