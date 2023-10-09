import { e as error } from "../../../../chunks/index.js";
import { g as getProjectData } from "../../../../chunks/projectData.js";
import { E as EXTERNAL_CODE_LANGS, g as getLangShortName, S as STATIC_LANG_DATA } from "../../../../chunks/codeLangData.js";
import { D as DEV } from "../../../../chunks/prod-ssr.js";
const dev = DEV;
async function ghGet(url, token) {
  return await fetch(
    url,
    {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  );
}
async function extractLanguageData(data, token) {
  try {
    const urls = data.flatMap((repo) => repo.languages_url);
    const collated = [];
    await Promise.all(urls.map(async (url) => {
      const response = await ghGet(url, token);
      const data2 = await response.json();
      if (data2) {
        collated.push(data2);
      }
    }));
    return parseLanguageObject(collated);
  } catch (e) {
    throw error(500, "Error parsing coding language data from github :(");
  }
}
async function getGhLanguageData(url, token) {
  try {
    const response = await ghGet(url, token);
    const data = await response.json();
    const languages = await extractLanguageData(data, token);
    return languages;
  } catch (e) {
    throw error(500, "Error retrieving data from github");
  }
}
function parseLanguageObject(data) {
  let total = 0;
  const parsed = {};
  for (const languages of data) {
    for (const language of Object.keys(languages)) {
      const lang = getLangShortName(language);
      if (parsed[lang]) {
        parsed[lang] += 1;
      } else {
        parsed[lang] = 1;
      }
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
const GH_URL = "https://dummy.com";
const GH_REPO_TOKEN = "123ABC456";
const load = async ({ fetch: fetch2, params }) => {
  try {
    const response = await fetch2("/api/posts");
    let posts = await response.json();
    let ghData;
    let stravaData;
    try {
      if (params.projectId === "programming") {
        if (dev)
          ;
        else {
          ghData = await getGhLanguageData(`${GH_URL}/repos`, GH_REPO_TOKEN);
        }
      }
    } catch (e) {
      console.error(e);
    }
    posts = posts.filter((p) => p.projectId === params.projectId);
    const project = getProjectData(params.projectId);
    return {
      posts,
      project,
      ghData
    };
  } catch (e) {
    throw error(404, `Hmmm couldn't find ${params.projectId}`);
  }
};
export {
  load
};
