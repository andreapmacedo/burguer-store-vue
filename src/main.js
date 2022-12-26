import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './views/Home.vue'
import Pedidos from './views/Pedidos.vue'

const router = createRouter({  
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/pedidos', name: 'Pedidos', component: Pedidos}
      // {    path: '/pedidos',
      // name: 'Pedidos',
      // // route level code-splitting
      // // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Pedidos.vue')}
    ]
  
})


// const app = Vue.createApp({})
createApp(App)
.use(router)
.mount('#app')
