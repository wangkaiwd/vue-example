<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      v-for="item in columns"
      :prop="item.prop"
      :label="item.label"
      :key="item.prop"
      :width="item.width"
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
