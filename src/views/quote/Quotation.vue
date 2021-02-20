<template>
  <div class="main">
    <quotation-nav-bar></quotation-nav-bar>
    <scroll class="content">
      <h2>报价首页</h2>
      <button @click="quote">报价</button>

    </scroll>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar";
  import QuotationNavBar from "./childrenComps/QuotationNavBar";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Quotation",
    components: {
      MainTabBar,
      QuotationNavBar,
      Scroll
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
  .main {
    position: relative;
    height: 100vh;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>
