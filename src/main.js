import Vue from 'vue'
import Storage from 'vue-web-storage';
import App from './App.vue'
import router from './router'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

const sessionStorage = Vue.use(Storage, {
  prefix: '',
  drivers: ['session'],
});

Vue.use(Vuetify);

new Vue({
  sessionStorage,
  router,
  data: {
    test: 'value',
    auth: false
  },
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');

