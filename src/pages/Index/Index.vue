<template>
  <div>
    <header class="m-header is-fixed is-bg top-search">
      <div class="logo">
        <img src="../../assets/images/common/wc-logo.png">
      </div>
      <div class="search-wrap">
        <img src="../../assets/images/common/location-white.png" alt="">
        <div class="placeholder">上海上海</div>
        <img src="../../assets/images/common/down-arr.png" alt="">
      </div>
      <div class="is-right logo">
        <a href="javascript:;"><img class="m-icon-img" src="../../assets/images/common/search-white.png" /></a>
      </div>
    </header>
    <div class="page-content">
      <m-swipe swipeid="swipe01" :autoplay="1000" paginationDirection="center">
         <div class="swiper-slide " slot="swiper-con" v-for="(list,index) in swipeData" :key="index">
             <img :src="list.picUrl" alt="">
         </div>
      </m-swipe>
    </div>
    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <a v-for="data in datas" href="http://localhost:8080/#/CartPage">
         <img v-lazy="data.url?data.url:null" class="img">
      </a>
  </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import mSwipe from '../../components/swipe/swipe'
  import * as types from '../../store/type';
  export default {
    name: 'index',
    components: {
      mSwipe
    },
    data() {
      return {
        recommendData: [],
        hotData: [],
        swipeData: [],
        datas: [],
        page: 1,
        busy: false
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$store.commit(types.SHOW_LOADING);
        this.axios.get('http://192.168.15.230:9999/client/v1/app/layoutamend',{
          params: {parameters:{"version":"4.2.0","source":"H"}}
        }).then((response) => {
          let carousel = response.data.data.carousel;
          this.swipeData = carousel;
          Vue.nextTick( function() {
          var That = this;
          new Swiper('.swipe01', {
           //循环
         loop: true,
        //分页器
        pagination: '.swiper-pagination',
        //分页类型
        paginationType: "bullets", //fraction,progress,bullets
        //自动播放
        autoplay: 5000,
        //方向
        direction: "horizontal",
        //特效
        effect: "slide", //slide,fade,coverflow,cube
        //用户操作swiper之后，是否禁止autoplay
        autoplayDisableOnInteraction : false
        });
      });
        this.$store.commit(types.HIDE_LOADING);
      });
      },
      loadTop() {
         this.$store.commit(types.SHOW_LOADING);
         let rqurl = 'https://gank.io/api/data/福利/10/4';
         this.axios.get(rqurl).then((response) => {
          this.datas = this.datas.concat(response.data.results);
          this.busy = false;
          this.$nextTick(() => {
              this.$store.commit(types.HIDE_LOADING);
          });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      }
    }
  }

</script>

<style lang="less">
  .is-fixed~.page-content {
    padding-top: .88rem;
  }
  
  .top-search {
    .search-wrap {
      display: flex;
      flex:1;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: 0 .2rem;
      font-size:.3rem;
      .placeholder {
        flex: 1;
        text-align: center;
      }
      img {
        width: .36rem;
        height: .36rem;
      }
    }
  }
  
  .hot-wrap,
  .recommend-wrap {
    padding-top: .1rem;
  }

  .img{
    width: 100%;
  }

</style>
