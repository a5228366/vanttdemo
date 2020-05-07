// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局组件
import GlobalComponents from './globalComponents'
// 引用vant的css文件
import 'vant/lib/index.css';

// 将全局组件祖册到vue（这样你才能再各个页面的vue实例中用到他们）
Vue.use(GlobalComponents);

// 或者将vant的所有组件都引用进来
// （这样，所有的组件都能直接用，不用一个个的注册到vue里面，坏处是引用的东西太多，项目启动的慢，加载的模板多）
// import Vant from 'vant';
// Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
