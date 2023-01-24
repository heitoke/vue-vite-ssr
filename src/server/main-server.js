// ? Node.js
import { basename } from 'node:path';

// ? Vue SSR
import { createSSRApp } from 'vue';
import { renderToString, ssrRenderComponent } from 'vue/server-renderer';
import App from '../App.vue';
import router from '../router/index.js';

export async function render(url, manifest = null) {
    let app = createSSRApp(App);
    app.use(router);

    await router.push(url)
    await router.isReady()

    let matchedComponents = router.currentRoute.value.matched.flatMap(record =>Object.values(record.components)),
        meta = {},
        ctx = {
            modules: []
        },
        preloadLinks = '';

    try {
        await Promise.all(matchedComponents.map(async component => {
            if (!meta.title && component?.meta)
                meta = typeof component.meta === 'function' ? await component?.meta(typeof component?.data === 'function' ? component?.data() : component?.data) : component.meta;
            
            if (component?.asyncData) {
                return component.asyncData({ store, route: router.currentRoute.value });
            }
        }));
    } catch (err) {
        console.log(err);
    }

    let html = await renderToString(app);

    if (manifest)
        renderPreloadLinks(ctx.modules, manifest);

    return [html, preloadLinks, {
        json: meta,
        toHtml() {
            let html = '';

            for (let key in meta) {
                if (key === 'og' || key === 'twitter') {
                    for (let propertyKey in meta[key]) {
                        html += `\n<meta property="${key}:${propertyKey}" content="${meta[key][propertyKey]}">`;
                    }
                } else {
                    html += `\n<meta name="${key}" content="${meta[key]}">`;
                }
            }

            return html;
        }
    }];
}

let renderPreloadLinks = (modules, manifest) => {
    let links = '',
        seen = new Set();

    for (let module of modules) {
        let files = manifest[module];

        if (!files) continue;

        for (let file of files) {
            if (!seen.has(file)) {
                seen.add(file);
                
                let filename = basename(file);

                if (manifest[filename]) {
                    for (let depFile of manifest[filename]) {
                        links += renderPreloadLink(depFile);
                        seen.add(depFile);
                    }
                }

                links += renderPreloadLink(file);
            }
        }
    }
    return links;
}

let renderPreloadLink = (file) => {
    if (file.endsWith('.js')) {
        return `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith('.css')) {
        return `<link rel="stylesheet" href="${file}">`;
    } else if (file.endsWith('.woff')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
    } else if (file.endsWith('.woff2')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
    } else if (file.endsWith('.gif')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
    } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
    } else if (file.endsWith('.png')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
    } else return '';
}
