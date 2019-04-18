<script>
  export default {
    name: 'TableExpand',
    functional: true, // 函数式组件
    props: {
      row: Object,
      render: Function,
      index: Number,
      columns: {
        type: Object,
        default: () => ({})
      }
    },
    render (h, ctx) {
      const { row, index, columns, render } = ctx.props;

    }
  };
</script>

<style lang="scss" scoped>

</style>
