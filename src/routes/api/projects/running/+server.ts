import { json } from '@sveltejs/kit'

async function getStravaData() {
    

}

export async function GET() {
    const posts = await getStravaData();
    return json(posts);
}