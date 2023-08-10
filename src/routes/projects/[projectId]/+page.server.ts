import { error } from '@sveltejs/kit';
import { getProjectData } from '../../../lib/data/projectData.js';
import type { PageServerLoad } from "./$types";
import { extractLanguages } from '../../../lib/ghData.js';
import testData from "./test-data.json"

export const load = (async ({ fetch, params }) => {
    try {
        const response = await fetch("/api/posts");
        let posts: Post[] = await response.json();
        let ghData;
        if (params.projectId === "programming") {
            // const ghResponse = await fetch("https://api.github.com/users/edpacca/repos");
            // ghData = await ghResponse.json();

            const langs = await extractLanguages(JSON.stringify(testData));
        }
        posts = posts.filter(p => p.projectId === params.projectId);
        const project = getProjectData(params.projectId)

        return { 
            posts,
            project,
            ghData
        }
        
    } catch(e) {
        console.log(e);
        throw error(404, `Hmmm couldn't find ${params.projectId}`)
    }
}) satisfies PageServerLoad