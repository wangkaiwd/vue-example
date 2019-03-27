<template>
  <div class="directive-demo01">
    <!--自定义指令：实现当进入刚进入页面时，input获得焦点-->
    <input v-focus:foo="123" v-blue type="text" placeholder="请输入内容">
  </div>
</template>

<script>
  export default {
    name: 'DirectiveDemo01',
    // 注册局部指令
    directives: {
      focus: {
        // 钩子函数(可选)：
        //  bind: 指令第一次绑定到元素上时调用，只调用一次，可以进行一次性的初始化操作
        //  inserted: 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入到文档中）
        //  update: 所有组件的VNode更新时调用，但是可能发生在其子VNode更新之前。指令的值可能发生了变化，也可能没有
        //  componentUpdated: 指令所在的VNode及其子VNode全部更新后调用
        //  unbind: 只调用一次，指令与元素解绑时调用
        /*
        * 参数：
        *   1. el: 指令所绑定的元素，可以用来直接操作DOM
        *   2. binding: 包含指令信息的对象
        *   3. vnode: Vue编译生成的虚拟节点
        * */
        inserted (el, binding, vnode) {
          // console.log('el', el)
          // console.log('binding', binding)
          // // {
          // //   arg: "foo"
          // //   def: {inserted: ƒ}
          // //   expression: "123"
          // //   modifiers: {}
          // //   name: "focus"
          // //   rawName: "v-focus:foo"
          // //   value: 123
          // // }
          // console.log('vnode', vnode)
          el.focus();
          el.value = `指令名:${binding.name}`;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .directive-demo01 {

  }
</style>
