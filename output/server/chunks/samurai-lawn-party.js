import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Samurai Lawn Party",
  "description": "Ska Band",
  "date": "01/01/2009",
  "projectId": "music",
  "published": true,
  "icon": "music"
};
const Samurai_lawn_party = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Samurai_lawn_party,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_7 as _
};
