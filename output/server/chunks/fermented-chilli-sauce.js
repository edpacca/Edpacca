import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Fermented Chili Sauce Recipe",
  "description": "My not so famous fermented chilli saws.",
  "date": "05/09/2023",
  "icon": "pepper-hot",
  "projectId": "recipes",
  "published": true
};
const Fermented_chilli_sauce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fermented_chilli_sauce,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_3 as _
};
