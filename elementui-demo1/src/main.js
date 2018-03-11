import Vue from 'vue'
import App from './App.vue'
import {Button} from "element-ui"
vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
