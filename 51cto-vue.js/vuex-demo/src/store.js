import 	Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state={
	count:6
}
var getters={
	count(state){
		return state.count
	},
	isevenorodd(state){
	return state.count%2==0?'偶数':'奇数'
	}
}
var actions={
	increment(context){
		console.log(context)
		context.commit('increment');
	},
	decrement({commit,state}){
	if(state.count>10){
	commit('decrement')}
	},
	incrementAsync({commit,state}){
	var p=new Promise((resolve,reject)=>{
	setTimeout(()=>{
	resolve();
	},3000);
	})
	p.then(()=>{
	commit('increment')
	}).catch(()=>{
	console.log('异步操作')
	})
	}
		
}
var mutations={
	increment(state){
		state.count++
	},
	decrement(state){
	    state.count--
	}
	
}
const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
export default store;
