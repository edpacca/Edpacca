import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape, a as subscribe } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { F as FaIcon } from "../../../../chunks/FaIcon.js";
import { L as LANG_LOGO_COLORS } from "../../../../chunks/codeLangData.js";
import { r as randomMinMax, a as randomDirection } from "../../../../chunks/utils.js";
import { P as PostPreview } from "../../../../chunks/PostPreview.js";
import { S as StravaGoalStats, P as PUBLIC_STRAVA_GOAL, a as PUBLIC_STRAVA_GOAL_YEAR, b as PUBLIC_STRAVA_LAST_UPDATED, c as PUBLIC_STRAVA_CURRENT, d as PUBLIC_STRAVA_TARGET } from "../../../../chunks/StravaGoalStats.js";
const Gallery_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".gallery-container.svelte-b1bal3{position:relative;padding:3em;display:flex;justify-content:center;align-items:center}img.svelte-b1bal3{width:auto;height:300px}.previous-button.svelte-b1bal3{margin-right:auto}.next-button.svelte-b1bal3{margin-left:auto}button.svelte-b1bal3{background:none;color:var(--primary);border:none;font-size:4em}button.svelte-b1bal3:hover{color:var(--highlight)}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let src;
  let { imagePaths = [""] } = $$props;
  let currentIndex = 0;
  imagePaths.length;
  if ($$props.imagePaths === void 0 && $$bindings.imagePaths && imagePaths !== void 0)
    $$bindings.imagePaths(imagePaths);
  $$result.css.add(css$5);
  src = `/images/${imagePaths[currentIndex]}`;
  return `<div class="gallery-container svelte-b1bal3"><button class="previous-button svelte-b1bal3">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "caret-left" }, {}, {})}</button>
    <img${add_attribute("src", src, 0)}${add_attribute("alt", "gallery image", 0)} class="svelte-b1bal3">
    <button class="next-button svelte-b1bal3">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "caret-right" }, {}, {})}</button>
</div>`;
});
class Vector2D {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  scale(factor) {
    this.x *= factor;
    this.y *= factor;
  }
  round() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
  }
  ZERO() {
    this.x = 0;
    this.y = 0;
  }
  isZero() {
    return this.x === 0 && this.y === 0;
  }
  attenuate(factor, minMagnitude) {
    const attenuatedX = this.x * factor;
    const attenuatedY = this.y * factor;
    this.x = Math.abs(attenuatedX) < minMagnitude ? 0 : attenuatedX;
    this.y = Math.abs(attenuatedY) < minMagnitude ? 0 : attenuatedY;
  }
  reverse() {
    return new Vector2D(this.x * -1, this.y * -1);
  }
}
function dotProduct(vector1, vector2) {
  return vector1.x * vector2.x + vector1.y * vector2.y;
}
function vectorMagnitude(vector) {
  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}
