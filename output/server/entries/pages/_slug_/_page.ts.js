import { e as error } from "../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../posts/aisiaec-meridian-launch-village-2019 copy.md": () => import("../../../chunks/aisiaec-meridian-launch-village-2019 copy.js").then((n) => n._), "../../posts/broken-mentality.md": () => import("../../../chunks/broken-mentality.js").then((n) => n._), "../../posts/dnd-initiative-tracker.md": () => import("../../../chunks/dnd-initiative-tracker.js").then((n) => n._), "../../posts/fermented-chilli-sauce.md": () => import("../../../chunks/fermented-chilli-sauce.js").then((n) => n._), "../../posts/how-i-paint-grimdark-darkangels.md": () => import("../../../chunks/how-i-paint-grimdark-darkangels.js").then((n) => n._), "../../posts/lockdown-ipa.md": () => import("../../../chunks/lockdown-ipa.js").then((n) => n._), "../../posts/running-10000m-up.md": () => import("../../../chunks/running-10000m-up.js").then((n) => n._), "../../posts/samurai-lawn-party.md": () => import("../../../chunks/samurai-lawn-party.js").then((n) => n._), "../../posts/shanghai-carvings.md": () => import("../../../chunks/shanghai-carvings.js").then((n) => n._), "../../posts/wapp.md": () => import("../../../chunks/wapp.js").then((n) => n._), "../../posts/warhammer-modular-flying-base.md": () => import("../../../chunks/warhammer-modular-flying-base.js").then((n) => n._), "../../posts/wizard-grenade.md": () => import("../../../chunks/wizard-grenade.js").then((n) => n._), "../../posts/wizard-quest.md": () => import("../../../chunks/wizard-quest.js").then((n) => n._), "../../posts/woodturned-bishop.md": () => import("../../../chunks/woodturned-bishop.js").then((n) => n._) }), `../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Hmmm couldn't find ${params.slug}`);
  }
}
export {
  load
};
