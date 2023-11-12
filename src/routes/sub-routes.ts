import RouteType from 'src/types/route'

// pages
import dashboardUserVue from 'src/pages/mainPages/index.vue'
import regsiterPageVue from '../pages/register/registerPages.vue'

import paymentMinimarketVue from '../pages/checkout/paymentminimarket.vue'
import paymentFoodVue from '../pages/checkout/paymentFood.vue'
import paymentLaundryVue from '../pages/checkout/paymentLaundry.vue'

import mitraPageVue from '../pages/mitra/mitrapages1.vue'

// layout
import navAbout from '../layouts/about.vue'
import loginVue from '../layouts/login.vue'
import checkoutLayout from '../layouts/checkout.vue'

const subRoutes: RouteType[] = [
  {
    path: '/admin/home',
    component: dashboardUserVue, // dashboard
    meta: {
      layout: navAbout,
      title: 'Home - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
  {
    path: '/mitra/register',
    component: regsiterPageVue, // dashboard
    meta: {
      layout: loginVue,
      title: 'Register - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
  {
    path: '/mitra/home',
    component: dashboardUserVue, // dashboard
    meta: {
      layout: navAbout,
      title: 'Home - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
  {
    // create path about
    path: '/mitra/input',
    component: mitraPageVue,
    meta: {
      layout: navAbout,
      title: 'About - Lingian Hotel',
      label: '',
      icon: '',
    },
  },

  {
    path: '/checkout/minimarket',
    component: paymentMinimarketVue,
    meta: {
      layout: checkoutLayout,
      title: 'Mini Market - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
  {
    path: '/checkout/foodbeverage',
    component: paymentFoodVue,
    meta: {
      layout: checkoutLayout,
      title: 'Mini Market - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
  {
    path: '/checkout/laundry',
    component: paymentLaundryVue,
    meta: {
      layout: checkoutLayout,
      title: 'Mini Market - Lingian Hotel',
      label: '',
      icon: '',
    },
  },
]

export default subRoutes