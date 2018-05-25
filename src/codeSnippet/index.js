import CodeSnippet from './codeSnippet'

CodeSnippet.install = Vue => {
  Vue.component('code-snippet', CodeSnippet)
}

export default CodeSnippet
