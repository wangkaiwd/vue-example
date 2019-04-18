<template>
  <demo-table
    :table-data="tableData"
    :columns="editColumns"
  >
  </demo-table>
</template>
<script type="text/jsx">
  import DemoTable from './index';
  // 维护数据：
  //   1. 当前的copyData(@input：更新当前data)
  //   2. 原来的tableData(@blur: 更新原来的tableData)
  // 实现的功能：可以在 blur时更新   可以在input时更新  可以在点击保存后更新
  export default {
    name: 'EditTable',
    components: { DemoTable },
    props: {
      tableData: {},
      columns: {}
    },
    data () {
      return {
        editColumns: [],
        copyData: JSON.parse(JSON.stringify(this.tableData))
      };
    },
    mounted () {
      this.editColumns = this.columns.map(col => {
        if ('editable' in col) {
          const { widget, ...rest } = col.editable;
          const render = (h, { row, column, index }) => {
            return (
              <col.editable.widget
                value={row[column.prop]}
                on-input={this.onInput.bind(this, { row, column, index })}
                style={rest.style}
              >
              </col.editable.widget>
            );
          };
          return { ...col, render };
        }
        return col;
      });
    },
    methods: {
      onInput ({ row, column, index }, newValue) {
        this.copyData[index][column.prop] = newValue;
        this.$emit('update:table-data', this.copyData);
      }
    }
  };
</script>

<style scoped>

</style>
