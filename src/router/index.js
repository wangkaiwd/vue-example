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
  ]
});
