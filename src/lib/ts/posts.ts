import { convertToPostPreview, importFiles } from "./markdown";

export function getPostPreviewsByDate(path: string) {
    let postFiles = importFiles(path);
    let posts = postFiles
        .map(file => convertToPostPreview(file))
        .sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
}