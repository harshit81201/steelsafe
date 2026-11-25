import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { pages } from '../src/content.js';

const template = await readFile('dist/index.html', 'utf8');
const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  for (const [path, [name, description]] of Object.entries(pages)) {
    const title = path === '/' ? 'SteelSafe | Labour Safety & Welfare Initiative' : name + ' | SteelSafe';
    const markup = renderToString(createElement(App, { path }));
    const html = template.replace(/<title>.*?<\/title>/, '<title>' + escape(title) + '</title>')
      .replace(/(<meta name="description" content=")[^"]*/, '$1' + escape(description))
      .replace('<div id="root"></div>', () => '<div id="root">' + markup + '</div>');
    const directory = join('dist', path);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), html);
  }
} finally {
  await server.close();
}
