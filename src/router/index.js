import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

let baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: () => import('../pages/Main.vue'),
            meta: { title: 'Home' }
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: () => import('../pages/About.vue'),
            meta: { title: 'About' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'ErrorPage',
            component: () => import('../pages/Error.vue'),
            meta: { hide: true }
        }
    ]
});

export default router;