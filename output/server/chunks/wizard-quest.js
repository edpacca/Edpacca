import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Wizard Quest",
  "description": "Final project for Harvard CS50 computer science course",
  "date": "01/4/2021",
  "coverImage": "/wizard-grenade/wizard-grenade-cover.webp",
  "projectId": "programming",
  "published": false,
  "technologies": ["Lua"]
};
const Wizard_quest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wizard_quest,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_12 as _
};
