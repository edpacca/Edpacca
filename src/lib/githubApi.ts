import { error } from '@sveltejs/kit';
import { EXTERNAL_CODE_LANGS, getLangShortName } from './data/codeLangData';

export async function ghGet(url: string, token: string) {
	return await fetch(url, {
		method: 'GET',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
}

async function extractLanguageData(data: JSONArray, token: string) {
	try {
		const urls: string[] = data.flatMap((repo) => repo.languages_url);
		const collated: Record<string, number>[] = [];
		await Promise.all(
			urls.map(async (url: string) => {
				const response = await ghGet(url, token);
				const data = (await response.json()) as Record<string, number>;
				if (data) {
					collated.push(data);
				}
			})
		);
		return parseLanguageObject(collated);
	} catch {
		error(500, 'Error parsing coding language data from github');
	}
}

export async function getGhLanguageData(url: string, token: string) {
	try {
		const response = await ghGet(url, token);
		const data = (await response.json()) as JSONArray;
		const languages = await extractLanguageData(data, token);
		return languages;
	} catch {
		error(500, 'Error retrieving data from github');
	}
}

export function parseLanguageObject(data: Record<string, number>[]): Record<string, number> {
	let total = 0;
	const parsed: Record<string, number> = {};
	for (const languages of data) {
		for (const language of Object.keys(languages)) {
			const lang = getLangShortName(language);
			if (parsed[lang]) {
				// use proportional lines of code intead
				// parsed[lang] += parsed[key];
				parsed[lang] += 1;
			} else {
				// use proportional lines of code intead
				// parsed[lang] = parsed[key];
				parsed[lang] = 1;
			}
			// total += parsed[key];
			total += 1;
		}
	}

	for (const language of Object.keys(EXTERNAL_CODE_LANGS)) {
		const lang = getLangShortName(language);
		if (parsed[lang]) {
			parsed[lang] += EXTERNAL_CODE_LANGS[language];
		} else {
			parsed[lang] = EXTERNAL_CODE_LANGS[language];
		}
		total += EXTERNAL_CODE_LANGS[language];
	}

	for (const language of Object.keys(parsed)) {
		parsed[language] = parsed[language] / total;
	}
	return parsed;
}
