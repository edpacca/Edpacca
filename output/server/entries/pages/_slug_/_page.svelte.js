import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, m as missing_component } from "../../../chunks/index3.js";
import { f as formatDate } from "../../../chunks/utils.js";
import { g as getProjectData } from "../../../chunks/projectData.js";
import { F as FaIcon } from "../../../chunks/FaIcon.js";
const ProjectBackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectId } = $$props;
  const project = projectId ? getProjectData(projectId) : void 0;
  if ($$props.projectId === void 0 && $$bindings.projectId && projectId !== void 0)
    $$bindings.projectId(projectId);
  return `${project ? `<button class="button1">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "angle-left" }, {}, {})}
        ${``}
        ${project.icon ? `${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: project.icon }, {}, {})}` : ``}</button>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-m1z4j3{text-transform:uppercase}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const date = formatDate(data.meta.date);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `
${$$result.head += `<!-- HEAD_svelte-1cn040f_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.article, 0)}><!-- HEAD_svelte-1cn040f_END -->`, ""}

<article>
    <hgroup><h1 class="svelte-m1z4j3">${escape(data.meta.title)}</h1>
        <p class="date">Published ${escape(date)}</p>
        ${validate_component(ProjectBackButton, "ProjectBackButton").$$render($$result, { projectId: data.meta.projectId }, {}, {})}</hgroup>

    <div class="contents">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
</article>`;
});
export {
  Page as default
};
