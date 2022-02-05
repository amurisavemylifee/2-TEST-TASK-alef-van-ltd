<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script>
import { provide, ref, reactive } from "vue";
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
export default {
  setup() {
    let ParentData = reactive({
      name: "Виталий",
      age: "31",
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
    Header,
    Footer,
  },
};
</script>