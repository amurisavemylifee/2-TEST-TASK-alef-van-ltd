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
    let Parent = reactive({
      name: "Виталий",
      age: "31",
    });
    let Childs = ref([]);
    provide("ParentData", Parent);
    provide("ChildsData", Childs.value);
  },
  components: {
    Header,
    Footer,
  },
};
</script>