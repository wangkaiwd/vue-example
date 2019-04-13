/**
 * Created by wangkai on 2019-04-12
 */
import Vue from 'vue';
import Vuex from 'vuex';
import saveInLocal from './plugin/saveInLocal';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters, // 全局的computed，可以在很多地方使用，减少代码重复
  actions,
  mutations,
  modules: { users },
  plugins: [saveInLocal] // 类似于redux的中间件
});

export default store;
