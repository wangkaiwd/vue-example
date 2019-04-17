<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  import data from 'mock';

  export default {
    name: 'index',
    data () {
      return {
        tableData: data
      };
    }
  };
</script>

<style scoped>

</style>
