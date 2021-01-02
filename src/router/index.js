import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import Home from '../views/Home'

import Dashboard from '../views/dashboard/Dashboard'
import Users from '../views/dashboard/user/Users'
import User from '../views/dashboard/user/User'
import ForgotPassword from '../views/ForgotPassword'
import UserCreate from '../views/dashboard/user/UserCreate'
import UserEdit from '../views/dashboard/user/UserEdit'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    component: Home,
    children: [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/users',
        name: 'Users',
        component: Users,
      },
      {
        path: '/user-create',
        name: 'UserCreate',
        component: UserCreate,
      },
      {
        path: '/users/:id',
        name: 'UserProfile',
        component: User,
      },
      {
        path: '/users/:id/edit',
        name: 'UserEdit',
        component: UserEdit,
      },
    ]


  },
  {
    path: '/',
    name: 'Login',
    component: Login,

  },
  {
    path: '/register',
    name: 'Register',
    component: Register,

  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]

  if (!subsequentMiddleware) return context.next

  return (...parameters) => {

    context.next(...parameters)

    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({
      ...context,
      next: nextMiddleware
    })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ?
      to.meta.middleware : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({
      ...context,
      next: nextMiddleware
    })
  }

  return next()
})

export default router