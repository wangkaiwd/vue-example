<template>
  <demo-table
    class="demo-table"
    :table-data="copyData"
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
        copyData: JSON.parse(JSON.stringify(this.tableData)),
        editIds: [],
        newValue: ''
      };
    },
    computed: {
      editColumns () {
        return this.generateEditColumns();
      }
    },
    mounted () {
    },
    methods: {
      onInput ({ row, column, index }, newValue) {
        this.copyData[index][column.prop] = newValue;
        this.newValue = newValue;
      },
      onClick ({ row, column, index }) {
        const i = this.editIds.indexOf(`${column.prop}_${index}`);
        if (i === -1) {
          return this.editIds.push(`${column.prop}_${index}`);
        }
        if (!this.newValue && this.newValue !== 0) return this.$message.warning('内容不能为空');
        this.editIds.splice(i, 1);
        this.$emit('update:table-data', this.copyData);
        // 暴露编辑完成事件，将修改的信息传回
        this.$emit('edit-ok', { row, column, index, newValue: this.newValue });
      },
      generateEditColumns () {
        const editColumns = this.columns.map(col => {
          if ('editable' in col) {
            const { widget, ...rest } = col.editable;
            const render = (h, { row, column, index }) => {
              const isEditing = this.editIds.includes(`${column.prop}_${index}`);
              return (
                <div class="edit-col">
                  {
                    isEditing
                      ?
                      <col.editable.widget
                        value={row[column.prop]}
                        on-input={this.onInput.bind(this, { row, column, index })}
                        {...{ attrs: rest }}
                      >
                      </col.editable.widget>
                      :
                      <span>{row[column.prop]}</span>
                  }

                  <el-button
                    on-click={this.onClick.bind(this, { row, column, index })}
                    class="edit-button"
                  >
                    {isEditing ? '保存' : '编辑'}
                  </el-button>
                </div>
              );
            };
            return { ...col, render };
          }
          return col;
        });
        return editColumns;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .demo-table {
    /deep/ .edit-col {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
