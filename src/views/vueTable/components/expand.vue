<script>
  export default {
    name: 'TableExpand',
    functional: true, // 函数式组件
    props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
        type: Object,
        default: () => ({})
      }
    },
    render (h, ctx) {
      const { row, index, column, render } = ctx.props;
      return render(h, { row, index, column });
    }
  };
</script>

<style lang="scss" scoped>

</style>
