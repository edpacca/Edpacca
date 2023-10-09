import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
import { S as StravaGoalStats, P as PUBLIC_STRAVA_GOAL, a as PUBLIC_STRAVA_GOAL_YEAR, b as PUBLIC_STRAVA_LAST_UPDATED, c as PUBLIC_STRAVA_CURRENT, d as PUBLIC_STRAVA_TARGET } from "./StravaGoalStats.js";
const Strava2023Goal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const current = Number(PUBLIC_STRAVA_CURRENT);
  const target = Number(PUBLIC_STRAVA_TARGET);
  return `${validate_component(StravaGoalStats, "StravaStats").$$render(
    $$result,
    {
      target,
      current,
      goal: PUBLIC_STRAVA_GOAL,
      goalYear: Number(PUBLIC_STRAVA_GOAL_YEAR),
      lastUpdated: PUBLIC_STRAVA_LAST_UPDATED
    },
    {},
    {}
  )}`;
});
const metadata = {
  "title": "Running 10,000 meters up",
  "description": "Running up that hill",
  "date": "01/01/2023",
  "projectId": "running",
  "published": true,
  "icon": "mountain"
};
const Running_10000m_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<div style="margin-top: 2em;">${validate_component(Strava2023Goal, "Strava2023Goal").$$render($$result, {}, {}, {})}
<hr></div>
<p>For 2023 I set myself the lofty (but achievable) target of running 10,000m of elevation gain. I have run for fun and easy exercise for a few years now, and for some reason I really enjoy running up hills. (I do like Kate Bush).</p>
<p>Edinburgh lends itself very well to this, and with Arthur’s seat on my doorstep I thought why not. I initially set myself a 5k goal, but was talked up to 10k by a friend. He was right! I underestimated myself and managed to rack up the first 1000m quite quickly. </p>
<p>I found Strava Challenges very useful as a driver for keeping me out on the trails. I managed to get 2000m elevation in March although it was definitely a lot more running than I’m used to! It’s now September and despite a reasonable break in July and August I’m still just ahead of schedule - I’m doing my second 2000m in one Month challenge and hope to beat my initial 10,000m goal by as much as possible.</p>`;
    }
  })}`;
});
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Running_10000m_up,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_6 as _
};
