import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).use(router).$mount('#app')

// Vue(App).use(router).mount('#app')
