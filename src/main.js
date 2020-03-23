import Vue from 'vue'
import Storage from 'vue-web-storage';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

const sessionStorage = Vue.use(Storage, {
  prefix: '',
  drivers: ['session'],
});

new Vue({
  sessionStorage,
  router,
  data: {
    test: 'value',
    auth: false
  },
  render: h => h(App),
}).$mount('#app');

