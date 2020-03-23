<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>

      <button v-if="auth" @click="exit">Выйти</button>
      <button v-else @click="login">Войти</button>
    </div>

    <p>App.vue auth value: {{ auth }}</p>

    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data: function() {
      return {
        auth: null
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
