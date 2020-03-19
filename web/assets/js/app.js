const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/parts',
    component: Parts
  }, {
    path: '/pre-owned',
    component: Pre-Owned
  }, {
    path: '/rentals',
    component: Rentals
  }, {
    path: '/salvage',
    component: Salvage
  }, {
    path: '/service',
    component: Service
  }]
}); const app = new Vue({
  el: '#main',
  router
});

const Home = {
  template: `<main-content></main-content>`
}
