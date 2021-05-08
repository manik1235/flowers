<template lang="html">
  <div class="hexagon-grid">
    <hexagon-row></hexagon-row>
    <hexagon-row></hexagon-row>
    <hexagon-row></hexagon-row>
  </div>
</template>

<script>
/**
 * Component documentation
 */

import Hexagon from '../hexagon'
import HexagonRow from '../hexagon-row'

export default {
  name: 'HexagonGrid',
  components: { Hexagon, HexagonRow },
  props: {
    /**
     * The component text
     */
    text: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>

<style lang="sass" scoped>
  .hexagon-grid
    margin: -5px 10px 10px 10px

  .hexagon-row:nth-child(even)
    background: #fafafa
    padding-left: 5.4vmin

  .hexagon-row:nth-child(odd)
    background: #eee

</style>
