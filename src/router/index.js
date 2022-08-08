import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/index',
  //   meta: {
  //     title: '首页',
  //     icon: 'home-4-line',
  //     affix: true,
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Index',
  //       component: () => import('@/views/index'),
  //       meta: {
  //         title: '首页',
  //         icon: 'home-4-line',
  //         affix: true,
  //       },
  //     },
  //   ],
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/client',
    alwaysShow: true,
    meta: {
      title: '基础信息',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'client',
        name: '客户',
        component: () => import('@/views/vab/client'),
        meta: {
          title: '客户',
          icon: 'remixicon-line',
        },
      },
      {
        path: 'clientDetails',
        name: '客户信息',
        hidden: true,
        component: () => import('@/views/vab/clientDetails'),
        meta: {
          title: '客户信息',
          icon: 'remixicon-line',
        },
      },
      {
        path: 'warehouse',
        name: '库房台账列表',
        component: () => import('@/views/warehouse'),
        meta: {
          title: '库房台账列表',
          icon: 'remixicon-line',
        },
      },
      {
        path: 'equipment_recipients',
        name: '设备领用登记表',
        component: () => import('@/views/equipmentRecipients'),
        meta: {
          title: '设备领用登记表',
          icon: 'remixicon-line',
        },
      },
      {
        path: 'goodsOutList',
        name: 'Good Put List',
        component: () => import('@/views/goodsOut'),
        meta: {
          title: '物品出库单',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'goodsPutList',
        name: 'Goods Put List',
        component: () => import('@/views/goodsPut'),
        meta: {
          title: '物品入库单',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'desktop',
        name: 'DeskTop',
        component: () => import('@/views/desktop'),
        meta: {
          title: '供电桌面终端维护派单',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'teamClass',
        name: 'Team Class',
        component: () => import('@/views/teamClass'),
        meta: {
          title: '班务管理系统',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'BugManager',
        name: 'Bug Manager',
        component: () => import('@/views/bugManager'),
        meta: {
          title: '漏洞管理',
          icon: 'test-tube-line',
        },
      },
    ],
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/orderList',
    alwaysShow: true,
    meta: {
      title: '工单中心',
      icon: 'test-tube-line',
    },
    children: [
      {
        path: 'order_list',
        name: 'OrderList',
        component: () => import('@/views/orderList'),
        meta: {
          title: '工单列表',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'add_order',
        name: 'Add Order',
        hidden: true,
        component: () => import('@/views/addOrder'),
        meta: {
          title: '新增工单',
          icon: 'test-tube-line',
        },
      },

    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/test',
    alwaysShow: true,
    meta: {
      title: '运营报表',
      icon: 'test-tube-line',
    },
    children: [
      {
        path: 'use_time_total',
        name: 'Use Time Total',
        component: () => import('@/views/useTimeTotal'),
        meta: {
          title: '用时统计',
          icon: 'test-tube-line',
        },
      },
      {
        path: 'people_total',
        name: 'People Total',
        component: () => import('@/views/peopleTotal'),
        meta: {
          title: '人员统计',
          icon: 'test-tube-line',
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
