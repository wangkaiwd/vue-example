import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'slot'
    },
    {
      path: '/slot',
      name: 'slot',
      component: getComponent('vueSlot'),
      meta: { title: '插槽' }
    },
    {
      path: '/directive',
      name: 'directive',
      component: getComponent('vueDirective'),
      meta: { title: '自定义指令' }
    },
    {
      path: '/vuex',
      name: 'vueX',
      component: getComponent('vueX'),
      meta: { title: 'vueX' }
    },
    {
      path: '/layout',
      name: 'layout',
      component: getComponent('layout'),
      meta: { title: 'element ui 布局' }
    },
    {
      path: '/login',
      name: 'login',
      component: getComponent('login'),
      meta: { title: '登录' }
    },
  ]
});
