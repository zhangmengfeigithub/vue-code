import Vue from 'vue'
import App from './App.vue'
import Loading from './components/Loading'
import waiting from './components/wating'
Vue.use(Loading)
Vue.use(waiting)
new Vue({
  el: '#app',
  render: h => h(App)
})
