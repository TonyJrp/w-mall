<template>
  <div id="app">
  	<loading v-if="$store.state.loading"></loading>
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='Index' isRouter>
        <img src="./assets/images/footer/index_n.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/footer/index_r.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='Classify' isRouter>
        <img src="./assets/images/footer/shopping_n.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/footer/shopping_r.png" alt="" slot="icon-active"> 
        分类
      </m-tabbar-item>
      <m-tabbar-item id='CartPage' isRouter>
        <img src="./assets/images/footer/cart_n.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/footer/cart_r.png" alt="" slot="icon-active"> 
        购物车
      </m-tabbar-item>
       <m-tabbar-item id='Mine' isRouter>
        <img src="./assets/images/footer/my_n.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/footer/my_r.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/footer/tabbar'
import mTabbarItem from './components/footer/tabbar-item'
export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"Index"
      }
    }
}
</script>

<style>

</style>
