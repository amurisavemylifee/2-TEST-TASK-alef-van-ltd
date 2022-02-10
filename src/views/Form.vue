<template>
  <div class="container">
    <!-- Формы для изменения данных родителя -->
    <div class="title">Персональные данные</div>
    <app-input
      input_label="Имя"
      :input_value="FormParentData.name"
      input_type="text"
      :error="[errors.ParentNameIncludesNumbers, errors.ParentNameEmpty]"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    ></app-input>
    <app-input
      input_label="Возраст"
      :input_value="FormParentData.age"
      input_type="number"
      :error="[errors.ParentAgeEmpty]"
      @inputChange="ParentDataChange"
      @keypress.enter="SaveData"
    ></app-input>
    <!-- Формы для изменения данных детей -->
    <div class="title">Дети (макс. 5)</div>
    <!-- Кнопка добавления ребенка(если детей 5 она исчезает) -->
    <button class="add-btn" v-if="!ChildCountCheck" @click="AddChild()">
      <img src="@/assets/Union.png" />
      <span>Добавить ребенка</span>
    </button>
    <!-- Флекс обертка для форм с данными детей -->
    <div class="flex-wrapper">
      <form-child-inputs
        v-for="(Child, id) in FormChildsData"
        :key="Child"
        :ChildData="Child"
        :ChildID="id"
        :error="errors.ChildsErrors[id]"
        @DeleteChild="DeleteChild(id)"
        @inputChange="ChildDataFormChange"
        @enterPress="SaveData"
      ></form-child-inputs>
    </div>
    <!-- Кнопка сохранения форм -->
    <button class="save-btn" @click="SaveData">Сохранить</button>
  </div>
</template>

<script>
import FormChildInputs from "../components/FormChildInputs.vue";
import AppInput from "../components/AppInput.vue";
export default {
  inject: ["ParentData", "ChildsData", "FormParentData", "FormChildsData"],
  components: {
    AppInput,
    FormChildInputs,
  },
  data() {
    return {
      errors: {
        ParentNameIncludesNumbers: null,
        ParentNameEmpty: null,
        ParentAgeEmpty: null,
        ChildsErrors: [],
      },
    };
  },
  computed: {
    // Проверка количества детей
    ChildCountCheck() {
      return this.FormChildsData.length == 5;
    },
  },
  methods: {
    // Добавить ребенка
    AddChild() {
      this.FormChildsData.push({ name: "", age: "" });
      this.errors.ChildsErrors.push({
        ChildNameIncludesNumbers: null,
        ChildNameEmpty: null,
        ChildAgeEmpty: null,
      });
    },
    // Удалить ребенка
    DeleteChild(id) {
      this.FormChildsData.splice(id, 1);
      this.errors.ChildsErrors.splice(id, 1);
    },
    // Изменение данных детей в формах
    ChildDataFormChange(name, age, id) {
      this.FormChildsData[id].name = name;
      this.FormChildsData[id].age = String(age);
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
      if (!this.FormValidation()) {
        this.ParentData.name = this.FormParentData.name;
        this.ParentData.age = String(this.FormParentData.age);
        this.ChildsData.splice(0);
        Object.values(this.FormChildsData).forEach((el) =>
          this.ChildsData.push(el)
        );
        this.$router.push("preview");
      }
    },
    FormValidation() {
      let errorState = false;
      if (/^[a-zA-ZА-Яа-я\u0020]*$/g.test(this.FormParentData.name)) {
        this.errors.ParentNameIncludesNumbers = null;
      } else {
        this.errors.ParentNameIncludesNumbers = "В имени не могут быть цифры";
        errorState = true;
      }
      if (this.FormParentData.name != "") {
        this.errors.ParentNameEmpty = null;
      } else {
        this.errors.ParentNameEmpty = "Имя не может быть пустым";
        errorState = true;
      }
      if (this.FormParentData.age != "") {
        this.errors.ParentAgeEmpty = null;
      } else {
        this.errors.ParentAgeEmpty = "Возраст не может быть пустым";
        errorState = true;
      }
      for (let i = 0; i < this.errors.ChildsErrors.length; i++) {
        console.log(i);
        if (/^[a-zA-ZА-Яа-я\u0020]*$/g.test(this.FormChildsData[i].name)) {
          this.errors.ChildsErrors[i].ChildNameIncludesNumbers = null;
        } else {
          this.errors.ChildsErrors[i].ChildNameIncludesNumbers =
            "В имени не могут быть цифры";
          errorState = true;
        }
        if (this.FormChildsData[i].name != "") {
          this.errors.ChildsErrors[i].ChildNameEmpty = null;
        } else {
          this.errors.ChildsErrors[i].ChildNameEmpty =
            "Имя не может быть пустым";
          errorState = true;
        }
        if (this.FormChildsData[i].age != "") {
          this.errors.ChildsErrors[i].ChildAgeEmpty = null;
        } else {
          this.errors.ChildsErrors[i].ChildAgeEmpty =
            "Возраст не может быть пустым";
          errorState = true;
        }
      }
      return errorState;
    },
  },
};
</script>