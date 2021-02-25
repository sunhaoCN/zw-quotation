<template>

  <div class="main">
    <!-- 导航栏   -->
    <quotation-result-nav-bar/>

    <!-- 报价结果区域   -->
    <scroll class="content">
      <div class="ssreWrap flex-h">
        <div class="top2 scrollerDiv">
          <span class="flex-h flex1 label">
            {{param.label}}
          </span>
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
                <b>长向留边：</b>
                <b>{{param.lengthHeightSpace}}cm</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>宽向留边：</b>
                <b>{{param.widthHeightSpace}}cm</b>
              </span>
            </div>
            <div class="absBox flex-h">
               <span class="flex-h flex1 pos">
                <b>加工成本：</b>
                <b>{{param.costPerRoll}}/卷</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>单个报价：</b>
                <b>{{offerPrice}}</b>
              </span>
            </div>
            <div class="absBox flex-h" style="width: 50%">
              <span class="flex-h flex1 pos">
                <b>税率(%)：</b>
                <b>{{tax}}</b>
              </span>
            </div>
            <div class="airBox flex-h"/>
          </div>
          <div class="resultArea">
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>材料数量需求</b>
                <b>{{materialRollCount}}</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>材料总量(kg)</b>
                <b>{{materialRollCount * weightPerRoll}}</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>材料成本</b>
                <b>{{(costPerProduct).toFixed(3)}}</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>加工成本</b>
                <b>{{(costProcessPerProduct).toFixed(3)}}</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>单价</b>
                <b>{{(totalCostPerProduct).toFixed(4)}}</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>含税单价</b>
                <b>{{(totalCostPerProductTax).toFixed(4)}}</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>总成本</b>
                <b>{{(totalCost).toFixed(2)}}</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>含税成本</b>
                <b>{{(totalCostTax).toFixed(2)}}</b>
              </span>
            </div>
            <div class="absBox flex-h odd">
               <span class="flex-h flex1 pos">
                <b>销售额</b>
                <b>{{salesValue}}</b>
              </span>
            </div>
            <div class="absBox flex-h even">
               <span class="flex-h flex1 pos">
                <b>利润率(%)</b>
                <b>{{profitRate}}</b>
              </span>
            </div>
          </div>
          <div class="airBox flex-h"/>
        </div>
      </div>
    </scroll>

    <!-- 报价动态参数调整区域   -->
    <scroll class="popUp" v-if="isPop">
      <div class="ssreWrap flex-h">
        <div class="top2 scrollerDiv popTransArea">

          <div class="infoArea popArea">
            <div class="titleBox flex-h">
               <span class="flex-h flex1 pos">
                <b>修改动态参数</b>
              </span>
            </div>
            <div class="popStatusBox flex-h" :class="{active: isOver}">
               <span class="flex-h flex1 pos">
                <b>排模长宽：</b>
                <b>
                  {{(lengthTotal).toFixed(2)}} × {{(widthTotal).toFixed(2)}}
                </b>
              </span>
            </div>
            <div class="popStatusBox flex-h">
               <span class="flex-h flex1 pos">
                <b>单价：</b>
                <b>{{(totalCostPerProduct).toFixed(4)}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>总成本：</b>
                <b>{{(totalCost).toFixed(2)}}</b>
              </span>
            </div>
            <div class="popStatusBox flex-h">
               <span class="flex-h flex1 pos">
                <b>含税单价：</b>
                <b>{{(totalCostPerProductTax).toFixed(4)}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>含税成本：</b>
                <b>{{(totalCostTax).toFixed(2)}}</b>
              </span>
            </div>
            <div class="popStatusBox flex-h">
               <span class="flex-h flex1 pos">
                <b>销售额：</b>
                <b>{{salesValue}}</b>
              </span>
              <span class="flex-h flex1 pos">
                <b>利润率：</b>
                <b>{{profitRate}}</b>
              </span>
            </div>
            <div class="popStatusBox flex-h"/>

            <div class="popAlterBox flex-h" >
               <span class="flex-h flex1">
									<b>长度排模</b>
									<input @blur="blurAdjust"
                         :placeholder="lengthCount"
                         type="number"
                         class="flex-1"
                         v-model="lengthCount">
								</span>
            </div>
            <div class="airBox flex-h"/>

          </div>
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
        offerPrice: '--',
        isPop: true,
      }
    },
    methods: {
      blurAdjust() {

        setTimeout(() => {
          if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            return
          }

          let result = 'pc';
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
            result = 'ios'
          } else if (/(Android)/i.test(navigator.userAgent)) { //判断Android
            result = 'android'
          }

          if (result = 'ios') {
            document.activeElement.scrollIntoViewIfNeeded(true);
          }
        }, 50)

      },
    },
    mounted() {
      this.param = this.$route.query

    },
    computed: {
      isOver() {
        if(this.lengthTotal > this.param.lengthMax || this.widthTotal > this.param.widthMax){
          return true
        }
        else {
          return false
        }
      },

      //长度排模数量
      lengthCount() {
        // return this.param.lengthMax/;
        return parseInt(this.param.productType === '有边'
          ? (Number(this.param.lengthMax) - Number(this.lengthPunchSpace))
          /(Number(this.param.length)
            + Number((Number(this.param.height) * Number(this.param.lengthHeightSpace) > Number(this.param.minHeightSpace)
              ? Number(this.param.height) * Number(this.param.lengthHeightSpace) : Number(this.minHeightSpace))))
          : (Number(this.param.lengthMax) - Number(this.lengthPunchSpace)) /(Number(this.param.length) + Number(this.param.noSideHeightSpace)));

      },

      //宽度排模数量
      widthCount() {
        // return this.param.lengthMax/;
        return parseInt(this.param.productType === '有边'
          ? (Number(this.param.widthMax) - Number(this.param.widthPunchSpace))
          /(Number(this.param.width)
            + Number((Number(this.param.height) * Number(this.param.widthHeightSpace) > Number(this.param.minHeightSpace)
              ? Number(this.param.height) * Number(this.param.widthHeightSpace) : Number(this.param.minHeightSpace))))
          : (Number(this.param.widthMax) - Number(this.param.widthPunchSpace)) /(Number(this.param.width) + Number(this.param.noSideHeightSpace)));

      },

      //长度冲床留边
      lengthPunchSpace() {
        return  this.param.lengthPunchSpace;
      },

      //长度排模
      lengthTotal() {
        return (this.param.productType === '有边'
                ? (Number(this.param.length)
                  + Number((Number(this.param.height) * Number(this.param.lengthHeightSpace) > Number(this.param.minHeightSpace)
                  ? Number(this.param.height) * Number(this.param.lengthHeightSpace) : Number(this.param.minHeightSpace))))
                : (Number(this.param.length) + Number(this.param.noSideHeightSpace))) * this.lengthCount + Number(this.lengthPunchSpace);
      },

      //宽度排模
      widthTotal() {
        return (this.param.productType === '有边'
          ? (Number(this.param.width)
            + Number((Number(this.param.height) * Number(this.param.widthHeightSpace) > Number(this.param.minHeightSpace)
              ? Number(this.param.height) * Number(this.param.widthHeightSpace) : Number(this.param.minHeightSpace))))
          : (Number(this.param.width) + Number(this.param.noSideHeightSpace))) * this.widthCount + Number(this.param.widthPunchSpace);
      },

      //材料数量需求，需要多少卷
      materialRollCount() {
        return Math.round(Number(this.param.count) / this.realOutputPerRoll + 1);
      },

      //实际每卷产量
      realOutputPerRoll() {
        return (this.paiMoOutput - 2) * this.lengthCount * this.widthCount;
      },

      //排模产量
      paiMoOutput() {
        return parseInt(Number(this.param.weightPerRoll)
          / (Number(this.param.thickness) / 1000)
          / Number(this.param.density)
          / this.lengthTotal
          / this.widthTotal);
      },

      //每卷价格
      pricePerRoll() {
        return Number(this.weightPerRoll) * Number(this.param.unitPrice);
      },

      //每卷重量
      weightPerRoll() {
        return this.param.weightPerRoll;
      },

      //单个产品成本
      costPerProduct() {
        return (Number(this.pricePerRoll) / Number(this.realOutputPerRoll));
      },

      //单个加工成本
      costProcessPerProduct() {
        return  (Number(this.param.costPerRoll) / Number(this.realOutputPerRoll));
      },

      //单个总成本
      totalCostPerProduct() {
        return (Number(this.costPerProduct) + Number(this.costProcessPerProduct));
      },

      //单个含税总成本
      totalCostPerProductTax() {
         return (Number(this.totalCostPerProduct) * (1 + Number(this.tax / 100)));
      },

      //总成本
      totalCost() {
        return (Number(this.totalCostPerProduct) * Number(this.param.count));
      },

      //总成本
      totalCostTax() {
        return (Number(this.totalCostPerProductTax) * Number(this.param.count));
      },

      //销售额
      salesValue() {
        return this.offerPrice !== '--'
                  ? (Number(this.offerPrice) * Number(this.param.count)).toFixed(2) : '--' ;
      },

      //利润率
      profitRate() {
        return this.salesValue !== '--'
                  ? ((Number(this.salesValue) - Number(this.totalCost())) * 100
                      / Number(this.totalCost())).toFixed(1) : '--' ;
      },

      //税率
      tax() {
        return  this.param.tax;
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
    margin-top: 0.8rem;
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
    width: 1.8rem;
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

  .label {
    margin-top: 1rem;
    text-align: left;
    width: 50%;
    color: #999999;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 40px 0px rgba(204, 204, 204, 0.3);
    border: #999 solid 0.3px;
  }

  .popUp {
    overflow: hidden;
    position: absolute;
    top: 0px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #e5e5e5;
    z-index: 99999;
    /*opacity: 70%;*/
  }

  .popUp b {
    text-align: center;
  }

  .popArea {
    /*opacity: 100%;*/
  }

  .popStatusBox {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
    color: #999;
    /*background-color: red;*/
  }

  .popStatusBox span {
    display: flex;
  }

  .popStatusBox b {

    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1;

    /*text-align: center;*/
    /*margin-bottom: 1rem;*/
  }

  .active b {
    color: red;
  }

  .popAlterBox {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
  }

  .popAlterBox input {
    text-align: center;
    flex: 1.2;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    /*padding-left: 0.7rem;*/
    background: rgba(0, 0, 0, 0);
    color: #222;
    letter-spacing: 0.04rem;
  }

  .popAlterBox span {
    display: flex;
  }

  .popAlterBox b {

    color: #222222;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1
  }
</style>
