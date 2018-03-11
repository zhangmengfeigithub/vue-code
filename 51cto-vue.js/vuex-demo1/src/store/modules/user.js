import types from '../types.js'
var state={
	count:6
}
var getters={
	count(state){
		return state.count
	}
}
var actions={
	increment(context){
		console.log(context)
		context.commit(types.INCREMENT);
	},
	decrement({commit,state}){
	if(state.count>10){
	commit(types.DECREMENT)}
	}
		
}
var mutations={
	[types.INCREMENT](state){
		state.count++
	},
	[types.DECREMENT](state){
	    state.count--
	}
	
}
export default{
	state,
	getters,
	actions,
	mutations
	
}
