import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_99011b09.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"userlist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/userlist","type":"page","pattern":"^\\/userlist\\/?$","segments":[[{"content":"userlist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/userlist.astro","pathname":"/userlist","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"api/users","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/users","type":"endpoint","pattern":"^\\/api\\/users$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/users/index.ts","pathname":"/api/users","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","compressHTML":true,"componentMetadata":[["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/userlist.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/kytho/dev/webtemp/vcardgen/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_4b73f09c.mjs","C:/Users/kytho/dev/webtemp/vcardgen/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_f4a6b927.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_4ef73a72.mjs","\u0000@astro-page:src/pages/userlist@_@astro":"chunks/userlist_a5187f81.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_57f2a155.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_5130de71.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_2b149c4a.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._1afc49f3.mjs","\u0000@astro-page:src/pages/api/users/index@_@ts":"chunks/index_a8ebded4.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"chunks/_id__ef94035f.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_404c2211.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_7995ef94.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_ae15ff79.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_de57fd5c.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_b499125a.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_9d324f53.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_46ec291d.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_38a6a6b4.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_54ea17a1.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_5646955c.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/first-post.md":"chunks/first-post_6e3bae48.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_5512adac.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/second-post.md":"chunks/second-post_3d6e88d6.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/third-post.md":"chunks/third-post_4dc216d1.mjs","C:/Users/kytho/dev/webtemp/vcardgen/src/content/blog/using-mdx.mdx":"chunks/using-mdx_d5bec5ea.mjs","@astrojs/react/client.js":"_astro/client.6117a174.js","C:/Users/kytho/dev/webtemp/vcardgen/src/components/usercreate":"_astro/usercreate.84dfc3d2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_id_.0f4758d4.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_astro/client.6117a174.js","/_astro/index.8c61bc87.js","/_astro/usercreate.84dfc3d2.js","/_astro/usercreate.baac8f85.css","/index.html","/userlist/index.html","/rss.xml","/about/index.html","/blog/index.html","/api/users"]});

export { manifest };
