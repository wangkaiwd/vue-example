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

const vm = new Vue({
  router,
  store,
  // render: createElement => createElement('div', [
  //   '先写一些文字',
  //   createElement('h2', '一则头条'),
  //   createElement(App, {
  //     props: {
  //       someProp: 'foobar'
  //     }
  //   })
  // ])
  render: h => h(App)
}).$mount('#app');
export default vm;
// render : (createElement) => {
//  return createElement()
// }
// createElement也是一个函数，执行后会返回“虚拟节点(Virtual Node)”,也常简写它为"Vnode" {String | Object | Function}

// createElement的参数：
// 1. 一个html标签字符串、组件选项对象，或者解析上述任何一种的一个async异步函数。必须参数
// 2. 一个包含模板相关属性的数据对象，你可以在template中使用这些特性。 可选参数
// 3. 子虚拟节点(VNodes),由createElement()构建而成，也可以使用字符串来生成"文本虚拟节点"。可选参数
