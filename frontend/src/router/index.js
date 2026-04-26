import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Library from '../views/Library.vue'
import GameDetail from '../views/GameDetail.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/library', name: 'Library', component: Library },
  { path: '/game/:gameId', name: 'GameDetail', component: GameDetail, props: true },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
})

export default router
