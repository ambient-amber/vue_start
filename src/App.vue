<template>
  <div id="app">
    <v-app dark>
      <v-app-bar class="appBar" app>

        <v-tabs>
          <v-tab to="/">Система</v-tab>
          <v-tab to="/terminal">Терминал</v-tab>
        </v-tabs>

        <router-link to="/">Home</router-link>
        <router-link to="/product">Product</router-link>

        <a @click="recursionTest" href="#">Test recursion</a>

        <v-spacer/>

      </v-app-bar>

      <v-content>
        <v-container fluid class=" container_fluid">
          <router-view></router-view>
        </v-container>
      </v-content>

    </v-app>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
        pingResult: null,
        overlay: false
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

  .container_fluid {
    height: 100%;
  }
</style>
