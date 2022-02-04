<template>
  <div class="child-card">
    {{ Data.name }}, {{ Data.age + " " }}{{ AgeCheck(Data.age) }}
  </div>
</template>

<script>
export default {
  props: {
    Data: {
      type: Object,
    },
  },
  methods: {
    AgeCheck(age) {
      if (
        ["1", "21", "31", "41", "51", "61", "71", "81", "91", "101"].includes(
          age
        )
      ) {
        return "год";
      } else if (
        [
          "2",
          "3",
          "4",
          "22",
          "23",
          "24",
          "32",
          "33",
          "34",
          "42",
          "43",
          "44",
          "52",
          "53",
          "54",
          "62",
          "63",
          "64",
          "72",
          "73",
          "74",
          "82",
          "83",
          "84",
          "92",
          "93",
          "94",
        ].includes(age)
      ) {
        return "года";
      } else {
        return "лет";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.child-card {
  display: inline-block;
  margin-right: auto;
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
</style>