import { getCurrentUser } from '@/firebase'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Documents',
        },
    },
    {
        path: '/documents',
        name: 'Documents',
        component: () => import('@/pages/Documents.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/document/:id',
        name: 'Document',
        component: () => import('@/pages/Document.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('@/pages/SignIn.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const user = await getCurrentUser()
        if (user) {
            next()
        } else {
            next('/sign-in')
        }
    } else {
        next()
    }
})

export default router
