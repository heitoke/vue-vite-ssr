import { createRouter, createMemoryHistory, createWebHistory, type RouteRecordRaw } from 'vue-router';

let baseUrl = import.meta.env.BASE_URL;

const routes: RouteRecordRaw[] = [
    {
        name: 'MainPage',
        path: '/',
        component: () => import('../pages/Main.vue')
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: () => import('../pages/About.vue')
    },
    {
        name: 'UserPage',
        path: '/users/:userId',
        component: () => import('../pages/User.vue')
    }
];

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
});

export default router;