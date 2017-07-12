/**
 * Created by 87144 on 2017/7/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import homer from '../components/homer/homer.vue'
import allgoods from '../components/allgoods/allgoods.vue'
import goshopping from '../components/goshopping/goshopping.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import personcenter from '../components/personcenter/personcenter.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/homer'
    },
    {
      path: '/homer',
      component: homer
    },
    {
      path: '/allgoods',
      component: allgoods
    },
    {
      path: '/goshopping',
      component: goshopping
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/personcenter',
      component: personcenter
    },
  ]
})

