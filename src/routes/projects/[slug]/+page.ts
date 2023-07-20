import { convertToPostPreview, importFiles } from '$lib/ts/markdown';
import type { PageLoad } from './$types';
import { PROJECTS } from '$lib/data/projectData';

export const load = (({params}) => {
    let postFiles = importFiles("static/posts/");
    let posts = postFiles
        .filter(file => (file.attributes as PostAttributes).projectId === params.slug)
        .map(file => convertToPostPreview(file));

    const project = PROJECTS.find(project => project.id === params.slug);
    return { 
        posts,
        project
     };
}) satisfies PageLoad