import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Wapp (Wedding App)",
  "description": "A full-stack application used for our wedding. React and Redux frontend with a No-SQL Db. Wapp has guests login, record meal choice and provides other information about the wedding. Also includes a series of scroll-driven animations.",
  "date": "07/16/2022",
  "coverImage": "/wapp/wapp-logo.webp",
  "projectId": "programming",
  "published": true,
  "technologies": ["Typescript", "React", "Redux", "Express", "MongoDb"]
};
const Wapp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wapp,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_9 as _
};
