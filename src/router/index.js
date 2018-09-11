import Vue from 'vue';
import Router from 'vue-router';
import routes from './route.config';
import App from '../App.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes
});
