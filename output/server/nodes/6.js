import * as server from '../entries/pages/projects/_projectId_/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/projects/_projectId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[projectId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.b1bef3ca.js","_app/immutable/chunks/index.bbf2decf.js","_app/immutable/chunks/stores.e2f81b10.js","_app/immutable/chunks/singletons.4ad4ba81.js","_app/immutable/chunks/FaIcon.d9589d73.js","_app/immutable/chunks/utils.cb270ca5.js","_app/immutable/chunks/PostPreview.ce59a655.js","_app/immutable/chunks/projectData.55251be6.js","_app/immutable/chunks/StravaGoalStats.9a361b0f.js","_app/immutable/chunks/Artist.d9077a32.js"];
export const stylesheets = ["_app/immutable/assets/6.ba50882b.css","_app/immutable/assets/PostPreview.c4f5740c.css","_app/immutable/assets/StravaGoalStats.d834e377.css"];
export const fonts = [];
