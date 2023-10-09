import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Woodturning a Bishop",
  "description": "My very amateur attempts at creating things from wood.",
  "coverImage": "/woodwork/bishop.webp",
  "date": "09/19/2018",
  "projectId": "woodwork",
  "published": true
};
const Woodturned_bishop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Woodturned_bishop,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_13 as _
};
