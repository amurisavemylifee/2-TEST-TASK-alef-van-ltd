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
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    let ParentData = reactive({
      name: "",
      age: "",
    });
    let ChildsData = ref([]);
    provide("ParentData", ParentData);
    provide("ChildsData", ChildsData.value);
  },
};
</script>