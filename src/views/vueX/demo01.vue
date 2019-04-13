<template>
  <div class="demo-01">
    <input v-model="username">
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'VuexDemo01',
    computed: {
      username: {
        get () {
          return this.$store.state.users.username;
        },
        set (newVal) {
          this.switchName(newVal);
        }
      }
    },
    mounted () {
    },
    methods: {
      ...mapMutations(['switchName']),
    }
  };
</script>

<style lang="scss" scoped>
  .demo-01 {
    .count {
      font-size: 22px;
      font-weight: bold;
    }
  }
</style>
