import Vue from 'vue'
import VueRouter from 'vue-router'
import playerApp from '../views/player-app.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'player-app',
    component: playerApp
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router