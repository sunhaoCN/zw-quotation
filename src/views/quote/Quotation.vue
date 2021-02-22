<template>
  <div class="main">
    <quotation-nav-bar/>
    <scroll class="content">
      <div class="ssreWrap flex-h">
        <div class="top2 scrollerDiv">
          <div class="chooseArea">
            <div class="selectList">
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos" style="position: relative;">
                  <b>产品类型</b>

                </span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>长度</b>
									<input @blur="blurAdjust" placeholder="请输入长度（cm）"  type="number" class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>宽度</b>
									<input @blur="blurAdjust" placeholder="请输入宽度（cm）"  type="number" class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>高度</b>
									<input @blur="blurAdjust" placeholder="请输入高度（cm）"  type="number" class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>厚度</b>
									<input @blur="blurAdjust" placeholder="请输入高度（mm）"  type="number" class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos" style="position: relative;">
                  <b>产品材质</b>

                </span>
              </div>
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos" style="position: relative;">
                  <b>产品颜色</b>

                </span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>产品数量</b>
									<input @blur="blurAdjust" placeholder="请输入产品数量"  type="number" class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>产品标签</b>
									<input @blur="blurAdjust" placeholder="请输入报价标签"  type="number" class="flex-1">
								</span>
              </div>
            </div>
          </div>
          <div class="btnGroup">
            <button class="reset">重置</button>
            <button class="submit" @click="quote">开始报价</button>
          </div>
          <ul>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
          </ul>
        </div>

      </div>
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
      Scroll,

    },
    data() {
      return {
        productTypeList: ['a','b','c'],
        defaultValue: '请选择产品类型'
      }
    },
    methods: {
      quote() {
        this.$router.push('/quote/result')
      },

      blurAdjust() {
        setTimeout(function() {
          var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
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

  .ssreWrap {
    width: 100%;
    height: 100vh;
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
    height:100vh;
  }

  .chooseArea {
    margin-top: 1.1rem;
    width: 100%;
    height: 30rem;
    box-shadow: 0px 0px 20px 0px rgba(204, 204, 204, 0.3);
    border-radius: 0.4rem;

  }

  .selectList {
    padding: 0 0.7rem;
    flex: 1;
    box-sizing: border-box;
  }

  .absBox {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0rem 1rem;
    box-sizing: border-box;
  }

  .absBox span {
    display: flex;
  }

  .absBox input {
    text-align: right;
    flex: 1;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    width: 100%;
    padding-left: 0.7rem;
    background: rgba(0, 0, 0, 0);
    color: #222;
    letter-spacing: 0.04rem;
  }

  .absBox b {
    color: #222222;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
  }

  .pos {
    position: relative;
  }


  .btnGroup {
    display: flex;
    /*height: 2rem;*/
    padding: 1rem 0.3rem;
  }
  .btnGroup button {
    width: 100%;
    height: 3rem;
    border-radius: 0.1rem;
    letter-spacing: 0.05rem;
    font-size: 1.2rem;
    font-weight: bold;
    box-sizing: border-box;
  }

  .reset {
    border: 1px solid #EEE;
    background: #FFF;
    color: #999;
    /*width: 50%;*/
  }

  .submit {
    border: none;
    background: #6CBF20;
    color: #FFF;
    /*width: 50%;*/
  }

</style>
