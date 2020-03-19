import Vue from 'vue'
import Router from 'vue-router'
import Product from "./views/Product";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        },
    ]
});