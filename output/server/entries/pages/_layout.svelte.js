import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, n as null_to_empty, b as add_attribute, d as each } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { F as FaIcon } from "../../chunks/FaIcon.js";
import { w as writable } from "../../chunks/index2.js";
const BurgerMenu_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "button.svelte-xh49ft{background:none;border-radius:var(--border-radius);border:1px solid var(--primary);height:2em;width:2em;color:var(--primary);position:absolute}button.svelte-xh49ft:hover{background-color:var(--primary-50)}.burger-menu.svelte-xh49ft{position:absolute;top:2em}",
  map: null
};
const BurgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$7);
  return `<button class="svelte-xh49ft">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: "bars" }, {}, {})}</button>
${isOpen ? `<div class="burger-menu svelte-xh49ft">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const defaultDarkTheme = true;
const defaultColourTheme = "gold";
const isUsingDarkTheme = writable(defaultDarkTheme);
const currentColourTheme = writable(defaultColourTheme);
isUsingDarkTheme.subscribe((value) => {
});
currentColourTheme.subscribe((theme) => {
});
const DarkThemeToggle_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "button.svelte-12oy1fn{height:2em;width:2em;border-radius:100%;border:none;transition:var(--transition-time)}.dark.svelte-12oy1fn:hover{color:var(--highlight)}.light.svelte-12oy1fn:hover{background:var(--highlight)}.dark.svelte-12oy1fn{background:var(--black);color:var(--white)}.light.svelte-12oy1fn{background:var(--white);color:var(--black)}",
  map: null
};
const DarkThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isUsingDarkTheme, $$unsubscribe_isUsingDarkTheme;
  $$unsubscribe_isUsingDarkTheme = subscribe(isUsingDarkTheme, (value) => $isUsingDarkTheme = value);
  let { callback } = $$props;
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  $$result.css.add(css$6);
  $$unsubscribe_isUsingDarkTheme();
  return `<button class="${escape(null_to_empty($isUsingDarkTheme ? "dark" : " light"), true) + " svelte-12oy1fn"}">${validate_component(FaIcon, "FaIcon").$$render($$result, { icon: $isUsingDarkTheme ? "moon" : "sun" }, {}, {})}
</button>`;
});
const Tooltip_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".tooltip.svelte-12125id{position:fixed;z-index:50;background-color:var(--secondary-50);color:var(--primary);padding:0.2rem;margin:0.2rem 0;border-radius:10%}",
  map: null
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { isActive = true } = $$props;
  let { isHovered = false } = $$props;
  let x;
  let y;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isHovered === void 0 && $$bindings.isHovered && isHovered !== void 0)
    $$bindings.isHovered(isHovered);
  $$result.css.add(css$5);
  return `<div>${slots.default ? slots.default({}) : ``}</div>

${isHovered && isActive ? `<div style="${"top: " + escape(y, true) + "px; left: " + escape(x, true) + "px;"}" class="tooltip svelte-12125id">${escape(text)}</div>` : ``}`;
});
const ColourThemeSelector_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".theme-selector.svelte-g5xiri.svelte-g5xiri{display:flex;align-items:center}button.svelte-g5xiri.svelte-g5xiri{height:2em;width:2em;border-radius:100%;border:none;transition:var(--transition-time)}button.svelte-g5xiri.svelte-g5xiri:hover{opacity:0.5}ul.svelte-g5xiri.svelte-g5xiri{position:relative;padding:0;margin:0;margin-left:0.5em;display:flex;justify-content:center;align-items:center;list-style:none}li.svelte-g5xiri button.svelte-g5xiri{opacity:0.5}li.svelte-g5xiri button.svelte-g5xiri:hover{opacity:1}",
  map: null
};
const ColourThemeSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let themeType;
  let filteredThemes;
  let $currentColourTheme, $$unsubscribe_currentColourTheme;
  let $isUsingDarkTheme, $$unsubscribe_isUsingDarkTheme;
  $$unsubscribe_currentColourTheme = subscribe(currentColourTheme, (value) => $currentColourTheme = value);
  $$unsubscribe_isUsingDarkTheme = subscribe(isUsingDarkTheme, (value) => $isUsingDarkTheme = value);
  let isMenuOpen = false;
  let { callback } = $$props;
  let isHovered = false;
  const themes = ["gold", "teal", "sky", "magenta"];
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    themeType = $isUsingDarkTheme ? "bright" : "dark";
    filteredThemes = themes.filter((th) => th !== $currentColourTheme);
    {
      if (isHovered) {
        isMenuOpen = true;
      }
    }
    $$rendered = `<div class="theme-selector svelte-g5xiri">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      { text: "choose theme", isHovered },
      {
        isHovered: ($$value) => {
          isHovered = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<button${add_attribute("style", `background-color: var(--${$currentColourTheme}-${themeType})`, 0)} class="svelte-g5xiri"></button>`;
        }
      }
    )}
    ${isMenuOpen ? `<ul class="svelte-g5xiri">${each(filteredThemes, (theme) => {
      return `<li class="svelte-g5xiri"><button${add_attribute("style", `background-color: var(--${theme}-${themeType})`, 0)} class="svelte-g5xiri"></button>
                </li>`;
    })}</ul>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_currentColourTheme();
  $$unsubscribe_isUsingDarkTheme();
  return $$rendered;
});
const title = "Edpacca";
const IconLink_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-oeu7yv{display:flex;flex-direction:column;justify-content:center;align-items:center}svg.svelte-oeu7yv{height:2rem;transition:var(--transition-time);fill:var(--primary)}svg.svelte-oeu7yv:hover{fill:var(--highlight)}",
  map: null
};
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { link } = $$props;
  let { text } = $$props;
  const iconPath = `/icons/icons.svg#${icon}`;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `${validate_component(Tooltip, "Tooltip").$$render($$result, { text }, {}, {
    default: () => {
      return `<a${add_attribute("href", link, 0)} target="_blank" class="svelte-oeu7yv">
        <svg class="${escape(null_to_empty($$props.class), true) + " svelte-oeu7yv"}"${add_attribute("viewBox", "0 0 100 100", 0)}><use${add_attribute("href", iconPath, 0)}></use></svg></a>`;
    }
  })}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-dznba0{margin:5rem 0;display:flex;justify-content:center}ul.svelte-dznba0{display:flex;flex-direction:row;column-gap:1.2rem;list-style:none;padding:0}li.svelte-dznba0{list-style-type:none}.copyright.svelte-dznba0{font-weight:lighter;text-align:center}",
  map: null
};
const githubLink = "https://github.com/Edpacca";
const linkedinLink = "https://www.linkedin.com/in/edward-pace-ab88a971/";
const instagramLink = "https://www.instagram.com/_edpac_/";
const researchgateLink = "https://www.researchgate.net/profile/Edward-Pace-2";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-dznba0"><div><ul class="svelte-dznba0"><li class="svelte-dznba0">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      icon: "github",
      link: githubLink,
      text: "Github"
    },
    {},
    {}
  )}</li>
            <li class="svelte-dznba0">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      icon: "linkedin",
      link: linkedinLink,
      text: "LinkedIn"
    },
    {},
    {}
  )}</li>
            <li class="svelte-dznba0">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      icon: "instagram",
      link: instagramLink,
      text: "Instagram"
    },
    {},
    {}
  )}</li>
            <li class="svelte-dznba0">${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      icon: "research-gate",
      link: researchgateLink,
      text: "Research-gate"
    },
    {},
    {}
  )}</li></ul>
        <div class="copyright svelte-dznba0">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</div></div>
