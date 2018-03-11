<template>
  <div id="app">
   <NavView></NavView>> 
   <HomeView></HomeView>> 
   <FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'

export default{
  components:{
    NavView,
    HomeView,
    FooterView
  },
  mounted(){
    this.slider();
  },
  methods:{
    slider(){
      $(function(){
        var mySwiper=Swiper($('.banner')[0]),{
           auto:2000,
           continupus:true,
           stopPropagation:true,
           callback:function(index,element){
             $('.banner ol li').removeClass('active');
             $('.banner ol li').eq(index).addClass('active')
           }
           
        }
      }
    }
  }
}
</script>

<style>
@import './assets/css/index.css';
</style>
