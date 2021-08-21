import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "./assets/css/app.css"
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'

//配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//通过axios请求拦截器添加token，保证拥有获取数据权限
axios.interceptors.request.use(config=>{
  config.headers.Authorization =sessionStorage.getItem('token');
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
