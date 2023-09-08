import { error } from '@sveltejs/kit';
import { getProjectData } from '../../../lib/data/projectData.js';
import { getGhLanguageData, parseLanguageObject } from '../../../lib/githubApi.js';
import { GH_URL, GH_REPO_TOKEN } from "$env/static/private"
import { dev } from "$app/environment";
import { STATIC_LANG_DATA } from '../../../lib/data/codeLangData.js';
import type { PageServerLoad } from './$types.js';

/* eslint-disable */
export const load = (async ({ fetch, params }) => {
    try {
        const response = await fetch("/api/posts");
        let posts: Post[] = await response.json();
        let ghData;
        let stravaData;
        try {
            if (params.projectId === "programming") {
                if (dev) {
                    ghData = parseLanguageObject(STATIC_LANG_DATA);
                } else {
                    ghData = await getGhLanguageData(`${GH_URL}/repos`, GH_REPO_TOKEN);
                }
            }
        } catch (e) {
            console.error(e);
        }
        posts = posts.filter(p => p.projectId === params.projectId);
        const project = getProjectData(params.projectId);

        return { 
            posts,
            project,
            ghData
        }
    } catch(e) {
        throw error(404, `Hmmm couldn't find ${params.projectId}`)
    }
}) satisfies PageServerLoad