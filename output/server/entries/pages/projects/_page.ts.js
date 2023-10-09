import { P as PROJECTS } from "../../../chunks/projectData.js";
const load = async ({ fetch }) => {
  const response = await fetch("/api/posts");
  const posts = await response.json();
  return {
    posts,
    projects: PROJECTS
  };
};
export {
  load
};
