<template>
  <el-container class="layout">
    <el-aside :width="`${sideWidth}px`" class="layout-aside">Aside</el-aside>
    <el-container>
      <el-header class="layout-header">
        <i @click="onIconClick" :class="{collapsed}" class="el-icon-tickets layout-icon"></i>
        Header
      </el-header>
      <el-main>Main</el-main>
      <el-footer class="layout-footer">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'LayoutDemo',
    mounted () {
      // this.calcSideSize();
      // window.addEventListener('resize', this.calcSideSize);
    },
    data () {
      return {
        collapsed: false,
        timerId: null
      };
    },
    computed: {
      sideWidth () {
        return this.collapsed ? 40 : 200;
      }
    },
    methods: {
      // calcSideSize () {
      //   const width = document.documentElement.offsetWidth;
      //   if (this.timerId) {
      //     clearTimeout(this.timerId);
      //     this.timerId = null;
      //   }
      //   this.timerId = setTimeout(() => {
      //     if (width < 768) {
      //       this.sideWidth = 40;
      //       this.collapsed = true;
      //     } else {
      //       this.sideWidth = 200;
      //       this.collapsed = false;
      //     }
      //   }, 100);
      // },
      onIconClick () {
        this.collapsed = !this.collapsed;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .layout {
    border: 1px solid red;
    height: 600px;
    &-aside {
      border: 1px solid green;
      transition: all .4s;
    }
    &-header {
      display: flex;
      align-items: center;
      background-color: pink;
    }
    &-icon {
      font-size: 20px;
      color: blue;
      cursor: pointer;
      transition: all .4s;
      &.collapsed {
        transform: rotate(90deg);
      }
    }
    &-footer {
      background-color: skyblue;
    }
  }
</style>
