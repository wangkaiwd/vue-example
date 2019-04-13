/**
 * Created by wangkai on 2019-04-12
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: { users }
});

export default store;
