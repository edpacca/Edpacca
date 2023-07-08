import * as fs from "fs";
import glob from "glob";
import fm from "front-matter";
import remark from "remark";
import html from "remark-html";
import rehype from "rehype";
import rehypePrism from "@mapbox/rehype-prism";


export function importMarkdown(dirPath: string) {
    const filenames = glob.sync(`${dirPath}*.md`);
    return filenames.map(path => convertMarkdown(path))
}

export function convertMarkdown(filePath: string) {
    const file = fs.readFileSync(filePath, "utf8");
    const { attributes, body } = fm(file);

    let result = remark().use(html).processSync(body).contents;
    result = rehype().use(rehypePrism).processSync(result).contents
    return { path: filePath, attributes, html: result }
}