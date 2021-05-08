<template>
    <div class="hexagon" v-bind:class="color" @click="onClick">
      <div class="top">
        <slot name="top"></slot>
      </div>
      <div class="middle">
        <slot name="middle"></slot>
      </div>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Hexagon',
  data () {
    return {
    }
  },

  props: {
    color: {
      default: 'white',
      type: String
    },

    background: {
      default: 'grey',
      type: String
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto|Russo+One')

  .hexagon
    font-family: 'Roboto', sans-serif
    margin: 10px

    &:first-child
      margin-left: 0.0vmin
    .top
      font-size: 0.5rem
    .middle
      font-size: 0.75rem
    .bottom
      font-size: 0.5rem
    &:before
      content: ""
      border-bottom: 3vmin solid #6C6
      border-left: 5.2vmin solid transparent
      border-right: 5.2vmin solid transparent
      position: absolute
      top: -3.0vmin
    margin: 3.0vmin 0 3.0vmin 0.4vmin
    width: 10.4vmin
    height: 6.0vmin
    background-color: #6C6
    position: relative
    display: flex
    flex-direction: column
    justify-content: space-around
    align-self: center
    text-align: center
    color: #fff
    &:after
      content: ""
      position: absolute
      bottom: -3.0vmin
      border-top: 3.0vmin solid #6C6
      border-left: 5.2vmin solid transparent
      border-right: 5.2vmin solid transparent
    &:before, &:after
      transition: all 0.3s ease-out
    transition: all 0.3s ease-out
    &.invisible
      &:before
        border-bottom: 3vmin solid #2c3e50
        border-left: 5.2vmin solid transparent
        border-right: 5.2vmin solid transparent
      background-color: #2c3e50
      &:after
        border-top: 3.0vmin solid #2c3e50
    &:not(.invisible):hover
      &:before
        border-bottom: 3vmin solid tomato
      background-color: tomato
      cursor: pointer
      transform: scale(1.4)
      position: relative
      z-index: 1000
      &:after
        border-top: 3.0vmin solid tomato

  .grey
    &:before
      border-bottom: 3vmin solid #888
    background-color: #888
    &:after
      border-top: 3vmin solid #888

  .amber
    &:before
      border-bottom: 3vmin solid #ffc107
    background-color: #ffc107
    &:after
      border-top: 3vmin solid #ffc107

  .orange
    &:before
      border-bottom: 3vmin solid #fb8c00
    background-color: #fb8c00
    &:after
      border-top: 3vmin solid #fb8c00

  .red
    &:before
      border-bottom: 3vmin solid #f44336
    background-color: #f44336
    &:after
      border-top: 3vmin solid #f44336

  .blue
    &:before
      border-bottom: 3vmin solid #0288d1
    background-color: #0288d1
    &:after
      border-top: 3vmin solid #0288d1

  .green
    &:before
      border-bottom: 3vmin solid #43a047
    background-color: #43a047
    &:after
      border-top: 3vmin solid #43a047

  .lime
    &:before
      border-bottom: 3vmin solid #cddc39
    background-color: #cddc39
    &:after
      border-top: 3vmin solid #cddc39

  .violet
    &:before
      border-bottom: 3vmin solid #5e35b1
    background-color: #5e35b1
    &:after
      border-top: 3vmin solid #5e35b1

  .indigo
    &:before
      border-bottom: 3vmin solid #3949ab
    background-color: #3949ab
    &:after
      border-top: 3vmin solid #3949ab
</style>
