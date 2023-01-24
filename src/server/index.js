// ? Node.js utility
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// ? Vite
import { createServer } from 'vite';

// ? Express
import express from 'express';

const
    isProd = process.env.NODE_ENV === 'production',
    PORT = 3000;

let __dirname = path.dirname(fileURLToPath(import.meta.url)),
    resolve = (p) => path.resolve(__dirname, p)

let getIndexHTML = async () => {
    let indexHTML = isProd
        ? resolve('../../dist/client/index.html')
        : resolve('../../index.html'),
        html = await fs.promises.readFile(indexHTML, 'utf-8');

    return html;
}

let start = async () => {
    let manifest = isProd ? JSON.parse(fs.readFileSync(resolve('../../dist/client/ssr-manifest.json'), 'utf-8')) : null,
        app = express(),
        router = express.Router(),
        vite = null;

    if (isProd) app.use(express.static('dist/client', { index: false }));
    else {
        vite = await createServer({
            root: process.cwd(),
            server: { middlewareMode: true },
            appType: 'custom'
        })

        app.use(vite.middlewares);
    }

    router.get('/*', async (req, res, next) => {
        try {
            let url = req.url,
                template = await getIndexHTML(),
                render = null;

            if (isProd) render = (await import('../../dist/server/main-server.js')).render;
            else {
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule(resolve('./main-server.js'))).render;
            }
            
            let [appHtml, preloadLinks, meta] = await render(url, manifest),
                html = template
                    .replace(`<!--preload-links-->`, preloadLinks)
                    .replace('<!--app-html-->', appHtml)
                    .replace('<!--meta-->', meta.toHtml());

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (err) {
            if (vite) vite.ssrFixStacktrace(err);
            next(err);
        }
    })

    app.use('/', router);

    app.listen(PORT, () => {
        console.log(`Server start -> http://localhost:${PORT}`);
    });
}

start();