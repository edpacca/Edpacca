import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../chunks/index3.js";
import { F as FaIcon } from "../../../chunks/FaIcon.js";
const ProjectPreview_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".icon-title-grid.svelte-1o8xg66{display:grid;grid-template-columns:2em 1fr 2em;align-items:center;justify-content:left;gap:1em;color:var(--highlight)}.post-count.svelte-1o8xg66{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:0.3em}",
  map: null
};
const ProjectPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { numberOfPosts = 0 } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.numberOfPosts === void 0 && $$bindings.numberOfPosts && numberOfPosts !== void 0)
    $$bindings.numberOfPosts(numberOfPosts);
  $$result.css.add(css$1);
  return `<div class="summary-container"><div class="icon-title-grid svelte-1o8xg66">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: project.icon, size: "1.5em" }, {}, {})}
        <a${add_attribute("href", `/projects/${project.id}`, 0)} class="title">${escape(project.name)}</a>
        <div class="post-count svelte-1o8xg66">${numberOfPosts > 0 ? `${escape(numberOfPosts)}
            ${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "newspaper" }, {}, {})}` : ``}</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-list.svelte-xdh165{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getNumberOfPosts = (projectId) => {
    return data.posts.filter((p) => p.projectId === projectId).length;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="project-list svelte-xdh165">${each(data.projects, (project) => {
    return `${validate_component(ProjectPreview, "ProjectPreview").$$render(
      $$result,
      {
        project,
        numberOfPosts: getNumberOfPosts(project.id)
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
export {
  Page as default
};
