import 'babel-polyfill';
import 'isomorphic-fetch';

import Vue from 'vue';
import App from '@/App.vue';
import store from '@/scripts/store.js';
import '@/registerServiceWorker';
import Vuetify from '@/scripts/vuetify';

Vue.config.productionTip = false;

Vuetify(Vue);

Vue.filter('getImagePath', (imagePath) => {
  return require('@/assets/' + imagePath);
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
