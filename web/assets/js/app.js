const Home = {
  template: `<main-content></main-content>`
}

const Parts = {
  template: `<main-content></main-content>`
}

const PreOwned = {
  template: `<main-content></main-content>`
}

const Rentals = {
  template: `<main-content></main-content>`
}

const Salvage = {
  template: `<main-content></main-content>`
}

const Service = {
  template: `<main-content></main-content>`
}

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/parts',
    component: Parts
  }, {
    path: '/pre-owned',
    component: PreOwned
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
});
const app = new Vue({
  el: '#main',
  router
});
