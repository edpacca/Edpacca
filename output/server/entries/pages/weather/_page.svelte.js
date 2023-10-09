import { c as create_ssr_component, b as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "../../../chunks/index3.js";
const Compass_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".needle.svelte-ey1dxl{transform-box:fill-box;transform-origin:center;transform:rotate(var(--angle));animation:svelte-ey1dxl-sway 4s cubic-bezier(.68,.3,.59,.88) infinite alternate}@keyframes svelte-ey1dxl-sway{from{transform:rotate(calc(var(--angle) + 4deg))}to{transform:rotate(calc(var(--angle) - 4deg))}}",
  map: null
};
const Compass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { angle } = $$props;
  if ($$props.angle === void 0 && $$bindings.angle && angle !== void 0)
    $$bindings.angle(angle);
  $$result.css.add(css$2);
  return `<svg width="100%" height="100%" viewBox="0 0 149.225 149.225"><defs><linearGradient id="b"><stop style="stop-color:#a6a9a6;stop-opacity:1" offset="0"></stop><stop style="stop-color:#d2d1d1;stop-opacity:1" offset="1"></stop></linearGradient><linearGradient id="a"><stop style="stop-color:maroon;stop-opacity:1" offset="0"></stop><stop style="stop-color:red;stop-opacity:1" offset="1"></stop></linearGradient><linearGradient id="d"><stop style="stop-color:#a6a9a6;stop-opacity:1" offset="0"></stop><stop offset=".572" style="stop-color:#6f716f;stop-opacity:1"></stop><stop style="stop-color:#000;stop-opacity:1" offset="1"></stop></linearGradient><linearGradient id="c"><stop style="stop-color:#ffece5;stop-opacity:1" offset="0"></stop><stop offset=".273" style="stop-color:#fff4e3;stop-opacity:1"></stop><stop style="stop-color:#ffba64;stop-opacity:1" offset="1"></stop></linearGradient><linearGradient id="e"><stop style="stop-color:#b09a6c;stop-opacity:1" offset="0"></stop><stop style="stop-color:#331b00;stop-opacity:1" offset="1"></stop></linearGradient><linearGradient xlink:href="#a" id="i" x1="20.225" y1="141.804" x2="20.064" y2="90.399" gradientUnits="userSpaceOnUse"></linearGradient><linearGradient xlink:href="#b" id="j" x1="19.658" y1="146.871" x2="20.333" y2="203.55" gradientUnits="userSpaceOnUse"></linearGradient><radialGradient xlink:href="#c" id="g" cx="121.605" cy="120.905" fx="121.605" fy="120.905" r="74.612" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.88896 0 0 .88896 -3.102 41.02)"></radialGradient><radialGradient xlink:href="#d" id="k" cx="105.438" cy="147.73" fx="105.438" fy="147.73" r="8.152" gradientUnits="userSpaceOnUse"></radialGradient><radialGradient xlink:href="#e" id="f" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.00947 .44093 -.65398 1.49723 78.58 -75.515)" cx="66.9" cy="155.012" fx="66.9" fy="155.012" r="74.612"></radialGradient><clipPath clipPathUnits="userSpaceOnUse" id="h"><path style="opacity:1;vector-effect:none;fill:#e5e5cf;fill-opacity:1;stroke:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M102.632 76.082A62.731 62.732 0 0 0 39.9 138.814a62.731 62.732 0 0 0 62.732 62.731 62.731 62.732 0 0 0 62.73-62.731 62.731 62.732 0 0 0-62.73-62.732Zm0 12.596a50.136 50.136 0 0 1 50.135 50.136 50.136 50.136 0 0 1-50.135 50.135 50.136 50.136 0 0 1-50.136-50.135 50.136 50.136 0 0 1 50.136-50.136Z"></path></clipPath></defs><g transform="translate(-30.388 -73.888)"><circle style="opacity:.99;vector-effect:none;fill:url(#f);fill-opacity:1;stroke:url(#radialGradient887);stroke-width:13.75800037;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" cx="105.001" cy="148.5" r="74.613"></circle><circle r="60.212" cy="148.5" cx="105" style="opacity:1;vector-effect:none;fill:url(#g);fill-opacity:1;stroke:url(#radialGradient887);stroke-width:13.75800037;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"></circle><g clip-path="url(#h)" style="stroke-width:1.03084838" transform="translate(5.44 13.84) scale(.97007)"><path style="opacity:1;vector-effect:none;fill:gray;fill-opacity:.99215686;stroke:#000;stroke-width:3.76388502;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M102.632 77.964v121.7m60.849-60.85H41.782m103.877-43.027L59.604 181.84m86.055 0L59.604 95.788"></path><path style="opacity:1;vector-effect:none;fill:gray;fill-opacity:.99215686;stroke:#000;stroke-width:.27274534;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M133.056 191.51 72.206 86.117M118.38 197.59 86.882 80.038m0 117.552 31.499-117.552M72.207 191.51l60.85-105.394m-83.123 83.122 105.395-60.85M43.855 154.563l117.553-31.498m-117.553 0 117.553 31.498M49.934 108.389l105.395 60.85"></path></g><g style="font-style:normal;font-weight:400;font-size:27.17746544px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458335"><path d="m96.624 117.356 1.534-.398q.241-.06.398-.254.17-.205.17-.459v-13.31q0-.279-.17-.46-.157-.193-.398-.254l-1.655-.374v-.568h4.058l7.985 11.475 1.135 1.655v-11.45q0-.279-.17-.46-.156-.193-.398-.253l-1.534-.399v-.568h5.255v.568l-1.534.399q-.242.06-.411.253-.17.194-.17.46v12.199l-.362 2.887h-.676l-8.648-12.417-1.269-1.848v12.465q0 .278.157.471.17.181.41.242l1.535.398v.568h-5.242z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:'Sitka Banner';-inkscape-font-specification:'Sitka Banner';stroke-width:.26458335" aria-label="N"></path></g><g style="font-style:normal;font-weight:400;font-size:27.17746544px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458338"><path d="M-111.953-182.798h.64l.954 2.404q.06.145.23.338.18.194.314.278.435.278.942.508.507.229 1.015.398.507.157.966.254.459.084.81.084.76 0 1.376-.217.628-.217 1.063-.628.447-.423.677-1.027.241-.616.241-1.401 0-1.111-.604-1.812-.604-.712-1.63-1.147-.46-.194-.906-.314-.447-.133-.906-.254l-.906-.242q-.447-.132-.894-.314-1.353-.543-2.102-1.558-.737-1.014-.737-2.464 0-1.027.399-1.92.399-.906 1.1-1.57.712-.677 1.678-1.052.966-.386 2.09-.386.616 0 1.22.072.604.06 1.183.17.58.108 1.124.265.543.145 1.05.314v3.926h-.64l-.833-2.235q-.06-.18-.23-.326-.156-.145-.29-.241-.29-.218-.676-.375-.386-.157-.797-.266-.399-.108-.785-.157-.387-.06-.664-.06-.713 0-1.28.205-.556.194-.943.544-.386.35-.604.845-.205.496-.205 1.075 0 .508.096.99.097.484.35.907.254.423.69.785.446.35 1.122.592.435.157.858.278l.87.241q.435.121.882.266.459.145.954.35.555.23 1.087.556.543.314.966.785.423.471.677 1.123.265.653.265 1.546 0 .955-.35 1.897-.338.93-1.087 1.667-.737.737-1.896 1.196-1.16.459-2.779.459-.531 0-1.123-.097-.58-.085-1.208-.23-.616-.145-1.256-.338-.64-.193-1.268-.398z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:'Sitka Banner';-inkscape-font-specification:'Sitka Banner';stroke-width:.26458338" transform="scale(-1)" aria-label="S"></path></g><g style="font-style:normal;font-weight:400;font-size:27.17746544px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458341"><path d="M-156.92 61.122q-.073-.241-.278-.434-.193-.194-.435-.266l-.966-.29v-.568h5.762v.568l-2.078.399 3.092 10.279.677 2.234 3.26-10.496 1.257-2.984h.737l3.382 11.077.76 2.5 3.95-12.562-2.053-.447v-.568h4.687v.568l-.966.29q-.242.072-.447.29-.194.217-.278.459l-3.974 12.224-1.244 2.983h-.785l-3.648-11.789-.471-1.606-3.262 10.412-1.256 2.983h-.821z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:'Sitka Banner';-inkscape-font-specification:'Sitka Banner';stroke-width:.26458341" transform="rotate(-90)" aria-label="W"></path></g><g style="font-style:normal;font-weight:400;font-size:27.17746544px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458338"><path d="m142.225-135.83 1.534-.326q.241-.06.398-.253.17-.194.17-.46V-150.3q0-.278-.17-.471-.157-.194-.398-.254l-1.534-.314v-.568h12.127v3.902h-.677l-.857-2.573q-.06-.181-.17-.302-.108-.12-.325-.12H146.5v6.606h3.817q.241 0 .35-.108.109-.109.169-.278l.688-1.981h.592v5.665h-.592l-.688-1.957q-.06-.193-.17-.302-.108-.12-.35-.12h-3.816v7.295h6.86q.218 0 .327-.109.108-.12.169-.314l.809-2.91h.676v4.251h-13.117Z" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:'Sitka Banner';-inkscape-font-specification:'Sitka Banner';stroke-width:.26458338" transform="rotate(90)" aria-label="E"></path></g><g class="needle svelte-ey1dxl"${add_attribute("style", `--angle: ${angle}deg`, 0)}><path style="opacity:1;vector-effect:none;fill:url(#i);fill-opacity:1;stroke:none;stroke-width:6.96500063;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M14.366 144.999h11.935l-5.968-58.551Z" transform="translate(84.667 3.024)"></path><path d="M26.3 144.999H14.367l5.967 58.551z" style="opacity:1;vector-effect:none;fill:url(#j);fill-opacity:1;stroke:none;stroke-width:6.96500063;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" transform="translate(84.667 3.024)"></path><circle style="opacity:1;vector-effect:none;fill:url(#k);fill-opacity:1;stroke:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" cx="105.438" cy="147.73" r="8.152"></circle></g></g></svg>`;
});
function timeNoun(time) {
  const hour = time.getHours();
  switch (hour) {
    case 6:
      return "dawn";
    case 7:
      return "sunrise";
    case 8:
      return "morning";
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return "day";
    case 19:
      return "evening";
    case 20:
      return "sunset";
    case 21:
      return "dusk";
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "night";
    default:
      return "day";
  }
}
const Scene_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "canvas.svelte-koy5o4{margin:var(--margin);width:100%;height:100%}.black.svelte-koy5o4{background-color:black}.night.svelte-koy5o4{background:var(--night)}.dawn.svelte-koy5o4{background:linear-gradient(\n            var(--night),\n            var(--dawn-dusk)\n        )}.sunrise.svelte-koy5o4{background:linear-gradient(\n            var(--dawn-dusk)\n            var(--sunrise-sunset),\n        )}.morning.svelte-koy5o4{background:linear-gradient(\n            var(--morning),\n            var(--day)\n        )}.day.svelte-koy5o4{background:var(--day)}.evening.svelte-koy5o4{background:linear-gradient(\n            var(--day),\n            var(--dawn-dusk)\n        )}.sunset.svelte-koy5o4{background:linear-gradient(\n            var(--dawn-dusk),\n            var(--sunrise-sunset)\n        )}.dusk.svelte-koy5o4{background:linear-gradient(\n            var(--night),\n            var(--dawn-dusk)\n        )}",
  map: null
};
const Scene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { time } = $$props;
  const backgroundStyle = timeNoun(time);
  let canvas;
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css$1);
  return `
<canvas class="${escape(null_to_empty(backgroundStyle), true) + " svelte-koy5o4"}"${add_attribute("this", canvas, 0)}></canvas>

${$$result.head += `<!-- HEAD_svelte-19yb04d_START --><style>:root {
            --night: rgb(50, 30, 125);
            --dawn-dusk: rgb(255, 150, 150);
            --sunrise-sunset: rgb(255, 150, 40);
            --morning: rgb(160, 160, 160);
            --day: rgb(0, 170, 255);
        }
    </style><!-- HEAD_svelte-19yb04d_END -->`, ""}`;
});
function getWeatherFromCode(code) {
  switch (code) {
    case 0:
      return "Clear";
    case 1 | 2:
      return "Cloudy";
    case 3:
      return "Overcast";
    case 45 | 48:
      return "Fog";
    case 51 | 53 | 55 | 56 | 57:
      return "Drizzle";
    case 61 | 63 | 65 | 66 | 67 | 80 | 81 | 82:
      return "Rain";
    case 71 | 73 | 75 | 77 | 85 | 86:
      return "Snow";
    case 95 | 96 | 99:
      return "Thunder";
    default:
      return "Cloudy";
  }
}
function getDirectionFromAngle(angle) {
  if (angle >= 337.5 || angle < 22.5)
    return "North";
  if (angle >= 22.5 && angle < 67.5)
    return "North East";
  if (angle >= 67.5 && angle < 112.5)
    return "East";
  if (angle >= 112.5 && angle < 157.5)
    return "South East";
  if (angle >= 157.5 && angle < 202.5)
    return "South";
  if (angle >= 202.5 && angle < 247.5)
    return "South West";
  if (angle >= 247.5 && angle < 292.5)
    return "West";
  if (angle >= 292.5 && angle < 337.5)
    return "North West";
  return "North";
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".weather-text.svelte-c6eb9b{display:grid;grid-template-columns:auto 1fr;font-size:1.3em;column-gap:0.5em;position:absolute;top:80px;left:var(--margin);background-color:var(--black-50);padding:0.4em;border-radius:6px}.key.svelte-c6eb9b{text-align:right}.val.svelte-c6eb9b{font-weight:bold}.compass.svelte-c6eb9b{width:8rem;position:absolute;top:80px;right:var(--margin)}.scene-container.svelte-c6eb9b{display:flex;justify-content:center;align-items:center;width:100%;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const weather = getWeatherFromCode(data.weathercode);
  const windDirection = getDirectionFromAngle(data.winddirection);
  const time = new Date(data.time);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="weather-text svelte-c6eb9b"><div class="key svelte-c6eb9b">Time:</div>
	<div class="val svelte-c6eb9b">${escape(time.toLocaleTimeString())}</div>
	<div class="key svelte-c6eb9b">Temperature:</div>
	<div class="val svelte-c6eb9b">${escape(data.temperature)} °C</div>
	<div class="key svelte-c6eb9b">Weather:</div>
	<div class="val svelte-c6eb9b">${escape(weather)}</div>
	<div class="key svelte-c6eb9b">Wind speed:</div>
	<div class="val svelte-c6eb9b">${escape(data.windspeed)} km/h</div>
	<div class="key svelte-c6eb9b">Wind direction:</div>
	<div class="val svelte-c6eb9b">${escape(windDirection)}</div></div>

<div class="scene-container svelte-c6eb9b">${validate_component(Scene, "Scene").$$render($$result, { time }, {}, {})}</div>

<div class="compass svelte-c6eb9b">${validate_component(Compass, "Compass").$$render($$result, { angle: data.winddirection }, {}, {})}
</div>`;
});
export {
  Page as default
};
