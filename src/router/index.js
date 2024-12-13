import { createRouter, createHashWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index.vue')
            },
            {
                path: 'system',
                children: [
                    {
                        path: 'admin',
                        component: () => import('@/views/system/admin/index.vue')

                    },
                    {
                        path: 'role',
                        component: () => import('@/views/system/role/index.vue')
                    },
                    {
                        path: 'menu',
                        component: () => import('@/views/system/menu/index.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createHashWebHistory(),
    routes
})

export default router;