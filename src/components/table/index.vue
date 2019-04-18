<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <!--  v-bind:相当于将对象中的每个属性都分别绑定到组件上，相当于rect中的扩展运算符  -->
      <el-table-column
        v-for="item in columns"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="item.prop"
      >
        <template #default="{row,column,$index}">
          <table-expand
            v-if="item.render"
            :render="item.render"
            :column="item"
            :row="row"
            :index="$index"
          >
          </table-expand>
          <span v-else>
            {{row[item.prop]}}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import TableExpand from './expand';

  export default {
    name: 'DemoTable',
    components: { TableExpand },
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style scoped>

</style>
