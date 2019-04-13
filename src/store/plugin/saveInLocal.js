/**
 * Created by wangkai on 2019-04-13
 */
// 对username进行持久化存储
const myPlugin = store => {
  // 当 store 初始化后调用
  // 这里可以使用replaceState将store中的内容全部替换为localStorage中的内容
  // 这里只是持续保存了username这个属性
  // 一个持续化vuex插件：vuex-persistedstate
  store.commit('users/switchName', JSON.parse(localStorage.getItem('username')));
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    // console.log('subscribe', mutation, state);
    localStorage.setItem('username', JSON.stringify(state.users.username));
    console.log('store更新');
  });
};
export default myPlugin;
