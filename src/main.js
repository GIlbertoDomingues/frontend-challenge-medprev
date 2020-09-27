import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Skeleton from 'vue-loading-skeleton';

import MTable from '@/components/Table/index.vue';
import MPagination from '@/components/Pagination/index.vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/webfonts';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(Skeleton);

Vue.component('MTable', MTable);
Vue.component('MPagination', MPagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
