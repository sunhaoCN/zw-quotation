import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    Users: [{username: 'admin', password: 'admin'}, {username: 'haobb', password: 'haobb'}],

    //材质基础参数
    BaseParams: [
      {material: 'PS', color: '透明A', price: 16.5, density: 0.11},
      {material: 'PS', color: '透明B', price: 12.5, density: 0.115},
      {material: 'PS', color: '黑色A', price: 16.5, density: 0.112},
      {material: 'PS', color: '白色A', price: 16.8, density: 0.112},
      {material: 'PS', color: '黑色B', price: 16.5, density: 0.112},
      {material: 'PS', color: '白色B', price: 16.8, density: 0.112},
      {material: 'PS', color: '其他', price: 16.5, density: 0.112},
      {material: 'PS', color: '植绒', price: 15.8, density: 0.12},
      {material: 'PVC', color: '透明A', price: 12.8, density: 0.138},
      {material: 'PVC', color: '透明B', price: 11.9, density: 0.14},
      {material: 'PVC', color: '黑色A', price: 13.8, density: 0.139},
      {material: 'PVC', color: '白色A', price: 14.1, density: 0.139},
      {material: 'PVC', color: '黑色B', price: 13.8, density: 0.139},
      {material: 'PVC', color: '白色B', price: 14.1, density: 0.139},
      {material: 'PVC', color: '其他', price: 13.8, density: 0.139},
      {material: 'PVC', color: '植绒', price: 13, density: 0.15},
      {material: 'PET', color: '透明A', price: 8.8, density: 0.139},
      {material: 'PET', color: '透明B', price: 7.1, density: 0.14},
      {material: 'PET', color: '黑色A', price: 8.4, density: 0.139},
      {material: 'PET', color: '白色A', price: 9.3, density: 0.139},
      {material: 'PET', color: '黑色B', price: 8.4, density: 0.139},
      {material: 'PET', color: '白色B', price: 9.3, density: 0.139},
      {material: 'PET', color: '其他', price: 9.3, density: 0.139},
      {material: 'PP', color: '透明A', price: 11.5, density: 0.1},
      {material: 'PP', color: '透明B', price: 11, density: 0.1},
      {material: 'PP', color: '黑色A', price: 12, density: 0.1},
      {material: 'PP', color: '白色A', price: 13, density: 0.1},
      {material: 'PP', color: '黑色B', price: 12, density: 0.1},
      {material: 'PP', color: '白色B', price: 13, density: 0.1},
      {material: 'PP', color: '其他', price: 13, density: 0.1},
    ],
    //加工过程参数
    ProcessParams: {
      //长-高度留边比例
      lengthHeightSpace: 1,
      //宽-高度留边比例
      widthHeightSpace: 0.8,
      //长度排模最大值
      lengthMax: 120,
      //宽度排模最大值
      widthMax: 70,
      //宽度排模最大值（更好的设备）
      widthBetterMax: 75,
      //每卷材料重量kg
      weightPerRoll: 50,
      //最小高度留边
      minHeightSpace: 1,
      //无边高度留边
      noSideHeightSpace: 1,
      //宽度排模冲床位
      widthPunchSpace: 4,
      //宽度排模冲床位
      lengthPunchSpace: 4,
    },

    //价格成本参数
    CostParams: {
      //每卷加工成本，默认100
      costPerRoll: 100,

      //默认税率
      tax: 8,
    }
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },

    //计算每卷加工成本
    getCostPerRoll(state, params) {
      if(params.material == 'PS' && params.color == '植绒') {
        state.CostParams.costPerRoll = 150
      }
      else if(params.color == '黑色A' || params.color == '黑色B') {
        state.CostParams.costPerRoll = 120
      }
      else if(params.color == '其他') {
        state.CostParams.costPerRoll = 150
      }
      else {
        state.CostParams.costPerRoll = 100
      }
    },

    //计算长度冲床位
    getLengthPunchSpace(state, params) {
      if(params.height < 1) {
        state.ProcessParams.lengthPunchSpace = 4
      }
      else if(params.height < 4.5) {
        state.ProcessParams.lengthPunchSpace = 5
      }
      else if(params.height < 6) {
        state.ProcessParams.lengthPunchSpace = 6
      }
      else if(params.height < 8){
        state.ProcessParams.lengthPunchSpace = 8
      }
      else {
        state.ProcessParams.lengthPunchSpace = params.height
      }
    }
  },

  getters: {
    getUsers(state) {
      return state.Users
    },

  },
  actions: {

  }
});

export default store;