function reflectionVector(incident, normal) {
  const product = dotProduct(incident, normal);
  const sqrMagnitude = Math.pow(vectorMagnitude(normal), 2);
  const x = incident.x + -2 * normal.x * product / sqrMagnitude;
  const y = incident.y + -2 * normal.y * product / sqrMagnitude;
  return new Vector2D(x, y);
}
function randomVector(min, max) {
  const x = randomMinMax(min, max) * randomDirection();
  const y = randomMinMax(min, max) * randomDirection();
  return new Vector2D(x, y);
}
const ZERO_VECTOR = new Vector2D(0, 0);
function resolveCollisions(potentialRect, originalRect, collisionRects, velocity) {
  const points = [
    new Vector2D(potentialRect.x1, potentialRect.y1),
    new Vector2D(potentialRect.x2, potentialRect.y1),
    new Vector2D(potentialRect.x1, potentialRect.y2),
    new Vector2D(potentialRect.x2, potentialRect.y2)
  ];
  for (const rect of collisionRects) {
    if (!checkSame(originalRect, rect)) {
      for (const point of points) {
        if (isInRect(point, rect)) {
          return {
            response: resolvePointCollision(point, velocity, potentialRect),
            index: collisionRects.indexOf(rect)
          };
        }
      }
    }
  }
  return void 0;
}
function resolveCollision(rect, collidingRect, velocity) {
  const points = [
    new Vector2D(rect.x1, rect.y1),
    new Vector2D(rect.x2, rect.y1),
    new Vector2D(rect.x1, rect.y2),
    new Vector2D(rect.x2, rect.y2)
  ];
  for (const point of points) {
    if (isInRect(point, rect)) {
      return resolvePointCollision(point, velocity, rect);
    }
  }
  return void 0;
}
function isInRect(point, rect) {
  return point.x >= rect.x1 && point.x <= rect.x2 && point.y >= rect.y1 && point.y <= rect.y2;
}
function resolvePointCollision(point, velocity, rect) {
  const rectCentre = getRectCentre(rect);
  const normal = new Vector2D(rectCentre.x - point.x, rectCentre.y - point.y);
  return reflectionVector(velocity, normal);
}
function getRectCentre(rect) {
  const x = rect.x1 + (rect.x2 - rect.x1) / 2;
  const y = rect.y1 + (rect.y2 - rect.y1) / 2;
  return new Vector2D(x, y);
}
function checkSame(r1, r2) {
  return r1.x1 === r2.x1 && r1.x2 === r2.x2 && r1.y1 === r2.y1 && r1.y2 === r2.y2;
}
const DEFAULT_GRAVITY = new Vector2D(0, 1);
const DEFAULT_DAMPING_FACTOR = 0.3;
const DEFAULT_MIN_MAGNITUDE = 4.8;
const DEFAULT_FONT_AREA = 1200;
const DEFAULT_MIN_FONT = 32;
const COLORS = [
  "blue",
  "red",
  "green",
  "purple",
  "orange",
  "magenta",
  "lime"
];
function getRects(wordBlocks) {
  return wordBlocks.map((block) => block.getRect());
}
function getColor(technology) {
  if (LANG_LOGO_COLORS[technology]) {
    return LANG_LOGO_COLORS[technology];
  } else {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  }
}
function getProportionalFontSize(fontArea, value, minFontSize) {
  const result = (fontArea ?? DEFAULT_FONT_AREA) * value;
  return Math.max(result, minFontSize ?? DEFAULT_MIN_FONT);
}
class WordSoup {
  wordBlocks = [];
  ctx;
  canvas;
  counter = 0;
  randomForces = false;
  gravity = DEFAULT_GRAVITY;
  dampingFactor = DEFAULT_DAMPING_FACTOR;
  constructor(canvas, context, words, fontArea, minFontSize) {
    this.canvas = canvas;
    this.ctx = context;
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    Object.keys(words).forEach((word) => {
      this.wordBlocks.push(
        new WordBlock(
          word,
          getProportionalFontSize(fontArea, words[word], minFontSize),
          getColor(word)
        )
      );
    });
    let lastPlacedBlock;
    const nextPosition = new Vector2D(10, 10);
    const maxBlockHeight = Math.max(...this.wordBlocks.map((b) => b.height));
    this.wordBlocks.forEach((block) => {
      if (lastPlacedBlock) {
        nextPosition.x += lastPlacedBlock.width + Math.random() * lastPlacedBlock.width;
        if (nextPosition.x + block.width > canvas.width) {
          nextPosition.x = 10 + Math.random() * 10;
          nextPosition.y += maxBlockHeight * 2 + 10 + Math.random() * maxBlockHeight;
        }
      }
      block.position.x = nextPosition.x;
      block.position.y = nextPosition.y;
      lastPlacedBlock = block;
      block.draw(this.ctx);
    });
  }
  setForces(value, randomForces = false, dampingFactor) {
    this.randomForces = randomForces;
    this.setGravity(value);
    if (dampingFactor) {
      this.dampingFactor = dampingFactor;
    }
  }
  setGravity(value) {
    this.gravity = value;
  }
  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const rects = getRects(this.wordBlocks);
    this.wordBlocks.forEach((block) => {
      const force = this.randomForces ? randomVector(1, 2) : this.gravity;
      this.updateVelocity(block, rects, force);
      block.draw(this.ctx);
    });
    requestAnimationFrame(this.animate);
  };
  updateVelocity(word, collisionRects, force) {
    word.velocity.add(force);
    const potentialPos = new Vector2D(
      word.position.x + word.velocity.x,
      word.position.y + word.velocity.y
    );
    const potentialRect = {
      x1: potentialPos.x,
      x2: potentialPos.x + word.width,
      y1: potentialPos.y,
      y2: potentialPos.y + word.height
    };
    const collision = resolveCollisions(potentialRect, word.getRect(), collisionRects, word.velocity);
    let rectangleCollision = false;
    let boundaryCollision = false;
    if (collision) {
      rectangleCollision = true;
      word.velocity.add(collision.response);
    }
    if (potentialPos.x < 0 || potentialPos.x >= this.canvas.width - word.width || collision && Math.abs(collision.response.x) > 0) {
      word.velocity.x = word.velocity.x * -1;
      boundaryCollision = true;
    }
    if (potentialPos.y < 0 || potentialPos.y >= this.canvas.height - word.height || collision && Math.abs(collision.response.y) > 0) {
      word.velocity.y = word.velocity.y * -1;
      boundaryCollision = true;
    }
    if (boundaryCollision) {
      word.velocity.attenuate(this.dampingFactor, DEFAULT_MIN_MAGNITUDE);
    }
    word.position.add(word.velocity);
    if (rectangleCollision && collision) {
      const response = resolveCollision(word.getRect(), collisionRects[collision.index], word.velocity);
      if (response) {
        word.position.add(response);
      }
    }
    if (word.position.x < 0) {
      word.position.x = 1;
    }
    if (word.position.x >= this.canvas.width - word.width) {
      word.position.x = this.canvas.width - word.width - 1;
    }
    if (word.position.y < 0) {
      word.position.y = 1;
    }
    if (word.position.y >= this.canvas.height - word.height) {
      word.position.y = this.canvas.height - word.height - 1;
    }
  }
}
class WordBlock {
  height;
  width;
  color;
  word;
  charSize;
  velocity;
  position = new Vector2D(0, 0);
  rotationMomentum = 0;
  constructor(word, charSize, color) {
    this.height = charSize + 8;
    this.width = charSize * word.length * 0.6 + 16;
    this.color = color;
    this.word = word;
    this.charSize = charSize;
    this.velocity = new Vector2D(0, 0);
  }
  draw(ctx) {
    this.position.round();
    ctx.beginPath();
    ctx.roundRect(this.position.x, this.position.y, this.width, this.height, 12);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.font = `bold ${this.charSize}px 'Fira Mono'`;
    ctx.fillStyle = "white";
    ctx.fillText(this.word, this.position.x + 4, this.position.y + 8, this.width);
    ctx.fill();
    ctx.closePath();
  }
  setRandomPosition(bounds) {
    this.position.x = Math.floor(Math.random() * (bounds.x - this.width));
    this.position.y = Math.floor(Math.random() * (bounds.y - this.height));
  }
  getRect() {
    return {
      x1: this.position.x,
      x2: this.position.x + this.width,
      y1: this.position.y,
      y2: this.position.y + this.height
    };
  }
}
const ControlBar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".controls.svelte-u99v2u{display:grid;grid-template-columns:repeat(var(--num-buttons), 1fr);justify-content:center;align-items:center;padding:1em;gap:1em}button.svelte-u99v2u{min-width:4em;box-shadow:0 0 5px var(--primary-50)}button.svelte-u99v2u:hover{box-shadow:0 0 10px var(--highlight)}",
  map: null
};
const ControlBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttons } = $$props;
  if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0)
    $$bindings.buttons(buttons);
  $$result.css.add(css$4);
  return `<div class="control-container"><div class="controls svelte-u99v2u"${add_attribute("style", `--num-buttons: ${buttons.length}`, 0)}>${each(buttons, (btn) => {
    return `<button class="button1 svelte-u99v2u">${escape(btn.title)}</button>`;
  })}</div>
</div>`;
});
const TechnologySoup_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'canvas.svelte-1q3nh2c{background-color:none;width:100%;pointer-events:none;border-radius:var(--border-radius);box-shadow:0 0 10px var(--primary-50)}.grav-values-container.svelte-1q3nh2c{position:absolute;top:var(--margin);left:var(--margin)}.main-container.svelte-1q3nh2c{width:100%;position:relative}input[type="range"].svelte-1q3nh2c{-webkit-appearance:none;appearance:none;cursor:pointer;outline:none;cursor:pointer;border-radius:0px;background:none}input.svelte-1q3nh2c{position:absolute}input.vertical.svelte-1q3nh2c{transform:rotate(90deg);transform-origin:0;width:8px;width:calc(100% * 9 / 16);outline:none;cursor:pointer}input.horizontal.svelte-1q3nh2c{width:100%;position:absolute;top:-16px;left:16px}input[type="range"].svelte-1q3nh2c::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:36px;width:36px;background-color:var(--light-grey);border-radius:50%;border:none;transition:.2s ease-in-out}input[type="range"].svelte-1q3nh2c::-moz-range-thumb{height:36px;width:36px;background-color:var(--light-grey);border-radius:50%;border:none;transition:.2s ease-in-out}input[type="range"].svelte-1q3nh2c::-webkit-slider-thumb:hover{background-color:var(--highlight)}input[type="range"].svelte-1q3nh2c::-moz-range-thumb:hover{background-color:var(--highlight)}.text-button-container.svelte-1q3nh2c{display:flex;gap:1em;align-items:center}@media screen and (max-width: 600px){input.vertical.svelte-1q3nh2c{width:calc(100% * 3 / 4);top:-8px}input.horizontal.svelte-1q3nh2c{width:100%;position:absolute;top:-12px;left:8px}input[type="range"].svelte-1q3nh2c::-webkit-slider-thumb{height:24px;width:24px}input[type="range"].svelte-1q3nh2c::-moz-range-thumb{height:24px;width:24px}.text-button-container.svelte-1q3nh2c{display:block}}',
  map: null
};
const TechnologySoup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { technologies } = $$props;
  let canvas;
  let wordSoup;
  let xGravity = 0;
  let yGravity = 0;
  let hasGravity = true;
  const reset = () => {
    let fontArea = void 0;
    let minFontSize = void 0;
    {
      canvas.height = 500;
      canvas.width = canvas.height * (4 / 3);
      fontArea = 500;
      minFontSize = 16;
    }
    const ctx = canvas.getContext("2d");
    wordSoup = new WordSoup(canvas, ctx, technologies, fontArea, minFontSize);
    wordSoup.animate();
  };
  const syncGravity = () => {
    xGravity = wordSoup.gravity.x * 100;
    yGravity = wordSoup.gravity.y * 100;
  };
  const btns = [
    {
      title: "Reset Positions",
      fnc: () => {
        reset();
        if (hasGravity) {
          wordSoup.setGravity(new Vector2D(xGravity / 100, yGravity / 100));
        } else {
          wordSoup.setForces(ZERO_VECTOR, true, 0.1);
        }
      }
    },
    {
      title: "Reset Gravity",
      fnc: () => {
        wordSoup.setForces(new Vector2D(0, 1), false);
        syncGravity();
        hasGravity = true;
      }
    },
    {
      title: "?",
      fnc: () => {
        wordSoup.setForces(ZERO_VECTOR, true, 0.1);
        hasGravity = false;
      }
    }
  ];
  if ($$props.technologies === void 0 && $$bindings.technologies && technologies !== void 0)
    $$bindings.technologies(technologies);
  $$result.css.add(css$3);
  {
    wordSoup?.setGravity(new Vector2D(xGravity / 100, yGravity / 100));
  }
  return `
<div class="main-container svelte-1q3nh2c">${hasGravity ? `<div><div class="grav-values-container svelte-1q3nh2c"><div>gravity X: ${escape(xGravity / 100)}</div>
                <div>gravity y: ${escape(yGravity / 100)}</div></div>
            <input type="range" class="horizontal svelte-1q3nh2c"${add_attribute("min", -100, 0)}${add_attribute("max", 100, 0)}${add_attribute("value", xGravity, 0)}>
            <input type="range" class="vertical svelte-1q3nh2c"${add_attribute("min", -100, 0)}${add_attribute("max", 100, 0)}${add_attribute("value", yGravity, 0)}></div>` : ``}
    <canvas class="svelte-1q3nh2c"${add_attribute("this", canvas, 0)}></canvas></div>
${validate_component(ControlBar, "ControlBar").$$render($$result, { buttons: btns }, {}, {})}

${`<div class="text-button-container svelte-1q3nh2c"><p>I call this the &quot;tech soup&quot; widget...</p>
        <button class="button1">read more
            ${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "arrow-down" }, {}, {})}</button></div>`}`;
});
const WARHAMMER_GALLERY = [
  "/warhammer/flying-base/lego-flying-base_0.webp",
  "/warhammer/flying-base/lego-flying-base_1.webp",
  "/warhammer/flying-base/lego-flying-base_2.webp",
  "/warhammer/flying-base/lego-flying-base_3.webp"
];
const MountainCanvas_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#mountain-canvas-container.svelte-6b33eq{position:relative;width:100%;height:var(--canvas-height)}canvas.svelte-6b33eq{width:100%;position:absolute;top:0;left:0;border-radius:12px}.scene-canvas.svelte-6b33eq{background-color:rgb(38, 42, 71);background:linear-gradient(\n            176deg,\n            rgb(23, 27, 51),\n            rgb(38, 42, 71),\n            rgb(94, 80, 117),\n            rgb(163, 116, 139),\n            rgb(234, 176, 156))}",
  map: null
};
const MountainCanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas1;
  let canvas2;
  let { progress } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  $$result.css.add(css$2);
  return `<div id="mountain-canvas-container" class="svelte-6b33eq"><canvas class="scene-canvas svelte-6b33eq"${add_attribute("this", canvas1, 0)}></canvas>
    <canvas class="animation-canvas svelte-6b33eq"${add_attribute("this", canvas2, 0)}></canvas>
</div>`;
});
const RunningPage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".caption.svelte-3uczo{text-align:center}",
  map: null
};
const RunningPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const current = Number(PUBLIC_STRAVA_CURRENT);
  const target = Number(PUBLIC_STRAVA_TARGET);
  $$result.css.add(css$1);
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
  )}
