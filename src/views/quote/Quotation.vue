<template>
  <div class="main">
    <quotation-nav-bar/>
    <scroll class="content">
      <div class="ssreWrap flex-h">
        <div class="top2 scrollerDiv">
          <div class="chooseArea">
            <div class="selectList">
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos">
                  <b class="selectB">产品类型</b>
                  <v-select :options="productTypeList"
                            placeholder="请选择类型"
                            label="type" class="vSelect"
                            v-model="quotationInfo.productType"
                            :appendToBody="true"
                            :clearable="false"
                            @search:blur="blurAdjust">
                  </v-select>
                </span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>长度(cm)</b>
									<input @blur="blurAdjust"
                         placeholder="请输入长度"
                         type="number"
                         class="flex-1"
                         v-model="quotationInfo.length">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>宽度(cm)</b>
									<input @blur="blurAdjust"
                         placeholder="请输入宽度"
                         type="number"
                         class="flex-1"
                         v-model="quotationInfo.width">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>高度(cm)</b>
									<input @blur="blurAdjust"
                         placeholder="请输入高度"
                         type="number"
                         v-model="quotationInfo.height"
                         class="flex-1">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>厚度(mm)</b>
									<input @blur="blurAdjust"
                         placeholder="请输入厚度"
                         type="number"
                         class="flex-1"
                         v-model="quotationInfo.thickness">
								</span>
              </div>
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos" style="position: relative;">
                  <b>产品材质</b>
                  <v-select :options="materialTypeList"
                             placeholder="请选择材质"
                             label="type" class="vSelect"
                             :appendToBody="true"
                             @search:blur="blurAdjust"
                             v-model="quotationInfo.material"
                             :clearable="false"
                             :selectable="option => (this.quotationInfo.color.type == '植绒' ? !(option.type.includes('PET')
                                || option.type.includes('PP')) : true)">
                  </v-select>
                </span>
              </div>
              <div class="flex-h absBox">
                <span class="flex-h flex1 pos" style="position: relative;">
                  <b>产品颜色</b>
                  <v-select :options="colorTypeList"
                            placeholder="请选择颜色"
                            label="type" class="vSelect"
                            :appendToBody="true"
                            @search:blur="blurAdjust"
                            v-model="quotationInfo.color"
                            :clearable="false"
                            :selectable="option => (this.quotationInfo.material.type == 'PET'
                            || this.quotationInfo.material.type == 'PP'? !option.type.includes('植绒')
                            : true)">
                  </v-select>
                </span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>产品数量</b>
									<input @blur="blurAdjust"
                         placeholder="请输入产品数量"
                         type="number"
                         class="flex-1"
                         v-model="quotationInfo.count">
								</span>
              </div>
              <div class="flex-h absBox">
								<span class="flex-h flex1">
									<b>产品标签</b>
									<input @blur="blurAdjust"
                         placeholder="请输入报价标签"
                         type="text"
                         class="flex-1"
                         v-model="quotationInfo.label">
								</span>
              </div>
            </div>
          </div>
          <div class="btnGroup">
            <button class="reset" @click="init">重置</button>
            <button class="submit" @click="quote">开始报价</button>
          </div>
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
  import { mapMutations } from 'vuex';
  import vSelect from "vue-select"

  export default {
    name: "Quotation",
    components: {
      MainTabBar,
      QuotationNavBar,
      Scroll,

      vSelect
    },
    data() {
      return {
        productTypeList: [{type: '有边'}, {type: '无边'}],
        materialTypeList:[{type: 'PS'}, {type: 'PVC'}, {type: 'PET'}, {type: 'PP'}],
        colorTypeList:[{type: '透明A'}, {type: '透明B'}, {type: '黑色A'}, {type: '黑色B'},
                      {type: '白色A'}, {type: '白色B'},  {type: '其他'},  {type: '植绒'}],

        quotationInfo: {
          productType: '',
          length: null,
          width: null,
          height: null,
          thickness: null,
          material: '',
          color: '',
          count: null,
          label: '',

          unitPrice: null,
          density: null,

        },
      }
    },
    computed: {

    },
    methods: {
      ...mapMutations(['getCostPerRoll']),
      quote() {
        if(this.infoExamine())
        {
          const param = this.$store.state.BaseParams.filter( s => s.material == this.quotationInfo.material.type
                                              && s.color == this.quotationInfo.color.type)
          if(param.length != 0) {
            this.quotationInfo.unitPrice = param[0].price;
            this.quotationInfo.density = param[0].density;
            this.getCostPerRoll({material: this.quotationInfo.material.type, color: this.quotationInfo.color.type})
            this.$router.push({
              path: '/quote/result',
              query: {
                productType: this.quotationInfo.productType.type,
                length: this.quotationInfo.length,
                width: this.quotationInfo.width,
                height: this.quotationInfo.height,
                thickness: this.quotationInfo.thickness,
                material: this.quotationInfo.material.type,
                color: this.quotationInfo.color.type,
                count: this.quotationInfo.count,
                label: this.quotationInfo.label,
                unitPrice: this.quotationInfo.unitPrice,
                density: this.quotationInfo.density,
                heightSpace: this.$store.state.ProcessParams.heightSpace,
                lengthMax: this.$store.state.ProcessParams.lengthMax,
                widthMax: this.$store.state.ProcessParams.widthMax,
                widthBetterMax: this.$store.state.ProcessParams.widthBetterMax,
                costPerRoll: this.$store.state.ProcessParams.costPerRoll,
                pricePerRoll: this.$store.state.ProcessParams.pricePerRoll,
                weightPerRoll: this.$store.state.ProcessParams.weightPerRoll,
                minHeightSpace: this.$store.state.ProcessParams.minHeightSpace,
                noSideHeightSpace: this.$store.state.ProcessParams.noSideHeightSpace,
                widthPunchSpace: this.$store.state.ProcessParams.widthPunchSpace,
              }
            })
          }
        }
      },

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

      init() {
        this.quotationInfo.productType = '';
        this.quotationInfo.label = '';
        this.quotationInfo.count = null;
        this.quotationInfo.color = '';
        this.quotationInfo.material = '';
        this.quotationInfo.thickness = null;
        this.quotationInfo.height = null;
        this.quotationInfo.length = null;
        this.quotationInfo.width = null;
      },

      infoExamine() {
        if(this.quotationInfo.productType == '' || this.quotationInfo.productType == null) {
          alert('产品类型不能为空！');
          return false;
        }

        if(this.quotationInfo.length == '' || this.quotationInfo.length == null) {
          alert('长度不能为空！');
          return false;
        }

        if(this.quotationInfo.width == '' || this.quotationInfo.width == null) {
          alert('宽度不能为空！');
          return false;
        }

        if(this.quotationInfo.height == '' || this.quotationInfo.height == null) {
          alert('高度不能为空！');
          return false;
        }

        if(this.quotationInfo.thickness == '' || this.quotationInfo.thickness == null) {
          alert('厚度不能为空！');
          return false;
        }

        if(this.quotationInfo.material == '' || this.quotationInfo.material == null) {
          alert('材质不能为空！');
          return false;
        }

        if(this.quotationInfo.color == '' || this.quotationInfo.color == null) {
          alert('颜色不能为空！');
          return false;
        }


        if(this.quotationInfo.count == '' || this.quotationInfo.count == null) {
          alert('数量不能为空！');
          return false;
        }

        if(this.quotationInfo.label == '' || this.quotationInfo.label == null) {
          this.quotationInfo.label = this.getCurrentDate(2);
          // console.log(this.quotationInfo.label);
        }
        return true
      },

      getCurrentDate(format) {
        let now = new Date();
        let year = now.getFullYear(); //得到年份
        let month = now.getMonth();//得到月份
        let date = now.getDate()
        let day = now.getDay();//得到周几
        let hour = now.getHours();//得到小时
        let minu = now.getMinutes();//得到分钟
        let sec = now.getSeconds();//得到秒
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        let time = "";
        //精确到天
        if(format==1){
          time = year + "-" + month + "-" + date;
        }
        //精确到分
        else if(format==2){
          time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;
        }
        return time;
      }
    },

  }
</script>

<style scoped>
  @import "~vue-select/dist/vue-select.css";

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

  .chooseArea {
    margin-top: 1.1rem;
    width: 100%;
    /*height: 30rem;*/
    box-shadow: 0px 0px 20px 0px rgba(204, 204, 204, 0.3);
    border-radius: 0.4rem;

  }

  .selectList {
    padding: 1.2rem 0.7rem;
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
    flex: 1.2;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    width: 100%;
    /*padding-left: 0.7rem;*/
    background: rgba(0, 0, 0, 0);
    color: #222;
    letter-spacing: 0.04rem;
  }

  .absBox b {
    color: #222222;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    flex: 1
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

  .vSelect {
    flex: 1;
    /*margin-right: 0.5rem;*/
  }

  .selectB {
    flex: 1;
    /*margin-right: 1.9rem;*/
  }

</style>
