import Layout from '@/Layout/index.vue'
import Login from '@/views/Login/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Home/index.vue')
      },

      {
        path: 'category/:id',
        component: () => import('@/views/Category/index.vue')
      },
      {
        path: 'category/sub/:id',
        component: () => import('@/views/SubCategory/index.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/Detail/index.vue')
      },
      {
        path: 'cartlist',
        component: () => import('@/views/CartList/index.vue')
      },
      {
        path: 'checkout',
        component: () => import('@/views/CheckOut/index.vue'),
      },
      {
        path: 'pay',
        component: () => import('@/views/Pay/index.vue')
      },
      {
        path: 'paycallback', // 注意路径，必须是paycallback
        component: () => import('@/views/Pay/PayBack.vue')
      },
      {
        path: 'member',
        component: () => import('@/views/Member/index.vue'),
        children: [
          {
            path: 'user',
            component: () => import('@/views/Member/components/UserInfo.vue')
          },
          {
            path: 'order',
            component: () => import('@/views/Member/components/UserOrder.vue')
          }
        ]

      }

    ]
  },

  {
    path: '/login',
    component: Login
  }
]

export default routes