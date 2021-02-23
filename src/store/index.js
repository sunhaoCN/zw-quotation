import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    Users: [{username: 'admin', password: 'admin'}, {username: 'haobb', password: 'haobb'}],
    BaseParams: [
      {material: 'PS', color: '透明A', price: 15, density: 0.11},
      {material: 'PS', color: '透明B', price: 13, density: 0.115},
      {material: 'PS', color: '黑色A', price: 16.5, density: 0.112},
      {material: 'PS', color: '白色A', price: 16.8, density: 0.112},
      {material: 'PS', color: '黑色B', price: 16.5, density: 0.112},
      {material: 'PS', color: '白色B', price: 16.8, density: 0.112},
      {material: 'PS', color: '其他', price: 14.5, density: 0.112},
      {material: 'PS', color: '植绒', price: 15, density: 0.12},
      {material: 'PVC', color: '透明A', price: 11.8, density: 0.138},
      {material: 'PVC', color: '透明B', price: 10, density: 0.14},
      {material: 'PVC', color: '黑色A', price: 13, density: 0.139},
      {material: 'PVC', color: '白色A', price: 13, density: 0.139},
      {material: 'PVC', color: '黑色B', price: 13, density: 0.139},
      {material: 'PVC', color: '白色B', price: 13, density: 0.139},
      {material: 'PVC', color: '其他', price: 15.5, density: 0.139},
      {material: 'PVC', color: '植绒', price: 14.5, density: 0.15},
      {material: 'PET', color: '透明A', price: 7.93, density: 0.139},
      {material: 'PET', color: '透明B', price: 7, density: 0.14},
      {material: 'PET', color: '黑色A', price: 8.4, density: 0.139},
      {material: 'PET', color: '白色A', price: 8.43, density: 0.139},
      {material: 'PET', color: '黑色B', price: 8.4, density: 0.139},
      {material: 'PET', color: '白色B', price: 8.43, density: 0.139},
      {material: 'PET', color: '其他', price: 8.43, density: 0.139},
      {material: 'PP', color: '透明A', price: 11.5, density: 0.1},
      {material: 'PP', color: '透明B', price: 11, density: 0.1},
      {material: 'PP', color: '黑色A', price: 12, density: 0.1},
      {material: 'PP', color: '白色A', price: 13, density: 0.1},
      {material: 'PP', color: '黑色B', price: 12, density: 0.1},
      {material: 'PP', color: '白色B', price: 13, density: 0.1},
      {material: 'PP', color: '其他', price: 13, density: 0.1},
    ],

  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  },

  getters: {
    getUsers(state) {
      return state.Users
    }
  }
});

export default store;
