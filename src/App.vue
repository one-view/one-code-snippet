<template>
  <div id="app">
    <h1>代码片段显示组件</h1>

    <br>
    <br>

    <code-snippet :value="html" type="html"></code-snippet>

  </div>
</template>

<script>
const html = `
    // Comment
    <div class="color-value" ref="colorpicker">
      <div class="color-block" :style="{backgroundColor: color}" @click="toggle"></div>
      <transition name="fadeup">
        <v-colorpanel v-show="show" :value="color" @change="afterChange"></v-colorpanel>
      </transition>
    </div>`

export default {
  name: 'app',
  data () {
    return {
      html,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
