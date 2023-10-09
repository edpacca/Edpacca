import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "D&D Initaitve Tracker",
  "description": "An aesthetic and functional tool for the Dungeon Master to track combat in D&D.",
  "date": "05/09/2023",
  "projectId": "programming",
  "coverImage": "/dnd-initiative/initiative-icon.svg",
  "published": true,
  "technologies": ["Svelte", "Typescript"]
};
const Dnd_initiative_tracker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dnd_initiative_tracker,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};
