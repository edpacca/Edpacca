import { j as json } from "../../../../../chunks/index.js";
async function getStravaData() {
}
async function GET() {
  const posts = await getStravaData();
  return json(posts);
}
export {
  GET
};
