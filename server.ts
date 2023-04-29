import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

const startServer = async () => {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = await readFile(indexHTML, 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--ssr-outlet-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const {
        stream: { pipe },
        injectPreload,
      } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onShellError() {
          res.status(500);
        },
        onAllReady() {
          res.write(html[1].replace('<!--preloaded-state-->', injectPreload()));
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
  });
};

startServer();
