import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import ActionPlan from './views/ActionPlan.vue'
import CrisisManagement from './views/CrisisManagement.vue'
import CounselorPlan from './views/CounselorPlan.vue'
import ArticlePage from './views/ArticlePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/action-plan',
    name: 'action-plan',
    component: ActionPlan,
  },
  {
    path: '/crisis-management',
    name: 'crisis-management',
    component: CrisisManagement,
  },
  {
    path: '/counselor-plan',
    name: 'counselor-plan',
    component: CounselorPlan,
  },
  {
    path: '/article',
    name: 'article',
    component: ArticlePage,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
