<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <!--  v-bind:相当于将对象中的每个属性都分别绑定到组件上，相当于rect中的扩展运算符  -->
    <el-table-column
      v-for="item in columns"
      v-bind="item"
      :key="item.prop"
    >
    </el-table-column>
  </el-table>
</template>

<script>
  import data from 'mock';

  export default {
    name: 'index',
    data () {
      return {
        tableData: data.dataSource,
        columns: [
          {
            prop: 'name',
            label: '姓名',
            width: '180'
          },
          {
            prop: 'age',
            label: '年龄',
            width: '180'
          },
          {
            prop: 'email',
            label: '邮箱',
          }
        ]
      };
    },
  };
</script>

<style scoped>

</style>
