<template>
  <div class="header">
    <nav-bar class="quotation-nav">
      <div slot="left" class="back" @click="backClick">
        <img  src="~assets/img/navbar/top_icon_back.svg" alt="">
      </div>
      <div slot="center">报价结果</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "QuotationNavBar",
    components: {
      NavBar
    },
    methods: {
      backClick() {

        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back{
    vertical-align: middle;
  }
  .back img {
    height: 22px;
    width: 22px;
    vertical-align: middle;
  }
</style>
