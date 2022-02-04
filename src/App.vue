<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
export default {
  data() {
    return {
      Parent: {
        name: "Виталий",
        age: "31",
      },
      Childs: [
        {
          name: "Маша",
          age: "3",
        },
      ],
    };
  },
  provide() {
    return {
      ParentData: this.Parent,
      ChildsData: this.Childs,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {},
};
</script>