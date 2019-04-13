/**
 * Created by wangkai on 2019-04-13
 */
const users = {
  state: {
    username: '张三',
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
