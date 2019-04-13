<template>
  <el-row type="flex">
    <left-nav></left-nav>
    <el-col>
      <el-card class="content">
        <div slot="header">
          {{title}} - {{username}}
        </div>
        <router-view></router-view>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import LeftNav from 'layouts/leftNav';
  import { mapState } from 'vuex';

  export default {
    name: 'App',
    components: { LeftNav },
    data () {
      return {
        title: ''
      };
    },
    computed: {
      ...mapState({
        username: state => state.users.username
      })
    },
    updated () {
      this.title = this.$route.meta.title;
    }
  };
</script>
<style lang="scss" scoped>
  .content {
    height: 100vh;
  }
</style>
