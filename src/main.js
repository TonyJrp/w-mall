// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import infiniteScroll from 'vue-infinite-scroll';  // 引入滑动模块

import './assets/less/app.less'

//注册组件
Vue.use(VueAxios, axios);
Vue.use(Loading);
Vue.use(infiniteScroll);
// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
    error: require('./assets/images/common/404.jpg'),
    loading: require('./assets/images/common/timg.jpg'),
    attempt: 1
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
