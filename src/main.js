import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

/*router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
})*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VModal)
