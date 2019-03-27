<template>
  <div class="vue-directive">
    <directive-demo01></directive-demo01>
    <directive-demo02></directive-demo02>
  </div>
</template>

<script>
  import DirectiveDemo01 from './demo01';
  import DirectiveDemo02 from './demo02';

  export default {
    name: 'VueDirective',
    components: { DirectiveDemo01, DirectiveDemo02 }
  };
</script>

<style lang="scss" scoped>
  .vue-directive {

  }
</style>
