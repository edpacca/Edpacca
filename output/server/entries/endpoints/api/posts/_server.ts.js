import { _ as __vite_glob_0_0 } from "../../../../chunks/aisiaec-meridian-launch-village-2019 copy.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/broken-mentality.js";
import { _ as __vite_glob_0_2 } from "../../../../chunks/dnd-initiative-tracker.js";
import { _ as __vite_glob_0_3 } from "../../../../chunks/fermented-chilli-sauce.js";
import { _ as __vite_glob_0_4 } from "../../../../chunks/how-i-paint-grimdark-darkangels.js";
import { _ as __vite_glob_0_5 } from "../../../../chunks/lockdown-ipa.js";
import { _ as __vite_glob_0_6 } from "../../../../chunks/running-10000m-up.js";
import { _ as __vite_glob_0_7 } from "../../../../chunks/samurai-lawn-party.js";
import { _ as __vite_glob_0_8 } from "../../../../chunks/shanghai-carvings.js";
import { _ as __vite_glob_0_9 } from "../../../../chunks/wapp.js";
import { _ as __vite_glob_0_10 } from "../../../../chunks/warhammer-modular-flying-base.js";
import { _ as __vite_glob_0_11 } from "../../../../chunks/wizard-grenade.js";
import { _ as __vite_glob_0_12 } from "../../../../chunks/wizard-quest.js";
import { _ as __vite_glob_0_13 } from "../../../../chunks/woodturned-bishop.js";
import { j as json } from "../../../../chunks/index.js";
async function getPosts() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/aisiaec-meridian-launch-village-2019 copy.md": __vite_glob_0_0, "/src/posts/broken-mentality.md": __vite_glob_0_1, "/src/posts/dnd-initiative-tracker.md": __vite_glob_0_2, "/src/posts/fermented-chilli-sauce.md": __vite_glob_0_3, "/src/posts/how-i-paint-grimdark-darkangels.md": __vite_glob_0_4, "/src/posts/lockdown-ipa.md": __vite_glob_0_5, "/src/posts/running-10000m-up.md": __vite_glob_0_6, "/src/posts/samurai-lawn-party.md": __vite_glob_0_7, "/src/posts/shanghai-carvings.md": __vite_glob_0_8, "/src/posts/wapp.md": __vite_glob_0_9, "/src/posts/warhammer-modular-flying-base.md": __vite_glob_0_10, "/src/posts/wizard-grenade.md": __vite_glob_0_11, "/src/posts/wizard-quest.md": __vite_glob_0_12, "/src/posts/woodturned-bishop.md": __vite_glob_0_13 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    const valid = file && typeof file === "object" && "metadata" in file && slug;
    if (valid) {
      const metadata = file.metadata;
      const post = { ...metadata, slug };
      post.published && posts.push(post);
    }
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
