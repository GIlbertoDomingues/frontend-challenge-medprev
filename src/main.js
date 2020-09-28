import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Skeleton from 'vue-loading-skeleton';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';

import MTable from '@/components/Table/index.vue';
import MPagination from '@/components/Pagination/index.vue';
import MCard from '@/components/Card/index.vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/webfonts';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(Skeleton);
Vue.use(VueTheMask);
Vue.use(Vuelidate);

Vue.component('MTable', MTable);
Vue.component('MPagination', MPagination);
Vue.component('MCard', MCard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
