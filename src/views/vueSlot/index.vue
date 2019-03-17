<template>
  <div class="home">
    <!--vue 2.6.0中，为具名插槽和作用域插槽引入了一个新的统一的语法：v-slot指令，v-slot: 可以缩写为#
        v-slot:header     缩写： #header
    -->
    <slot-demo01>
      <!--<button>插槽内容</button>-->
      <!--在向具名插槽提供内容时，我们可以在一个template元素上使用v-slot指令，并以v-slot的参数的形式提供名称-->
      <template #header>
        <h1>here is page header</h1>
      </template>
      <!--任何没有被包裹在有v-slot的template中的内容都会被视为默认插槽的内容，但是为了代码更明确清晰，
      我们最好还是通过template v-slot:default来包裹默认插槽中的内容-->
      <template #default>
        <h2>here is default content</h2>
      </template>
      <template #footer="slotProps">
        <!--这里slotProps接收到的是子组件中对应插槽slot标签上绑定的所有属性组成的对象（不包括name)
          官方：将包含所有插槽prop的对象命名为slotProps
        -->
        <h1>{{slotProps}}</h1>
      </template>
    </slot-demo01>

    <slot-demo02 style="margin-top: 20px;">
      <!--我们可以把v-slot直接在元素上使用，而不用再使用template包裹。注意：这里的绑定v-slot的元素只能是自定义组件，不能是原生html标签
          经过测试，这种写法好像有问题
      -->
      <!--<template v-slot:default="defaultSlot">-->
      <!--<slot-test v-slot="slot">
        {{slot}}
      </slot-test>-->
      <!--</template>-->
    </slot-demo02>
  </div>
</template>

<script>
  import SlotDemo01 from './demo01';
  import SlotDemo02 from './demo02';
  import SlotTest from './test';

  export default {
    name: 'Home',
    components: { SlotDemo01, SlotDemo02, SlotTest },
    data () {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
