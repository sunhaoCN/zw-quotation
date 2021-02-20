<template>
  <scroll class="scrollDiv">
    <div class="main flex-v">
      <div class="loginWrap">
        <div class="loginLogo">
          <img src="~assets/img/common/logo.png" alt="">
        </div>
        <div class="boxloginWrap">
          <div class="loginInput">
            <input type="text" v-model="loginForm.username" placeholder="用户名" class="username"/>
          </div>
          <div class="passwordInput">
            <input type="text" v-model="loginForm.password" placeholder="密码" class="password"/>
          </div>

          <div class="logbtn">
            <btn @click.native="loginClick" message="登录" col="sure"></btn>
          </div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Btn from "components/common/btn/Btn";
  import Scroll from "components/common/scroll/Scroll";
  import { mapMutations } from 'vuex';
  export default {
    name: "Login",
    components: {
      Btn,
      Scroll
    },
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
        console.log('....');
        let _this = this;
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空');
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
            alert('账号或密码错误');
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @errorColor: #ff210a;

  .scrollDiv {
    width: 100%;
    height: 100vh;
    background: #fff;
  }


  .loginWrap {
    width: 100%;
    height: auto;
    min-height: 100vh;
    background: #fff;
    padding: 0 0.6rem;

    .loginLogo {
      box-sizing: border-box;
      margin-bottom: 2rem;
      margin-top: 2rem;
      img {
        width: 120px;
        display: block;
        margin: 0 auto;
      }
    }

    .boxloginWrap {
      width: 90%;
      height: auto;
      margin: 0.87rem 0 0;
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      border-radius: 0.9rem;
      /*box-shadow: 2px 2px 2px rgba(100,100,100,0.1);*/

      .loginInput {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        margin-bottom: 1rem;

        .username {
          width: 88%;
          height: 35px;
          box-sizing: border-box;
          margin-bottom: 2rem;
          margin-top: 2rem;
          display: block;
          margin: 0 auto;
          border: 0;
          border-bottom: 1px solid;
          border-radius: 0.0rem;

        }
      }

      .passwordInput {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        margin-bottom: 1rem;

        .password {
          width: 88%;
          height: 35px;
          box-sizing: border-box;
          margin-bottom: 2rem;
          margin-top: 1rem;
          display: block;
          margin: 0 auto;
          border: 0;
          border-bottom: 1px solid;
          border-radius: 0.0rem;


        }
      }

      .logbtn {
        margin-bottom: 1rem;
        margin-top: 3rem;

      }

    }
  }
</style>
