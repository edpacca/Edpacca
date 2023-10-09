import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "AISIAEC Meridian EP Launch",
  "description": "In September 2019 we launched our third EP 'Meridian' with a free Gig at the village.",
  "date": "07/09/2019",
  "projectId": "aisiaec",
  "published": true,
  "icon": "circle"
};
const Aisiaec_meridian_launch_village_2019u20copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<iframe width="100%" height="415" alt="Fangs live at the village video" title="Fangs live at the village video" src="https://www.youtube.com/embed/O7PL8ON3Si0"></iframe>`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aisiaec_meridian_launch_village_2019u20copy,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
