<template>
  <div>
    <edit-table
      :table-data.sync="tableData"
      :columns="columns"
    >
    </edit-table>
  </div>
</template>

<script type="text/jsx">
  import data from 'mock';
  import EditTable from 'components/table/editTable';

  export default {
    name: 'TableExample',
    components: { EditTable },
    data () {
      return {
        tableData: data.dataSource,
        columns: [
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            editable: {
              widget: 'el-input',
              placeholder: '请输入姓名',
              style: { width: '80px' }
            }
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

<style lang="scss" scoped>

</style>
