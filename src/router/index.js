import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import People from '../views/People.vue';
import New from '../views/New.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/people/:id',
    name: 'people',
    component: People,
  },
  {
    path: '/new/',
    name: 'new',
    component: New,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
