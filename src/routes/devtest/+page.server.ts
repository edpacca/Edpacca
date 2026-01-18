// import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const location = {
	latitude: 55.953251,
	longitude: -3.188267
};

const url = `${backendUrl}/weather?latitude=${location.latitude}&longitude=${location.longitude}`
// const url = `${backendUrl}/weather/${location.latitude}/${location.longitude}`

export const load = (async () => {
    const result = await fetch(url);
    console.log(result)
    const data = await result.json();
    console.log(data);
    return data;
}) satisfies PageServerLoad;
