<!--<template>
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
</template>-->

<script type="text/jsx">
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
            width: '180',
            render: (obj) => {
              console.log(obj);
              return <span>render测试</span>;
            }
          },
          {
            prop: 'email',
            label: '邮箱',
          }
        ]
      };
    },
    render () {
      return (
        <el-table
          data={this.tableData}
          style="width: 100%"
        >
          {this.columns.map((item, i) => {
            return (
              <el-table-column
                prop={item.prop}
                label={item.label}
                width={item.width}
                key={item.prop}
              >
                {item.render ?
                  item.render({ column: item, row: this.tableData[i], index: i })
                  :
                  this.tableData[i][item.prop]
                }
              </el-table-column>
            );
          })}
        </el-table>
      );
    }
  };
</script>

<style scoped>

</style>
