<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      Parent: {
        Name: "Виталий",
        Age: 30,
      },
      Childs: [
        {
          Name: "Маша",
          Age: 56,
        },
        {
          Name: "Оля",
          Age: 11,
        },
        {
          Name: "Катя",
          Age: 14,
        },
        {
          Name: "Лена",
          Age: 33,
        },
        {
          Name: "Виктория",
          Age: 21,
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
    Navbar,
    Footer,
  },
};
</script>