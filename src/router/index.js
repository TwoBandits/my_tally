import Vue from 'vue'
import VueRouter from 'vue-router'
import BillDetailPage from '../views/BillDetailPage.vue'
import TallyPage from '../views/TallyPage.vue'
import StatisticalPage from '../views/StatisticalPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/billdetail'
  },
  {
    path:'/billdetail',
    name:'BillDetailPage',
    component:BillDetailPage
  },
  {
    path:'/tally',
    name:'TallyPage',
    component:TallyPage
  },
  {
    path:'/statistical',
    name:'StatisticalPage',
    component:StatisticalPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
