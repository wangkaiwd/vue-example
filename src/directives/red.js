// 如果直接传入一个函数，会在bind和update时触发相同的行为，而不关心其它的钩子
// Vue.directive('red', (el) => {
//   console.log(el);
//   el.style.backgroundColor = 'red';
// });

const red = {
  inserted (el) {
    console.log('dom', el);
    el.style.backgroundColor = 'red';
  }
};
export default red;
