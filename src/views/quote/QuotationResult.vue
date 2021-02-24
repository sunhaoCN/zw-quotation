<template>

  <div class="main">
    <quotation-result-nav-bar/>
    <scroll class="content">
      <div class="ssreWrap flex-h">
        <div class="top2 scrollerDiv">
          <div class="infoArea">
            <div class="titleBox flex-h">
               <span class="flex-h flex1 pos">
                <b>基本参数</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>产品类型：</b>
                <b>{{param.productType}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>产品材质：</b>
                <b>{{param.material}}</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>产品颜色：</b>
                <b>{{param.color}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>产品长度：</b>
                <b>{{param.length}}cm</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>产品宽度：</b>
                <b>{{param.width}}cm</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>产品高度：</b>
                <b>{{param.height}}cm</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>产品厚度：</b>
                <b>{{param.thickness}}mm</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>产品数量：</b>
                <b>{{param.count}}</b>
              </span>
            </div>
            <div class="airBox flex-h"/>
          </div>
          <div class="infoArea">
            <div class="titleBox flex-h">
               <span class="flex-h flex1 pos">
                <b>动态参数</b>
                 <img src="~assets/img/common/edit.png" alt="">
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>长度排摸：</b>
                <b>{{lengthCount}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>宽度排摸：</b>
                <b>{{widthCount}}</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>高度留边：</b>
                <b>{{param.heightSpace}}cm</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>加工成本：</b>
                <b>{{param.costPerRoll}}/卷</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>单个报价：</b>
                <b>--</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>税率(%)：</b>
                <b>--</b>
              </span>
            </div>
            <div class="airBox flex-h"/>
          </div>
          <div class="resultArea">
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>材料数量需求</b>
                <b>10</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>材料总量(kg)</b>
                <b>1450</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>材料成本</b>
                <b>1.198</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>加工成本</b>
                <b>0.141</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>单个成本</b>
                <b>1.3277</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>单个含税成本</b>
                <b>1.3377</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>总成本</b>
                <b>26553.67</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>含税总成本</b>
                <b>26900.43</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>销售额</b>
                <b>--</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>利润率(%)</b>
                <b>--</b>
              </span>
            </div>
          </div>
          <div class="airBox flex-h"/>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import QuotationResultNavBar from "./childrenComps/QuotationResultNavBar";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "QuotationResult",
    components: {
      QuotationResultNavBar,
      Scroll
    },
    data() {
      return {
        param: {},

      }
    },
    methods: {

    },
    mounted() {
      this.param = this.$route.query
      console.log(this.param);
      console.log(this.punchSpace);
      console.log(this.lengthCount);
    },
    computed: {
      //长度排模
      lengthCount() {
        // return this.param.lengthMax/;
        return parseInt(this.param.productType === '有边'
          ? (Number(this.param.lengthMax) - Number(this.punchSpace))
          /(Number(this.param.length)
            + Number((Number(this.param.height) * Number(this.param.heightSpace) > 1
              ? Number(this.param.height) * Number(this.param.heightSpace) : 1)))
          : (Number(this.param.lengthMax) - Number(this.punchSpace)) /(Number(this.param.length) + 1));

      },

      //宽度排模
      widthCount() {
        // return this.param.lengthMax/;
        return parseInt(this.param.productType === '有边'
          ? (Number(this.param.widthMax) - 4)
          /(Number(this.param.width)
            + Number((Number(this.param.height) * Number(this.param.heightSpace) > 1
              ? Number(this.param.height) * Number(this.param.heightSpace) : 1)))
          : (Number(this.param.widthMax) - 4) /(Number(this.param.width) + 1));

      },

      //长度冲床留边
      punchSpace() {
        return  this.param.height < 4 ? 4 : this.param.height;
      }
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
    bottom: 0;
    right: 0;
    left: 0;
  }

  .ssreWrap {
    width: 100%;
    /*height: 100vh;*/
    background: #fff;
    flex-direction: column;
    overflow: hidden;
    align-items: initial;
    justify-content: initial !important;
  }

  .top2 {
    flex: 1
  }

  .scrollerDiv {
    padding: 0 1.2rem;
    width: auto;
    /*height:100vh;*/
  }

  .infoArea {
    margin-top: 1.1rem;
    width: 100%;
    /*height: 20rem;*/
    box-shadow: 0px 0px 20px 0px rgba(204, 204, 204, 0.3);
    border-radius: 0.8rem;
  }

  .titleBox {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
    /*background-color: red;*/
  }

  .titleBox span {
    display: flex;
  }

  .titleBox img {
    width: 2rem;
  }

  .titleBox b {
    color:  #6CBF20;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1;
    /*margin-top: 1rem;*/
    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  }

  .absBox {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
    /*background-color: red;*/
  }

  .absBox span {
    display: flex;
  }

  .absBox b {
    color: #999;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1;

    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  }

  .airBox {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0rem 0.8rem;
    box-sizing: border-box;
    /*background-color: red;*/
  }

  .pos {
    position: relative;
  }

  .resultArea {
    margin-top: 1.1rem;
    width: 100%;
    /*height: 20rem;*/
    box-shadow: 0px 0px 40px 0px rgba(204, 204, 204, 0.3);
    border-radius: 0.1rem;
    background-color: #E8E8FF;
    border: #999 solid 0.5px;
  }

  .resultArea b {
    color: #222;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1;

    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  }
  .resultTitle b {
    color: #e5e5e5;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1;
    /*margin-top: 1rem;*/
    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  }

  .even {
    background-color: #fff;
    height: 3rem;
    line-height: 3rem;
  }

  .odd {
    height: 3rem;
    line-height: 3rem;
  }
</style>
