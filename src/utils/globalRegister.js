/**
 * 自动化全局注册
 * @param requireComponent 指定目录下执行require.context()后返回的上下文
 * @param execute 执行注册的方法：Vue.component: 注册全局组件 Vue.directive: 注册全局指令
 */
const globalRegister = (requireComponent, execute, context) => {
  requireComponent.keys().map(fileName => {
    const componentConfig = requireComponent(fileName);
    const part1 = fileName.indexOf('/');
    const part2 = fileName.lastIndexOf('.');
    // 截取文件名
    const componentName = fileName.slice(part1 + 1, part2);
    // 如果组件是选项是通过`export default`导出的，优先使用`.default`
    // 否则会退到使用模块的根

    // 这种将 Vue.directive用一个变量来接收回改变this指向
    // 例：
    // const object = {
    //   fn: function () {
    //     console.log(this);
    //   }
    // };
    // object.fn() // {fn: function() {}}
    // const fn = object.fn()
    // fn() // window
    execute.call(context, componentName, componentConfig.default || componentConfig);
  });
};
export default globalRegister;
