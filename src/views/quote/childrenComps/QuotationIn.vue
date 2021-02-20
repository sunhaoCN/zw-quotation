<!--<template>-->

<!--    <div class="outDiv">-->
<!--      <div class="ssreWrap flex-h">-->
<!--        <div class="top2 scrollerDiv">-->
<!--          <div class="chooseArea">-->
<!--            <ul class="radio">-->
<!--              <li @click="chooseRadio('1')">-->
<!--                &lt;!&ndash; <svg-icon icon-class="icon_sure" v-if="choRadio" /> &ndash;&gt;-->
<!--                <img class="imgIcon" src="~/static/search_icon_sure.png" v-if="choRadio" />-->
<!--                &lt;!&ndash; <svg-icon icon-class="icon_nor" v-else /> &ndash;&gt;-->
<!--                <img class="imgIcon" src="~/static/search_icon_nor.png" v-else />-->
<!--                <span class="text">理科</span>-->
<!--              </li>-->
<!--              <li @click="chooseRadio('2')">-->
<!--                <img class="imgIcon" src="~/static/search_icon_nor.png" v-if="choRadio" />-->
<!--                <img class="imgIcon" src="~/static/search_icon_sure.png" v-else />-->
<!--                <span class="text">文科</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <div class="selectList">-->
<!--              <div class="flex-h absBox">-->
<!--								<span class="flex-h flex1 pos" style="position: relative;">-->
<!--									<b>考生省份</b>-->
<!--									<popup-picker :title="pick" v-show="true" @on-change="changes" @on-hide="onHide" class="popiker" :data="cityList" :columns="1" v-model="value1" show-name></popup-picker>-->
<!--                  &lt;!&ndash; <svg-icon icon-class="collage_icon_arrow_right" /> &ndash;&gt;-->
<!--									<img class="imgIcon" src="~/static/collage_icon_arrow_right.png" />-->
<!--								</span>-->
<!--              </div>-->
<!--              <div class="flex-h absBox">-->
<!--								<span class="flex-h flex1 pos" style="position: relative;">-->
<!--									<b>考生性别</b>-->
<!--									<popup-picker :title="pick2" v-show="true" @on-change="changes2" @on-hide="onHide2" class="popiker" :data="sexList"-->
<!--                                :columns="1" v-model="value2" show-name></popup-picker>-->
<!--                  &lt;!&ndash; <svg-icon icon-class="collage_icon_arrow_right" /> &ndash;&gt;-->
<!--									<img class="imgIcon" src="~/static/collage_icon_arrow_right.png" />-->
<!--								</span>-->
<!--              </div>-->
<!--              <div class="flex-h absBox">-->
<!--								<span class="flex-h flex1 pos" style="position: relative;">-->
<!--									<b>目标批次</b>-->
<!--									<popup-picker :title="pick3" v-show="true" @on-change="changes3" @on-hide="onHide3" class="popiker" :data="batchList"-->
<!--                                :columns="1" v-model="value3" show-name></popup-picker>-->
<!--                  &lt;!&ndash; <svg-icon icon-class="collage_icon_arrow_right" /> &ndash;&gt;-->
<!--									<img class="imgIcon" src="~/static/collage_icon_arrow_right.png" />-->
<!--								</span>-->
<!--              </div>-->
<!--              <div class="flex-h absBox">-->
<!--								<span class="flex-h flex1">-->
<!--									<b>考生分数</b>-->
<!--									<input v-on:blur="blurAdjust" placeholder="请输入考生分数" v-model="studentScore" type="number" class="flex-1">-->
<!--								</span>-->
<!--              </div>-->
<!--              <div class="flex-h absBox">-->
<!--								<span class="flex-h flex1">-->
<!--									<b>考生位次</b>-->
<!--									<input v-on:blur="blurAdjust" placeholder="请输入考生位次" v-model="studentOrder" type="number" class="flex-1">-->
<!--								</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="top3">-->
<!--          <div class="btnGroup">-->
<!--            <button class="reset" @click="handleReset">重置</button>-->
<!--            <button class="submit" @click="handleComfirm">下一步</button>-->
<!--          </div>-->
<!--        </div>-->



