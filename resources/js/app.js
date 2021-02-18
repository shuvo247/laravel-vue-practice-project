/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('admin-lte');

window.Vue = require('vue').default;
import VueRouter from 'vue-router'
Vue.use(VueRouter)



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


let routes = [
    { path: '/user', component: require('./components/User.vue').default },
    { path: '/dashboard', component: require('./components/Dashboard.vue').default }
  ]
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
    routes 
  });

const app = new Vue({
    router,
    el: '#app',
});
