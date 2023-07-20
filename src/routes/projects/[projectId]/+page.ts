import { error } from '@sveltejs/kit';
import { getProjectData } from '../../../lib/data/projectData.js';

export async function load ({ fetch, params }) {
    try {
        const response = await fetch("/api/posts");
        let posts: Post[] = await response.json();
        posts = posts.filter(p => p.projectId === params.projectId);
        const project = getProjectData(params.projectId)
        
        if (posts.length === 0) {
            throw Error
        }

        return { 
            posts,
            project
        }
    } catch(e) {
        throw error(404, `Hmmm couldn't find ${params.projectId}`)
    }
}