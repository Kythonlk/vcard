import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_4b73f09c.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_99011b09.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_f4a6b927.mjs');
const _page1  = () => import('./chunks/index_4ef73a72.mjs');
const _page2  = () => import('./chunks/userlist_a5187f81.mjs');
const _page3  = () => import('./chunks/rss_57f2a155.mjs');
const _page4  = () => import('./chunks/about_5130de71.mjs');
const _page5  = () => import('./chunks/index_2b149c4a.mjs');
const _page6  = () => import('./chunks/_.._1afc49f3.mjs');
const _page7  = () => import('./chunks/index_a8ebded4.mjs');
const _page8  = () => import('./chunks/_id__ef94035f.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/userlist.astro", _page2],["src/pages/rss.xml.js", _page3],["src/pages/about.astro", _page4],["src/pages/blog/index.astro", _page5],["src/pages/blog/[...slug].astro", _page6],["src/pages/api/users/index.ts", _page7],["src/pages/[id].astro", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
