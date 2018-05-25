import Vue from 'vue'
import App from './App.vue'
import CodeSnippet from '@/codeSnippet'
// import CodeSnippet from '../dist/build.js'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
window.hljs = hljs

Vue.use(CodeSnippet)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
