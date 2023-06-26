import { App, Plugin } from "vue";

import type { RouteLocationNormalizedLoaded } from 'vue-router';

interface Meta {
    title: string;
}

const plugin: Plugin = {
    install: (app: App) => {}
}

export default plugin;

declare module "vue" {
    interface ComponentCustomOptions {
        meta?(route: RouteLocationNormalizedLoaded): Meta;
    }
}