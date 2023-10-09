import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "./index3.js";
import { d as dayOfYear, f as formatDate } from "./utils.js";
const PUBLIC_STRAVA_CURRENT = "7259";
const PUBLIC_STRAVA_LAST_UPDATED = "09-08-23";
const PUBLIC_STRAVA_TARGET = "10000";
const PUBLIC_STRAVA_GOAL_YEAR = "2023";
const PUBLIC_STRAVA_GOAL = "10km elevation";
const StravaBadge_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".strava-badge-.svelte-1aclfu1.svelte-1aclfu1{display:inline-block;height:48px}.strava-badge-.svelte-1aclfu1 img.svelte-1aclfu1{visibility:hidden;height:48px}.strava-badge-.svelte-1aclfu1.svelte-1aclfu1:hover{background-position:0 -63px}.strava-badge-follow.svelte-1aclfu1.svelte-1aclfu1{height:48px;width:48px;background:url(//badges.strava.com/echelon-sprite-48.png) \n        no-repeat 0 0}",
  map: null
};
const id = "24944240";
const StravaBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const profileUrl = `https://strava.com/athletes/${id}`;
  $$result.css.add(css$1);
  return `<a${add_attribute("href", profileUrl, 0)} class="strava-badge- strava-badge-follow svelte-1aclfu1" target="_blank"><img src="//badges.strava.com/echelon-sprite-48.png" alt="Strava" class="svelte-1aclfu1">
</a>`;
});
const StravaGoalStats_svelte_svelte_type_style_lang = "";
const css = {
  code: ".red.svelte-1f6wf23{color:red}.green.svelte-1f6wf23{color:lime}.big-score.svelte-1f6wf23{font-size:3em;font-weight:bold;color:var(--highlight)}.percentage.svelte-1f6wf23{display:flex;gap:0.5em}.running-header-container.svelte-1f6wf23{margin-bottom:1em;display:grid;grid-template-columns:auto 1fr}.score-badge-container.svelte-1f6wf23{display:flex;justify-content:center;align-items:center;margin:0.2em 0}.badge.svelte-1f6wf23{margin-left:auto}",
  map: null
};
const StravaGoalStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let onTrack;
  let goalComplete;
  let { target } = $$props;
  let { current } = $$props;
  let { goalYear } = $$props;
  let { goal } = $$props;
  let { lastUpdated } = $$props;
  const percentage = current / target * 100;
  const schedule = percentage - dayOfYear(/* @__PURE__ */ new Date()) / 365 * 100;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.goalYear === void 0 && $$bindings.goalYear && goalYear !== void 0)
    $$bindings.goalYear(goalYear);
  if ($$props.goal === void 0 && $$bindings.goal && goal !== void 0)
    $$bindings.goal(goal);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  $$result.css.add(css);
  onTrack = schedule >= 0;
  goalComplete = current >= target;
  return `<div class="running-header-container svelte-1f6wf23"><div><div>${escape(goalYear)} Goal: ${escape(goal)}</div>
        <div class="score-badge-container svelte-1f6wf23"><div class="big-score svelte-1f6wf23">${escape(current)}m</div>
            <div class="badge svelte-1f6wf23">${validate_component(StravaBadge, "StravaBadge").$$render($$result, {}, {}, {})}</div></div>
        <div class="${["percentage svelte-1f6wf23", goalComplete ? "green" : ""].join(" ").trim()}">${escape(percentage.toFixed(0))}%
            ${!goalComplete ? `<div class="${["red svelte-1f6wf23", onTrack ? "green" : ""].join(" ").trim()}">(${escape(onTrack ? "+" : "-")}${escape(schedule.toFixed(1))}% ${escape(onTrack ? "ahead" : "behind")})
                </div>` : ``}</div>
        <div>last updated: ${escape(formatDate(lastUpdated))}</div></div>
    <div></div>
</div>`;
});
export {
  PUBLIC_STRAVA_GOAL as P,
  StravaGoalStats as S,
  PUBLIC_STRAVA_GOAL_YEAR as a,
  PUBLIC_STRAVA_LAST_UPDATED as b,
  PUBLIC_STRAVA_CURRENT as c,
  PUBLIC_STRAVA_TARGET as d
};
