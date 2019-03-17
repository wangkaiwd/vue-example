<template>
  <div class="slot-demo02">
    <!--独占默认插槽的缩写语法：
      独占默认插槽：被提供的插槽只有默认插槽
      当被提供的内容只有默认插槽时，组件的标签才可以被当做插槽的模板来使用
    -->
    <slot user="wangkaiwd">
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'SlotDemo02'
  };
</script>

<style lang="scss" scoped>

</style>
