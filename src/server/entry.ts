import { createApp } from '../main';

import { renderToString } from "@vue/server-renderer";

interface ICtx {
    modules?: string[]
}

export const render = async (url: string) => {
    const { app, router, store } = createApp();

    await router.push(url);
    await router.isReady();

    let ctx: ICtx = {};

    let html = await renderToString(app, ctx);

    let state = JSON.stringify(store.state);

    return [html, state];
}