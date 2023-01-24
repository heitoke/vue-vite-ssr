import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

let baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]
});

export default router;