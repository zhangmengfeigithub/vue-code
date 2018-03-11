import mywait from './waiting.vue'
const waiter={
    install:function(Vue){
        Vue.component('w',mywait)
    }
}
export default waiter