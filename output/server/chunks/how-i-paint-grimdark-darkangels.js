import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
import { I as Img } from "./img.js";
const metadata = {
  "title": "How I Paint Grimdark Dark Angels",
  "description": "I create an awesome looking, highland themed base for my landspeeder. Specifically I wanted to be able to attach and remove the stand itself separaetly. I used Lego Technic to do this.",
  "date": "07/07/2023",
  "projectId": "minipainting",
  "published": true
};
const How_i_paint_grimdark_darkangels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1>What is Lorem Ipsum?</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>${validate_component(Img, "Components.img").$$render($$result, { src: "book.png", alt: "book" }, {}, {})}</p>
<!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">function</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">greet</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">name</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">) &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">console</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">log</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#96;Hey </span><span style="color: #569CD6">$&#123;</span><span style="color: #9CDCFE">name</span><span style="color: #569CD6">&#125;</span><span style="color: #CE9178">!&#96;</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #D4D4D4">    &#125;</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: How_i_paint_grimdark_darkangels,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_4 as _
};
