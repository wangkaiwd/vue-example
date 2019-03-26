<template>
  <div class="directive-demo01">
    <!--自定义指令：实现当进入刚进入页面时，input获得焦点-->
    <input v-focus type="text" placeholder="请输入内容">
  </div>
</template>

<script>
  export default {
    name: 'DirectiveDemo01',
    // 注册局部指令
    directives: {
      focus: {
        // 钩子函数：
        inserted (el) {
          el.focus();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .directive-demo01 {

  }
</style>
