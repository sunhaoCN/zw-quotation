<template>
  <div>
    <quotation-result-nav-bar></quotation-result-nav-bar>
    <h2>报价结果</h2>
    <div class="flex-h absBox" >
      <span class="flex-h flex1" style="position: relative;">
         <v-select :options="productTypeList"></v-select>
      </span>

    </div>


  </div>
</template>

<script>
  import QuotationResultNavBar from "./childrenComps/QuotationResultNavBar";

  import vSelect from "vue-select"

  export default {

    name: "QuotationResult",
    components: {
      QuotationResultNavBar,

      vSelect
    },
    data() {
      return {
        productTypeList: [{label: 'a'}, {label: 'b'}, {label: 'c'}],
        productType: '',

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  @import "~vue-select/dist/vue-select.css";

  .absBox {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0rem 1rem;
    box-sizing: border-box;

  }
</style>
