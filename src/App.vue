<template>
  <div id="app">
    <Hexagon text="Hello World!"></Hexagon>
    <Hexagon color="blue">
      <span slot="top">8</span>
      <span slot="middle">Oxygen</span>
      <span slot="bottom">O2</span>
    </Hexagon>
    <HexagonRow>
    </HexagonRow>
    <HexagonGrid>
    </HexagonGrid>
  </div>
</template>

<script>
import Hexagon from 'vue-hexagon-grid/src/hexagon'
import HexagonRow from 'vue-hexagon-grid/src/hexagon-row'
import HexagonGrid from 'vue-hexagon-grid/src/hexagon-grid'

export default {
  name: 'App',
  components: {
    Hexagon,
    HexagonRow,
    HexagonGrid
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
