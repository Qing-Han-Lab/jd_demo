import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/components'
import ajax from './utils/http'
import commen from './utils/commen'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/swiper.scss'
import { Toast,Stepper,Dialog,DropdownMenu,DropdownItem,Button,Cell,Switch  } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.prototype.$http = ajax

Vue.use(commen)
Vue.use(Toast)
Vue.use(Stepper)
Vue.use(Dialog)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button)
Vue.use(Cell)
Vue.use(Switch)
Vue.use(VueAwesomeSwiper)


Vue.prototype.$Dialog = Dialog
Vue.prototype.$toast = function(text='加载中',type='default'){
  if(type==='loading'){
   Toast.loading({message:text,forbidClick:true})
   return;
  }
  Toast(text)
}
Vue.prototype.$closeToast = Toast.clear

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
