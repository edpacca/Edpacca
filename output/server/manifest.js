export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/WQ_main_theme.mp3","compass.svg","drawings/compass-backup.svg","drawings/compass.svg","drawings/skies.svg","favicon.ico","fonts/Inconsolata/Inconsolata-Bold.ttf","fonts/Inconsolata/Inconsolata-Light.ttf","fonts/Inconsolata/Inconsolata-Medium.ttf","fonts/Inconsolata/Inconsolata-Regular.ttf","fonts/JetBrains_Mono/JetBrainsMono-Bold.ttf","fonts/JetBrains_Mono/JetBrainsMono-BoldItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-ExtraBold.ttf","fonts/JetBrains_Mono/JetBrainsMono-ExtraBoldItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-ExtraLight.ttf","fonts/JetBrains_Mono/JetBrainsMono-ExtraLightItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-Italic.ttf","fonts/JetBrains_Mono/JetBrainsMono-Light.ttf","fonts/JetBrains_Mono/JetBrainsMono-LightItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-Medium.ttf","fonts/JetBrains_Mono/JetBrainsMono-MediumItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-Regular.ttf","fonts/JetBrains_Mono/JetBrainsMono-SemiBold.ttf","fonts/JetBrains_Mono/JetBrainsMono-SemiBoldItalic.ttf","fonts/JetBrains_Mono/JetBrainsMono-Thin.ttf","fonts/JetBrains_Mono/JetBrainsMono-ThinItalic.ttf","icons/ep-logo.svg","icons/github.svg","icons/icons.svg","icons/instagram.svg","icons/linkedin.svg","icons/logos.svg","icons/research-gate.svg","images/default-cover.webp","images/dnd-initiative/initiative-icon.svg","images/wapp/wapp-logo.webp","images/warhammer/flying-base/lego-flying-base_0.webp","images/warhammer/flying-base/lego-flying-base_1.webp","images/warhammer/flying-base/lego-flying-base_10.webp","images/warhammer/flying-base/lego-flying-base_11.webp","images/warhammer/flying-base/lego-flying-base_2.webp","images/warhammer/flying-base/lego-flying-base_3.webp","images/warhammer/flying-base/lego-flying-base_4.webp","images/warhammer/flying-base/lego-flying-base_5.webp","images/warhammer/flying-base/lego-flying-base_6.webp","images/warhammer/flying-base/lego-flying-base_7.webp","images/warhammer/flying-base/lego-flying-base_8.webp","images/warhammer/flying-base/lego-flying-base_9.webp","images/wizard-grenade/WG2_UML.webp","images/wizard-grenade/WG_Terrain.webp","images/wizard-grenade/WG_battle.webp","images/wizard-grenade/WG_menu.webp","images/wizard-grenade/book.webp","images/wizard-grenade/book1.webp","images/wizard-grenade/book2.webp","images/wizard-grenade/physics1.webp","images/wizard-grenade/physics2.webp","images/wizard-grenade/potion1.webp","images/wizard-grenade/potion2.webp","images/wizard-grenade/wizard-grenade-cover.webp","images/wizard-grenade-icon.jpg","images/wizard-quest/wizard-quest-icon.webp","images/woodwork/bishop.webp","robots.txt","weather/cloud.svg","weather/moon.png","weather/moon.svg","weather/sun.png","weather/sun.svg","weather/weather.svg"]),
	mimeTypes: {".mp3":"audio/mpeg",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".webp":"image/webp",".jpg":"image/jpeg",".txt":"text/plain",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5be6c70f.js","app":"_app/immutable/entry/app.af073f3c.js","imports":["_app/immutable/entry/start.5be6c70f.js","_app/immutable/chunks/index.bbf2decf.js","_app/immutable/chunks/singletons.4ad4ba81.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.af073f3c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.bbf2decf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts/_server.ts.js')
			},
			{
				id: "/api/projects/running",
				pattern: /^\/api\/projects\/running\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/projects/running/_server.ts.js')
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/[projectId]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"projectId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/weather",
				pattern: /^\/weather\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
