<template>
  <div class="demo-01">
    <h2 class="count">{{count}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  });
  export default {
    name: 'VuexDemo01',
    computed: {
      count () {
        return store.state.count;
      }
    },
    methods: {
      increment () {
        store.commit('increment');
      },
      decrement () {
        store.commit('decrement');
      }
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