${validate_component(MountainCanvas, "MountainCanvas").$$render($$result, { progress: current / target }, {}, {})}
<div class="caption svelte-3uczo">Scene rendered with HTML Canvas</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-11e7ao3{color:var(--color-theme-1);text-transform:uppercase;font-weight:bold}.description.svelte-11e7ao3{margin-bottom:2em}section.svelte-11e7ao3{margin-top:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="svelte-11e7ao3">${escape(data.project?.name)}</h1>
<div class="description svelte-11e7ao3">${escape(data.project?.description ?? "")}</div>

${$page.url.pathname.split("/projects/")[1] === "minipainting" ? `${validate_component(Gallery, "Gallery").$$render($$result, { imagePaths: WARHAMMER_GALLERY }, {}, {})}` : `${$page.url.pathname.split("/projects/")[1] === "running" ? `${validate_component(RunningPage, "RunningPage").$$render($$result, {}, {}, {})}` : `${$page.url.pathname.split("/projects/")[1] === "programming" ? `${data.ghData ? `${validate_component(TechnologySoup, "TechnologySoup").$$render($$result, { technologies: data.ghData }, {}, {})}` : ``}` : ``}`}`}
<section class="svelte-11e7ao3"><div class="posts">${each(data.posts, (post) => {
    return `${validate_component(PostPreview, "PostPreview").$$render(
      $$result,
      {
        post,
        hasProjectLink: false,
        hasPostImage: true
      },
      {},
      {}
    )}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
