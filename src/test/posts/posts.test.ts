import { test, describe, expect } from "vitest";
import * as fs from "fs";

function testFileExists(filePath: string) {
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error(err.message);
        }
    });
}

describe('markdown contents', () => {
    const posts: Post[] = []
    const paths = import.meta.glob("/src/posts/*.md", { eager: true });
 
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");
        const valid = file &&  
            typeof file === "object" && 
            "metadata" in file && 
            slug;

        if (valid) {
            const metadata = file.metadata as Omit<Post, "slug">;
            const post = { ...metadata, slug } satisfies Post;
            post.published && posts.push(post);
        }
    }
    
    test('cover images are valid', () => {
        posts.forEach(post => {
            if (post.coverImage) {
                const filePath =  `./static/images${post.coverImage}`;
                expect(() => { testFileExists(filePath)}).not.toThrowError();
            }
        })
    });
});