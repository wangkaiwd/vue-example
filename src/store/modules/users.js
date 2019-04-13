/**
 * Created by wangkai on 2019-04-13
 */
const users = {
  namespaced: true,
  state: {
    username: JSON.parse(localStorage.getItem('username')) || '张三',
    email: '123@test.com'
  },
  mutations: {
    switchName (state, newName) {
      state.username = newName;
    }
  },
  actions: {}
};
export default users;
