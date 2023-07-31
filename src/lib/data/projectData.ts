export function getProjectData(projectId: string): ProjectType | undefined {
    return PROJECTS.find(p => p.id === projectId);
}

export const PROJECTS: ProjectType[] = [
    { 
        name: "Programming",
        id: "programming",
        icon: "code",
        description: "I quit my life as an academic researcher in order to become a programmer."
    },
	{ 
        name: "Miniature Painting",
        id: "minipainting",
        icon: "paint-brush",
        description: "I rekidled an old hobby of mine from when I was around 9-13 years old of painting miniatures. I collected figures from Warhammer 40k (Dark angels), Lord of the Rings (bad guys of course) and Warhammer Fantasy (Ogre Kingdoms"
    },
    { 
        name: "AISIAEC",
        id: "aisiaec",
        icon: "circle",
        description: "When I moved to Edinburgh in 2014 I put out an advert on Gumtree looking for musicians to jam with. All I see is an Empty Circle slowly formed off the back of that advert into a band that we were very proud of. We released 3 EPs between 2016 - 2019 and recorded them all ourselves. I created the artwork of course."
    },
    {
        name: "Music",
        id: "solomusic",
        icon: "music"
    },
	{ 
        name: "Dungeons & Dragons",
        id: "dnd",
        icon: "dice-d20",
    },
	{ 
        name: "Recipes",
        id: "recipes",
        icon: "pepper-hot",
        description: "I started brewing when I moved to Edinburgh aswell, but took a long haiatus until around 2020 when for obvious reasons home hobbies took off again. I brewed mostly IPAs, a few stouts and some other Ales."
    },
	{ 
        name: "Running",
        id: "running",
        icon: "person-running",
    },
	{ 
        name: "Woodwork",
        id: "woodwork",
        icon: "hammer",
    },
]