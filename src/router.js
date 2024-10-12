import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import ActionPlan from './views/ActionPlan.vue'
import CrisisManagement from './views/CrisisManagement.vue'
import CounselorPlan from './views/CounselorPlan.vue'
import ArticlePage from './views/ArticlePage.vue'
import SideKick from './views/SideKick.vue'
import ScheduleMe from './views/ScheduleMe.vue'
import TherapistAvailability from './views/TherapistAvailability.vue'
import PatientCompletion from '@/views/PatientCompletion.vue'
import EmergencyAvailability from './views/EmergencyAvailability.vue'
import ConflictAdjustment from '@/views/ConflictAdjustment.vue'
import ResourceRecommender from '@/views/ResourceRecommender.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/schedule-me',
    name: 'home',
    component: ScheduleMe,
  },

  {
      path: '/crisis-companion',
      name: 'side-kick',
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
    path: '/therapist-availability',
    name: 'therapist-availability',
    component: TherapistAvailability,
  },
  {
    path: '/patient-completion',
    name: 'patient-completion',
    component: PatientCompletion,
  },
  {
    path: '/conflict-adjustment',
    name: 'conflict adjustment',
    component: ConflictAdjustment,
  },
  {
    path: '/emergency-availability',
    name: 'emergency-availability',
    component: EmergencyAvailability,
  },
  {
    path: '/resource-recommender',
    name: 'resource-recommender',
    component: ResourceRecommender,
  },
  {
      path: '/',
      name: 'log-out',
      component: Login,
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
