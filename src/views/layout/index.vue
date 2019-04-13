<template>
  <el-container class="layout">
    <el-aside width="200px" class="layout-aside">Aside</el-aside>
    <el-container>
      <el-header class="layout-header"><i class="el-icon-tickets layout-icon"></i>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'LayoutDemo',
    mounted () {
      window.addEventListener('resize', this.calcSideSize);
    },
    methods: {
      calcSideSize () {

      }
    }
  };
</script>

<style lang="scss" scoped>
  .layout {
    border: 1px solid red;
    &-aside {
      border: 1px solid green;
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-icon {
      font-size: 20px;
      color: blue;
    }
  }
</style>
