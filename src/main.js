import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 引入全局的 css 样式


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
