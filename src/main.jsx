import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-700.css';
import './styles.css';
import App from './App.jsx';
import { pages } from './content.js';

const path = location.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
const app = <App path={path}/>;
const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
  if (path !== '/') document.title = (pages[path]?.[0] || 'Page not found') + ' | SteelSafe';
  if (pages[path]) document.querySelector('meta[name="description"]').content = pages[path][1];
  if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
}
