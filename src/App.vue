<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>

      <button v-if="auth" @click="exit">Выйти</button>
      <button v-else @click="login">Войти</button>
    </div>

    <a @click="recursionTest" href="#">Test recursion</a>

    <router-view />
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'App',
    components: {},
    data: function() {
      return {
        auth: null,
        pingResult: null
      }
    },
    mounted() {
      let authSession = this.$sessionStorage.get('auth');

      this.auth = (authSession === null) ? false : authSession;
    },
    methods: {
      exit() {
        this.auth = false;
        this.$sessionStorage.set('auth', false);
      },
      login() {
        this.auth = true;
        this.$sessionStorage.set('auth', true);
      },
      ping: function(timeout) {
        let _this = this;

        return new Promise(function(resolve/*, reject*/) {
          setTimeout(async () => {

            try {
              await axios.get('/').then(() => {
                _this.pingResult = true;
                console.log('in ping true', _this.pingResult);
                return resolve();
              });
            } catch (e) {
              console.log('in ping false', _this.pingResult);
              return resolve(_this.ping(timeout));
            }

          }, timeout);
        });
      },
      recursionTest: async function() {
        let _this = this;

        this.ping(6000).then(function(){
          console.log('after ping', _this.pingResult);
        });
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
