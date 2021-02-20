<template>
  <div>
    <quotation-result-nav-bar></quotation-result-nav-bar>
    <h2>报价结果</h2>
    <button @click="backClick">返回</button>
  </div>
</template>

<script>
  import QuotationResultNavBar from "./childrenComps/QuotationResultNavBar";

  export default {

    name: "QuotationResult",
    components: {
      QuotationResultNavBar
    },
    methods: {
      backClick() {
        this.$router.replace('/quote')
      }
    }
  }
</script>

<style scoped>

</style>
