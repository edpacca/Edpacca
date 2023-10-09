import { c as create_ssr_component, b as add_attribute } from "./index3.js";
const FaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { size = "1em" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<i${add_attribute("style", `font-size: ${size}`, 0)}${add_attribute("class", `fa fa-${icon}`, 0)}></i>`;
});
export {
  FaIcon as F
};
