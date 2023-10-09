import { c as create_ssr_component, b as add_attribute, d as each, v as validate_component } from "../../chunks/index3.js";
import { P as PostPreview } from "../../chunks/PostPreview.js";
const HomePage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-qijc1p.svelte-qijc1p{display:flex;flex-direction:column;justify-content:center;align-items:center}.greeting.svelte-qijc1p.svelte-qijc1p{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;justify-content:center;align-items:center}.greeting.svelte-qijc1p img.svelte-qijc1p{height:4em}.img-container.svelte-qijc1p.svelte-qijc1p{display:flex;justify-content:center;align-items:center}",
  map: null
};
const HomePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-qijc1p"><div class="greeting svelte-qijc1p"><div class="img-container svelte-qijc1p"><img${add_attribute("src", "images/wizard-grenade/book1.webp", 0)} alt="book pixel art" class="svelte-qijc1p">
			<img${add_attribute("src", "images/wizard-grenade/potion1.webp", 0)} alt="potion pixel art" class="svelte-qijc1p"></div>
		<h1>Hi</h1>
		<div class="img-container svelte-qijc1p"><img${add_attribute("src", "images/wizard-grenade/potion2.webp", 0)} alt="potion pixel art" class="svelte-qijc1p">
			<img${add_attribute("src", "images/wizard-grenade/book2.webp", 0)} alt="book pixel art" class="svelte-qijc1p"></div></div>
	<p>I&#39;m Eddie. Welcome to my corner of the internet</p>
	
	<p>I am a software developer amongst other things. I like Gollum, I hate the new Star Wars films. Wizards are awesome.</p>
</section>`;
});
const PostPreviewList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-1yy5t18{margin-top:1em;gap:0.5em;display:flex;flex-direction:column}",
  map: null
};
const PostPreviewList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="posts svelte-1yy5t18">${each(posts, (post) => {
    return `${validate_component(PostPreview, "PostPreview").$$render($$result, { post, hasPostImage: true }, {}, {})}`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(HomePage, "HomePage").$$render($$result, {}, {}, {})}
${validate_component(PostPreviewList, "PostPreviewList").$$render($$result, { posts: data.posts }, {}, {})}`;
});
export {
  Page as default
};
