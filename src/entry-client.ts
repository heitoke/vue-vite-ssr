import { createApp } from './main';

import './assets/css/root.css';

const { app, router, store } = createApp();

router.isReady().then(() => {
    app.mount("#app");
});