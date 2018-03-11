<template>
  <div id="app">
   <button @click="increment">增加</button>
   <button @click="decrement">减小</button>
   <button @click="incrementAsync">增加</button>
   <p>{{count}}</p>
   <p>{{isevenorodd}}</p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
//computed:{
//	count(){
//		return this.$store.state.count
//	}
//}
//computed:mapState([
// 'count'
//]),
computed:mapGetters([
	'count',
	'isevenorodd'
]),
methods:mapActions([
	'increment',
	'decrement',
	'incrementAsync'
])
}
</script>

<style>

</style>
