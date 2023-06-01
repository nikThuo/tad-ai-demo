import Vue from 'vue'
import App from './App.vue'
import router from './router' // importing the router configuration

new Vue({
  router, // using the router configuration in the Vue instance
  render: h => h(App),
}).$mount('#app')