<!--      </div>-->
<!--      <div>-->
<!--        <confirm v-model="show" title="温馨提示" @on-cancel="onCancel" @on-confirm="onConfirm">-->
<!--          <p style="text-align:center;">本步骤所填信息将无法更改，是否确认进入下一步？</p>-->
<!--        </confirm>-->
<!--      </div>-->
<!--    </div>-->

<!--</template>-->

<!--<script>-->

<!--  export default {-->
<!--    components: {-->

<!--    },-->
<!--    data() {-->
<!--      return {-->

<!--        pick: '',-->
<!--        cityList: [],-->
<!--        value1: [],-->
<!--        pick2: '请选择',-->
<!--        sexList: ['男', '女'],-->
<!--        value2: [],-->
<!--        pick3: '请选择',-->
<!--        batchList: [],-->
<!--        value3: [],-->
<!--        studentScore: '',-->
<!--        studentOrder: '',-->
<!--        btnDisabled: false,-->
<!--        choRadio: true,-->
<!--        show: false,-->
<!--        disv: '理科'-->
<!--      }-->
<!--    },-->
<!--    watch: {},-->
<!--    created() {-->
<!--      // 			let infos = {-->
<!--      // 				"tokens": 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhcHAxNzQ1NjgwIiwidXNlcklkIjoiMTc0NTY4MCIsImZyb20iOiJhcHAiLCJuYmYiOjE1NTUwMzM4MTN9.iCsGvrVYQmLJO6OFa5mhWbFjDIKZnH1gCFC1ixeI6uwL98eG1BidYrLUkYhTeUbal3d3ZVTOD06S_a8OQ4j2d_YZ7qtT86ZS-bJvmHkJRA-euKk7MSFqJADFQFfOtgFXwXxkChleSI5R75LSnvbM2fOxXSAr6CQF6AM7BOD9HMo',-->
<!--      // 				"userId": 1745682,-->
<!--      // 				"userArea": '湖北',-->
<!--      // 				"userVoId": 1118689722394280704-->
<!--      // 			}-->
<!--      //-->
<!--      // 			ls.set('zyDatas', infos)-->
<!--      // 			ls.set('tokens', infos.tokens)-->
<!--    },-->
<!--    mounted: function() {-->
<!--      this.$vux.loading.show({-->
<!--        text: '正在获取省份数据中'-->
<!--      })-->
<!--      this.getCascadeArea();-->
<!--      this.showAresas()-->
<!--      this.showKaosheng()-->
<!--    },-->
<!--    methods: {-->
<!--      //直接看跳转-->
<!--      showKaosheng() {-->
<!--        axios1.post('/volunteer/getExaminee').then(res => {-->
<!--          if (res.code == '0') {-->
<!--            if (res.data > 0) {-->
<!--              // this.$vux.toast.text('您的信息已保存过,无法修改，测试阶段您可以修改');-->
<!--              this.$vux.toast.text('您的信息已保存过,测试阶段您可以修改');-->
<!--              setTimeout(() => {-->
<!--                // this.goto('stepTwo')-->
<!--              }, 50)-->
<!--            }-->

<!--          }-->
<!--        }).catch((error) => {-->
<!--          _this.$vux.toast.text(error);-->
<!--        })-->
<!--      },-->
<!--      showAresas() {-->
<!--        var _this = this;-->
<!--        let ids = ls.get('userData').userVoId;-->

<!--        axios1.post('/academyService/user/getUserInfoById', {-->
<!--          "uid": ids-->
<!--        }, true).then(res => {-->
<!--          console.log('higsss', res)-->
<!--          let areas = res.data.area;-->
<!--          let areaArr = areas.split(",");-->
<!--          this.userArea = areaArr[0];-->
<!--          this.pick = this.userArea-->
<!--          this.getPiCi(this.pick)-->
<!--          ls.set('userArea', this.userArea)-->
<!--        }).catch((error) => {-->
<!--          _this.$vux.toast.text(error);-->
<!--        })-->
<!--      },-->
<!--      chooseRadio(type) {-->
<!--        type === '1' ? this.choRadio = true : this.choRadio = false;-->
<!--        type === '1' ? this.disv = '理科' : this.disv = '文科'-->
<!--      },-->
<!--      changes(e) {-->
<!--        this.value1 = e;-->
<!--      },-->
<!--      changes2(e) {-->
<!--        this.value2 = e;-->
<!--      },-->
<!--      changes3(e) {-->
<!--        this.value3 = e;-->
<!--      },-->
<!--      onHide(type) {-->
<!--        type == true ? this.pick = this.value1[0] : this.pick = this.pick;-->
<!--        console.log('this.pick', this.pick)-->
<!--        this.getPiCi(this.pick)-->
<!--        this.pick3 = '请选择'-->


<!--      },-->
<!--      onHide2(type) {-->
<!--        type == true ? this.pick2 = this.value2[0] : this.pick2 = this.pick2;-->
<!--      },-->
<!--      onHide3(type) {-->
<!--        type == true ? this.pick3 = this.value3[0] : this.pick3 = this.pick3;-->
<!--      },-->
<!--      getPiCi(pro) {-->
<!--        axios1.posts('/volunteer/getLevel?province=' + pro).then(res => {-->
<!--          if (res.code === '0') {-->
<!--            console.log('批次', res)-->
<!--            let ary = [];-->
<!--            res.data.forEach(item => {-->
<!--              ary.push(item)-->
<!--            })-->
<!--            this.batchList = ary-->
<!--          }-->
<!--        }).catch(() => {-->
<!--          this.$vux.toast.text('数据错误');-->
<!--        })-->
<!--      },-->
<!--      getCascadeArea() {-->

<!--        axios1.posts('/volunteer/getProvince').then(res => {-->
<!--          if (res.code === '0') {-->
<!--            let areaData = res.data;-->
<!--            let arrArea = [];-->
<!--            areaData.forEach((item, index) => {-->
<!--              arrArea.push(item)-->
<!--            })-->
<!--            this.cityList = arrArea-->
<!--            this.$vux.loading.hide()-->


<!--          }-->
<!--        }).catch(() => {-->
<!--          this.$vux.toast.text('数据错误');-->
<!--        })-->
<!--      },-->
<!--      subInfo() {-->
<!--        // 正式版判定-->
<!--        let prv;-->
<!--        if (this.value1[0] === undefined) {-->
<!--          prv = this.pick-->
<!--        } else {-->
<!--          prv = this.value1[0]-->
<!--        }-->
<!--        let sexs;-->
<!--        if (this.value2[0] === undefined) {-->
<!--          this.$vux.toast.text('请选择您的性别');-->
<!--          return false;-->
<!--        } else {-->
<!--          sexs = this.value2[0]-->
<!--        }-->
<!--        let lel;-->
<!--        if (this.value3[0] === undefined) {-->
<!--          this.$vux.toast.text('请选择您的目标批次');-->
<!--          return false;-->
<!--        } else {-->
<!--          lel = this.value3[0]-->
<!--        }-->

<!--        // 正式版-->
<!--        let obj = {-->
<!--          "division": this.disv,-->
<!--          "level": lel,-->
<!--          "precedence": this.studentOrder * 1,-->
<!--          "province": '陕西',-->
<!--          "score": this.studentScore * 1,-->
<!--          "sex": sexs,-->
<!--          // "userId": 1745682-->
<!--        }-->
<!--        // 5.3测试版写死-->
<!--        // 				let obj = {-->
<!--        // 					"division": '理科',-->
<!--        // 					"level": '本科一批',-->
<!--        // 					"precedence": 7840,-->
<!--        // 					"province": '陕西',-->
<!--        // 					"score": 602,-->
<!--        // 					"sex": '男',-->
<!--        // 				}-->
<!--        axios1.post('/volunteer/saveExaminee', obj, true).then(res => {-->
<!--          if (res.code === '0') {-->
<!--            // this.$vux.toast.text('考生信息保存成功');-->
<!--          }-->
<!--        }).catch(() => {-->
<!--          this.$vux.toast.text('数据错误');-->
<!--        })-->
<!--      },-->
<!--      handleReset() {-->
<!--        this.studentScore = '';-->
<!--        this.studentOrder = '';-->
<!--        this.pick = '请选择城市';-->
<!--        this.pick2 = this.pick3 = '请选择';-->
<!--        this.value1 = [];-->
<!--        this.value2 = [];-->
<!--        this.value3 = [];-->
<!--      },-->
<!--      handleComfirm() {-->
<!--        // 正式版判定-->
<!--        if (this.value2.length == 0) {-->
<!--          this.$vux.toast.text('请选择您的性别');-->
<!--        } else if (this.value3.length == 0) {-->
<!--          this.$vux.toast.text('请选择您的目标批次');-->
<!--        } else if (this.studentScore == '') {-->
<!--          this.$vux.toast.text('考生分数未输入，请输入后进行下一步');-->
<!--        } else if (this.studentOrder == '') {-->
<!--          this.$vux.toast.text('考生位次未输入，请输入后进行下一步');-->
<!--        } else {-->
<!--          this.show = true;-->
<!--        }-->
<!--        // 测试版解锁-->
<!--        // this.show = true;-->
<!--      },-->
<!--      onCancel() {-->
<!--        this.show = false;-->
<!--      },-->
<!--      onConfirm() {-->
<!--        // 提交数据接口调用-->
<!--        this.subInfo()-->
<!--        setTimeout(() => {-->
<!--          this.goto('stepTwo');-->
<!--        }, 50)-->

<!--      },-->
<!--      goto(routerName, queryData) {-->
<!--        this.$router.replace({-->
<!--          path: routerName,-->
<!--          query: {-->
<!--            type: queryData-->
<!--          }-->
<!--        });-->
<!--      },-->
<!--      blurAdjust(e) {-->
<!--        // 文本框失去焦点-->
<!--        this.isFocus = false;-->
<!--        setTimeout(() => {-->
<!--          if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {-->
<!--            return-->
<!--          }-->

<!--          let result = 'pc';-->
<!--          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS-->
<!--            result = 'ios'-->
<!--          } else if (/(Android)/i.test(navigator.userAgent)) { //判断Android-->
<!--            result = 'android'-->
<!--          }-->

<!--          if (result = 'ios') {-->
<!--            document.activeElement.scrollIntoViewIfNeeded(true);-->
<!--          }-->
<!--        }, 50)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--  .ssreWrap {-->
<!--    width: 7.5rem;-->
<!--    height: 100vh;-->
<!--    background: #fff;-->
<!--    flex-direction: column;-->
<!--    overflow: hidden;-->
<!--    align-items: initial;-->
<!--    justify-content: initial !important;-->
<!--  }-->

<!--  .outDiv {-->
<!--    width: 100%;-->
<!--    height: 100vh;-->
<!--    background: #fff;-->

<!--    .scrollerDiv {-->
<!--      padding: 0 0.3rem;-->
<!--      width: 100%;-->

<!--      .chooseArea {-->
<!--        margin-top: 0.41rem;-->
<!--        width: 100%;-->
<!--        height: 6.6rem;-->
<!--        box-shadow: 0px 0px 20px 0px rgba(204, 204, 204, 0.3);-->
<!--        border-radius: 0.1rem;-->

<!--        .radio {-->
<!--          display: flex;-->
<!--          justify-content: space-between;-->
<!--          align-items: center;-->
<!--          list-style: none;-->
<!--          padding: 0.61rem 1.59rem 0.4rem 1.58rem;-->

<!--          li {-->
<!--            display: flex;-->
<!--            align-items: center;-->

<!--            .text {-->
<!--              margin-left: 0.2rem;-->
<!--              font-size: 0.36rem;-->
<!--              color: #222;-->
<!--              font-weight: bold;-->
<!--            }-->
<!--          }-->
<!--        }-->

<!--        .selectList {-->
<!--          padding: 0 0.3rem;-->
<!--          flex: 1;-->
<!--          box-sizing: border-box;-->

<!--          .absBox {-->
<!--            width: 100%;-->
<!--            height: 0.9rem;-->
<!--            line-height: 0.9rem;-->

<!--            i {-->
<!--              font-size: 0.3rem;-->
<!--              color: #ef4a4d;-->
<!--              padding-right: 0.1rem;-->
<!--            }-->

<!--            .pos {-->
<!--              position: relative;-->
<!--            }-->

<!--            span {-->
<!--              display: flex;-->

<!--              img {-->
<!--                width: 0.4rem;-->
<!--                height: 0.4rem;-->
<!--              }-->

<!--              input,-->
<!--              .popiker {-->
<!--                text-align: right;-->
<!--                flex: 1;-->
<!--                height: 0.8rem;-->
<!--                line-height: 0.8rem;-->
<!--                font-size: 0.3rem;-->
<!--                font-weight: bold;-->
<!--                outline: none;-->
<!--                border: none;-->
<!--                width: 100%;-->
<!--                padding-left: 0.3rem;-->
<!--                background: rgba(0, 0, 0, 0);-->
<!--                color: #222;-->

<!--                .weui-cell {-->
<!--                  height: 0.9rem;-->
<!--                }-->
<!--              }-->

<!--              .popiker /deep/ .weui-cell {-->
<!--                padding-left: 0;-->
<!--                padding-top: 0;-->
<!--              }-->

<!--              .popiker /deep/ .vux-popup-picker-value,-->
<!--              input {-->
<!--                color: #222;-->
<!--              }-->

<!--              .popiker /deep/ .vux-popup-picker-select {-->
<!--                text-align: left !important;-->
<!--              }-->

<!--              .popiker /deep/ .weui-cell__ft::after {-->
<!--                display: none;-->
<!--              }-->

<!--              .vux-cell-box:not(:first-child):before {-->
<!--                border-top: none-->
<!--              }-->

<!--              b {-->
<!--                color: #222222;-->
<!--                font-size: 0.3rem;-->
<!--                font-weight: bold;-->
<!--                letter-spacing: 0.02rem;-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      //       .btnGroup {-->
<!--      //         margin-top: 2.32rem;-->
<!--      //         display: flex;-->
<!--      //         justify-content: space-between;-->
<!--      //         button {-->
<!--      //           width: 3.35rem;-->
<!--      //           height: 0.9rem;-->
<!--      //           border-radius: 0.1rem;-->
<!--      //           letter-spacing: 0.05rem;-->
<!--      //           font-size: 0.36rem;-->
<!--      //           font-weight: bold;-->
<!--      //         }-->
<!--      //         .reset {-->
<!--      //           border:1px solid #EEE;-->
<!--      //           background: #FFF;-->
<!--      //           color: #999;-->
<!--      //         }-->
<!--      //         .submit {-->
<!--      //           border: none;-->
<!--      //           background: #6CBF20;-->
<!--      //           color: #FFF;-->
<!--      //         }-->
<!--      //       }-->
<!--    }-->
<!--  }-->

<!--  .imgIcon {-->
<!--    width: 0.4rem;-->
<!--    height: 0.4rem;-->
<!--  }-->

<!--  .top3 {-->
<!--    width: 100%;-->
<!--    height: 1.2rem;-->
<!--    padding: 0 0.3rem;-->
<!--  }-->

<!--  .top2 {-->
<!--    flex: 1-->
<!--  }-->

<!--  .btnGroup {-->
<!--    // margin-top: 2.32rem;-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->

<!--    button {-->
<!--      width: 3.35rem;-->
<!--      height: 0.9rem;-->
<!--      border-radius: 0.1rem;-->
<!--      letter-spacing: 0.05rem;-->
<!--      font-size: 0.36rem;-->
<!--      font-weight: bold;-->
<!--    }-->

<!--    .reset {-->
<!--      border: 1px solid #EEE;-->
<!--      background: #FFF;-->
<!--      color: #999;-->
<!--    }-->

<!--    .submit {-->
<!--      border: none;-->
<!--      background: #6CBF20;-->
<!--      color: #FFF;-->
<!--    }-->
<!--  }-->
<!--</style>-->
