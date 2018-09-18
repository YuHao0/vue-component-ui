// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import czUi from './components/index.js';
import SideNav from './publicComponents/side-nav';

Vue.use(czUi);
Vue.component('side-nav', SideNav);
Vue.config.productionTip = false;

router.afterEach(route => {
  document.title = route.name || 'Api Union';
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
