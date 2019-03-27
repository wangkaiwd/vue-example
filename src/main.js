import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from 'store';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';
import globalRegister from 'utils/globalRegister';

// 匹配出directives下的所有的.js文件,并自动注册为全局指令
const requireComponent = require.context(/* 其组件目录的相对路径*/ './directives',/* 是否查询其子目录*/ false, /\.js$/);
globalRegister(requireComponent, Vue.directive, Vue);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app');
