import { createApp as createVueApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

// * CSS
import './assets/css/root.css';

// * Plugins
import Meta from './plugins/meta';

export const createApp = () => {
    const app = createVueApp(App);
    
    app.use(router);
    app.use(store);

    app.use(Meta);

    return { app, router, store }
}
