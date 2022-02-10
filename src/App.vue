<template>
  <TheHeader />

  <router-view v-slot="{ Component }"
    ><keep-alive><component :is="Component"></component></keep-alive
  ></router-view>
  <TheFooter />
</template>
<script>
import { provide, ref, reactive } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  setup() {
    let ParentData = reactive({
      name: "",
      age: "",
    });
    let ChildsData = ref([]);
    let FormParentData = reactive({
      name: ParentData.name,
      age: ParentData.age,
    });
    let FormChildsData = ref(ChildsData.value.slice());
    provide("ParentData", ParentData);
    provide("ChildsData", ChildsData.value);
    provide("FormParentData", FormParentData);
    provide("FormChildsData", FormChildsData.value);
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>