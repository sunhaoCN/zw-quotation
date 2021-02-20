<template>
  <div class="btnBoxWrap"   v-on:click="sures">
    <button :class="col=='sure'?'active1':''" :disabled="col=='sure'?false:true">{{message}}</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      col:String
    },

    data() {
      return {

      };
    },
    computed: {

    },
    mounted: function() {},
    methods: {
      sures() {
        this.$emit("btnClick")


      }

    }
  };
</script>


<style scoped lang="less">
  @mainColor: #78d354;

  .btnBoxWrap{
    width: 100%;
    margin-top: 0.25rem;
    button{
      display: block;
      width: 12.2rem;
      height: 2.88rem;
      text-align: center;
      line-height: 0.88rem;
      border-radius: 0.8rem;
      font-size: 1.3rem;
      color: #fff;
      outline: none;
      border: none;
      margin: 0 auto;
      letter-spacing: 2px;
      background: -webkit-linear-gradient(left, #b4df8d, #d8f2ae);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #b4df8d, #d8f2ae);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #b4df8d, #d8f2ae);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #b4df8d, #d8f2ae);
    }
    .active1{
      background: -webkit-linear-gradient(left, #67BD19, #B5E861);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #67BD19, #B5E861);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #67BD19, #B5E861);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #67BD19, #B5E861);
      /* 标准的语法 */
      -webkit-touch-callout: none;
      /*系统默认菜单被禁用*/
      -webkit-user-select: none;
      /*webkit浏览器*/
      -khtml-user-select: none;
      /*早期浏览器*/
      -moz-user-select: none;
      /*火狐*/
      -ms-user-select: none;
      /*IE10*/
      user-select: none;
    }
  }
</style>
