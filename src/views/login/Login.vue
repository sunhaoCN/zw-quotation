<template>
  <div>
    <h2>我是登录页面</h2>
    <input type="text" v-model="loginForm.username" placeholder="用户名"/>
    <input type="text" v-model="loginForm.password" placeholder="密码"/>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: "Login",
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      ...mapMutations(['changeLogin']),
      loginClick() {
        let _this = this;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          // alert('账号或密码不能为空');
        } else {
          const users = this.$store.getters.getUsers;
          console.log(users);
          console.log(users.indexOf({username: this.loginForm.username, password: this.loginForm.password}));
          console.log({username: this.loginForm.username, password: this.loginForm.password})
          if(JSON.stringify(users).indexOf(JSON.stringify({username: this.loginForm.username, password: this.loginForm.password})) !== -1)
          {
            _this.userToken = 'user:' + this.loginForm.username;
            // 将用户信息保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$router.push('/quote');
            // alert('登陆成功');
          }
          else{
            // alert('账号或密码错误');
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
