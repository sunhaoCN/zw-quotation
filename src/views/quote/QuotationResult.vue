<template>
  <div>
    <h2>报价结果</h2>
    <button @click="backClick">返回</button>
  </div>
</template>

<script>
  export default {
    name: "QuotationResult",
    methods: {
      backClick() {
        this.$router.replace('/quote')
      }
    }
  }
</script>

<style scoped>

</style>
