import { c as create_ssr_component, b as add_attribute, e as escape } from "./index3.js";
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let img;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<div class="post-image-container"><img${add_attribute("src", `images/${src}`, 0)}${add_attribute("alt", alt, 0)} loading="lazy" class="${["post-image", ""].join(" ").trim()}"${add_attribute("this", img, 0)}>
    ${alt ? `<div class="caption">${escape(alt)}</div>` : ``}</div>`;
});
export {
  Img as I
};
