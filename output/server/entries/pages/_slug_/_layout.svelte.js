import { c as create_ssr_component } from "../../../chunks/index3.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-container.svelte-c09azy{position:relative;margin:var(--margin)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="post-container svelte-c09azy">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
