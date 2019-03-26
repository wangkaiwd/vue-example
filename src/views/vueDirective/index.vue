<template>
  <div class="vue-directive">
    <directive-demo01></directive-demo01>
  </div>
</template>

<script>
  import DirectiveDemo01 from './demo01';

  export default {
    name: 'VueDirective',
    components: { DirectiveDemo01 }
  };
</script>

<style lang="scss" scoped>
  .vue-directive {

  }
</style>