</footer>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1c6g8yw.svelte-1c6g8yw{display:flex;justify-content:space-between}nav.svelte-1c6g8yw.svelte-1c6g8yw{display:flex;justify-content:center;margin:auto}ul.svelte-1c6g8yw.svelte-1c6g8yw{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none}li.svelte-1c6g8yw.svelte-1c6g8yw{position:relative;height:100%;list-style-type:none}li[aria-current='page'].svelte-1c6g8yw.svelte-1c6g8yw::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--highlight)}li[aria-current='page'].svelte-1c6g8yw a.svelte-1c6g8yw{color:var(--highlight)}nav.svelte-1c6g8yw a.svelte-1c6g8yw{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--primary);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1c6g8yw.svelte-1c6g8yw:hover{color:var(--highlight)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPostPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  isPostPage = !$page.url.pathname.startsWith("/weather") && !$page.url.pathname.startsWith("/projects") && $page.url.pathname !== "/";
  $$unsubscribe_page();
  return `<header class="svelte-1c6g8yw"><nav class="svelte-1c6g8yw"><ul class="svelte-1c6g8yw"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1c6g8yw"><a href="/" class="svelte-1c6g8yw">Home</a></li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/projects") || isPostPage ? "page" : void 0,
    0
  )} class="svelte-1c6g8yw"><a href="/projects" class="svelte-1c6g8yw">Projects</a></li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/weather") ? "page" : void 0,
    0
  )} class="svelte-1c6g8yw"><a href="/weather" class="svelte-1c6g8yw">Weather</a></li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/cv") ? "page" : void 0,
    0
  )} class="svelte-1c6g8yw"><a href="/" class="svelte-1c6g8yw">CV</a></li></ul></nav>
</header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-margin.svelte-zw0drn{margin-top:3em;margin-left:var(--page-margin);margin-right:var(--page-margin);max-width:var(--page-width)}.theme-selectors.svelte-zw0drn{position:absolute;top:0;left:0;margin:var(--margin);display:flex;gap:0.5em}.toggle-container.svelte-zw0drn{gap:0.2em;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isMenuOpen = false;
  const closeMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-k7hayb_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description" content="Eddie Pace's portfolio homepage"><!-- HEAD_svelte-k7hayb_END -->`, ""}

<div class="app"><div class="theme-selectors svelte-zw0drn">${validate_component(BurgerMenu, "BurgerMenu").$$render(
      $$result,
      { isOpen: isMenuOpen },
      {
        isOpen: ($$value) => {
          isMenuOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="toggle-container svelte-zw0drn">${validate_component(DarkThemeToggle, "DarkThemeToggle").$$render($$result, { callback: closeMenu }, {}, {})}
				${validate_component(ColourThemeSelector, "ThemeSelector").$$render($$result, { callback: closeMenu }, {}, {})}</div>`;
        }
      }
    )}</div>
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main><div class="${[
      "svelte-zw0drn",
      !$page.url.pathname.startsWith("/weather") ? "main-margin" : ""
    ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
