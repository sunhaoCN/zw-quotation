<template>
  <div>
    <h2>报价首页</h2>
    <button @click="quote">报价</button>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/MainTabBar/MainTabBar";

  export default {
    name: "Quotation",
    components: {
      MainTabBar
    },
    methods: {
      quote() {
        this.$router.replace('/quote/result')
      }
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
