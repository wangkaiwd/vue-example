<template>
  <div class="slot-demo01">
    <header>
      <!--2. 具名插槽：当我们需要用到多个插槽的时候，这时需要通过name属性来指定插槽的名字，来区分每一个插槽-->
      <slot name="header">
      </slot>
    </header>
    <main>
      <!--1. 后备内容：当没有提供插槽时在插槽位置默认渲染的内容-->
      <slot>后备内容</slot>
    </main>
    <footer>
      <!--3. 作用域插槽：可以让父组件中处于插槽内的元素访问到子组件中的数据-->
      <!--在react中可以将对应的插槽子组件作为函数传入，然后在子组件中执行时将子组件数据作为参数调用函数，父组件中的位于插槽中的函数
        就可以访问子组件中的数据，并返回相应的ui视图
      -->
      <!--可以将子组件中的数据作为slot标签的属性，让父组件中对应的插槽位置的模板接收
        绑定在<slot>元素上的特性被称为插槽prop
      -->
      <slot name="footer" :user="user"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'SlotDemo01',
    data () {
      return {
        user: 'wangkaiwd'
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
