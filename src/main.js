import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

/*const store = new Vuex.Store({

});*/

new Vue({
  render: h => h(App),
}).$mount('#app')
