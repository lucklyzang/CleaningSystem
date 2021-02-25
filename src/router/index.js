import Vue from 'vue'
import Router from 'vue-router'
import {setStore, getStore} from '@/common/js/utils.js'
import store from '@/store'
const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const MyInfo = () => import('@/pages/MyInfo')
const DepartmentService = () => import('@/pages/taskPage/DepartmentService')
const DepartmentWorkOrderDeatils = () => import('@/pages/taskDetailsPage/DepartmentWorkOrderDeatils')
const DepartmentServiceSignature = () => import('@/pages/taskMessagePage/departmentService/DepartmentServiceSignature')
const DepartmentServiceBill = () => import('@/pages/taskMessagePage/departmentService/DepartmentServiceBill')
const DepartmentServiceIssueReport = () => import('@/pages/taskMessagePage/departmentService/DepartmentServiceIssueReport')
Vue.use(Router)

let baseRoute  = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: MyInfo
  },
  {
    path: '/departmentService',
    name: 'departmentService',
    component: DepartmentService
  },
  {
    path: '/departmentWorkOrderDeatils',
    name: 'departmentWorkOrderDeatils',
    component:  DepartmentWorkOrderDeatils
  },
  {
    path: '/departmentServiceSignature',
    name: 'departmentServiceSignature',
    component:  DepartmentServiceSignature
  },
  {
    path: '/departmentServiceBill',
    name: 'departmentServiceBill',
    component:  DepartmentServiceBill
  },
  {
    path: '/departmentServiceIssueReport',
    name: 'departmentServiceIssueReport',
    component:  DepartmentServiceIssueReport
  }
];
let router = new Router({
  routes: baseRoute,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  let login = getStore('isLogin');
  let name = to.name;
  if (name === 'login') {
    if (login) {
      next({path: '/home'})
    } else {
      next()
    }
  } else {
    if (login) {
      next()
    } else {
      next({path: '/'})
    }
  }
});
export default router

