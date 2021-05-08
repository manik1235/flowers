<template>
  <div class="hexagon-row">
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
    <hexagon>
      <span slot="top"></span>
      <span slot="middle">ROW</span>
      <span slot="bottom"></span>
    </hexagon>
  </div>
</template>

<script>
  import Hexagon from '../hexagon'
  export default {
    name: 'HexagonRow',
    components: { Hexagon },
    data () {
      return {
      }
    },

    props: {
      color: {
        default: 'grey',
        type: String
      }
    },

    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="sass">
  .hexagon-row
    display: flex
    margin-bottom: -2.6vmin


  .hexagon:first-child
    margin-left: 0.0vmin


</style>
