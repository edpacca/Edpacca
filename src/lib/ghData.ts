export async function extractLanguages(data: string) {
    const parsed = JSON.parse(data) as any[];
    const langUrls = parsed.flatMap(repo => repo.languages_url)
    console.log(langUrls);
    const languages: any[] = [];
    await Promise.all(langUrls.map(async(url) => {
        // const langs = await fetch(url);
        // console.log(langs);
        // languages.push(langs);
    }));

    // console.log(languages);
} 