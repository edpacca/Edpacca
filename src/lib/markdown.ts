import fs from "fs";
import * as glob from "glob";
import fm from "front-matter";
import remark from "remark";
import html from "remark-html";
import { error } from "@sveltejs/kit";

export function importFiles(dirPath: string) {
    //https://joyofcode.xyz/sveltekit-markdown-blog
    // use this instead
    const filenames = glob.sync(`${dirPath}*.md`);
    return filenames.map(path => convertMarkdown(path))
}

export function convertMarkdown(filePath: string) {
    const file = fs.readFileSync(filePath, "utf8");
    const { attributes, body } = fm(file);
    const result = remark().use(html).processSync(body).contents as string;
    const parsed = parseImages(result);
    return {  path: filePath, attributes, html: parsed }
}

export function convertToPostPreview(object: any): PostAttributes {
    const regex = /(?<=static)(.*)[^.md]/g;
    try {
        const url = object.path.match(regex);
        return { 
            url, 
            date: new Date(object.attributes.date),
            ...object.attributes
        };
     } catch(e) {
        console.log(e);
        throw error(404, "Errk problem")
     }
}

function parseImages(contents: string): string {
    const imageRegex = /<p>\!\(.*\)(.*)\[(.*)\]<\/p>/g;
    const pElements = contents.match(imageRegex);
    const imgElements: string[] = [];

    if (pElements) {
        pElements.forEach(image => {
            imgElements.push(parseImageElementP(image));
        });
    
        let parsed = contents;
    
        imgElements.forEach((imgElement, i) => {
            parsed = parsed.replace(pElements[i], imgElement);
        });

        return parsed;
    }

    return contents;
}

function parseImageElementP(pElement: string): string {
    const altRegex = /!\(.*\)/g;
    const pathRegex = /\[(.*)\]/g;
    const classRegex = /#(.*)#/g
    const alt = parseBlock(altRegex, pElement, [2, -1]);
    const cssClass = parseBlock(classRegex, pElement, [1, -1]);
    const path = parseBlock(pathRegex, pElement, [2, -2]);
    const src = path.includes("http") ? path : `/images/${path}`
    return `<div class="post-image-container ${cssClass}-container"><img class="post-image ${cssClass}" alt=${alt} src="${src}"/></div>`
}

function parseBlock(regex: RegExp, input: string, slice: [number, number]) {
    const block = input.match(regex);
    if (block && block.length > 0){ 
        return block[0].slice(slice[0], slice[1]);
    } else {
        return ""
    }
}