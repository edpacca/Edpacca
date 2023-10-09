import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from "./index3.js";
import { f as formatDate } from "./utils.js";
import { F as FaIcon } from "./FaIcon.js";
import { g as getProjectData } from "./projectData.js";
const PostCoverImage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-fy9k1t{height:100%}.cover-icon.svelte-fy9k1t{height:100%;display:flex;justify-content:center;align-items:center;font-size:2em;color:var(--highlight)}",
  map: null
};
const PostCoverImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$2);
  return `${post.coverImage ? `<img class="cover-image svelte-fy9k1t"${add_attribute("src", `/images/${post.coverImage}`, 0)}${add_attribute("alt", `${post.title} cover image`, 0)}>` : `${post.icon ? `<div class="cover-icon svelte-fy9k1t">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: post.icon }, {}, {})}</div>` : `<img class="cover-image svelte-fy9k1t"${add_attribute("src", "/images/default-cover.webp", 0)}${add_attribute("alt", `${post.title} cover image`, 0)}>`}`}`;
});
const ProjectIconLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".icon-link-container.svelte-n15ldb{position:relative;display:flex;justify-content:center;align-items:center}.name-tag.svelte-n15ldb{background-color:var(--black-50);padding:0.5em;padding-right:2.2em;position:absolute;right:0em;white-space:nowrap;border-radius:8px 0 0 8px}a.svelte-n15ldb{color:var(--highlight);z-index:1}a.svelte-n15ldb:hover{color:var(--white)}",
  map: null
};
const ProjectIconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectId } = $$props;
  const project = getProjectData(projectId);
  const url = `/projects/${project?.id}`;
  if ($$props.projectId === void 0 && $$bindings.projectId && projectId !== void 0)
    $$bindings.projectId(projectId);
  $$result.css.add(css$1);
  return `${project ? `<div class="icon-link-container svelte-n15ldb">${``}
        <a${add_attribute("href", url, 0)} class="svelte-n15ldb">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: project.icon, size: "1.5em" }, {}, {})}</a></div>` : ``}`;
});
const PostPreview_svelte_svelte_type_style_lang = "";
const css = {
  code: ".summary-container.svelte-9eth7d{display:flex;justify-content:center;align-items:center}.image-container.svelte-9eth7d{width:5em;height:5em}.info-container.svelte-9eth7d{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-right:auto;gap:1em}.project-link-container.svelte-9eth7d{margin-left:auto;margin-right:var(--margin);color:var(--highlight);display:flex;justify-content:center;align-items:center;gap:1em;text-transform:uppercase}",
  map: null
};
const PostPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { hasProjectLink = true } = $$props;
  let { hasPostImage = false } = $$props;
  const date = formatDate(post.date);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.hasProjectLink === void 0 && $$bindings.hasProjectLink && hasProjectLink !== void 0)
    $$bindings.hasProjectLink(hasProjectLink);
  if ($$props.hasPostImage === void 0 && $$bindings.hasPostImage && hasPostImage !== void 0)
    $$bindings.hasPostImage(hasPostImage);
  $$result.css.add(css);
  return `<div class="summary-container svelte-9eth7d"><div class="info-container svelte-9eth7d">${hasPostImage ? `<div class="image-container svelte-9eth7d">${validate_component(PostCoverImage, "PostCoverImage").$$render($$result, { post }, {}, {})}</div>` : ``}
        <div><div class="date">${escape(date)}</div>
            <a${add_attribute("href", `/${post.slug}`, 0)} class="title">${escape(post.title)}</a></div></div>
    ${hasProjectLink ? `<div class="project-link-container svelte-9eth7d">${validate_component(ProjectIconLink, "ProjectIconLink").$$render($$result, { projectId: post.projectId }, {}, {})}</div>` : ``}
</div>`;
});
export {
  PostPreview as P
};
