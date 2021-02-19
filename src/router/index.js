import Vue from 'vue'
import Router from 'vue-router'

const Quotation = () => import('views/quote/Quotation');
const QuotationResult = () => import('views/quote/QuotationResult');
const Profile = () => import('views/profile/Profile');
const Login = () => import('views/login/Login');


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/quote'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/quote',
    component: Quotation
  },
  {
    path: '/quote/result',
    component: QuotationResult
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'

})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === null || token === '') {

      next('/login');
    } else {
      next();
    }
  }
});

export default router
