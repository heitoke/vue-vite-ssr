import { createApp as createVueApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

// * CSS
import './assets/css/root.css';

export const createApp = () => {
    const app = createVueApp(App);
    
    app.use(router);
    app.use(store);

    return { app, router, store }
}
