import { writable, type Writable } from "svelte/store";
import { getPostPreviewsByDate } from "./lib/ts/posts";

const posts = getPostPreviewsByDate("static/posts/");
export const postAttributes: Writable<PostAttributes[]> = writable(posts);
export const isSidebarVisible: Writable<boolean> = writable(true);
