import * as server from '../entries/pages/weather/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/weather/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/weather/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.2accb775.js","_app/immutable/chunks/index.bbf2decf.js","_app/immutable/chunks/Artist.d9077a32.js"];
export const stylesheets = ["_app/immutable/assets/7.6f13f36b.css"];
export const fonts = [];
