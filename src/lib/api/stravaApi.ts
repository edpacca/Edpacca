async function stravaGet(url: string, token: string) {
  return await fetch(url , {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }
);
}

export async function getAthleteStats(baseUrl: string, athleteId: string, token: string) {
    const url = `${baseUrl}/${athleteId}/stats`;
    const response = await stravaGet(url, token);
    const data = await response.json() as JSONArray;
    console.log(data);
}
