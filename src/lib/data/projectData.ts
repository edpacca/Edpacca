export function getProjectData(projectId: string): ProjectType | undefined {
    return PROJECTS.find(p => p.id === projectId);
}

export const PROJECTS: ProjectType[] = [
    {
        name: "Programming",
        id: "programming",
        icon: "code",
        description: "After falling in love with programming I left behind my life as a high pressure scientist in order to become a software developer. Now I've worked professionally all over the stack, with a number of languages and frameworks, I can safely say that I simply enjoy figuring out problems and finding optimal solutions. My personal projects usually emerge from a need that I have or simply a 'quick experiment' that gets out of hand; a few of my favourites are highlighted here."
    },
	{
        name: "Miniature Painting",
        id: "minipainting",
        icon: "paint-brush",
        description: "After digging out a bunch of old miniatures I had collected when I was ~10 years old I decided to repaint a few of them. I ended up rekindling the hobby of painting minis again, moving on from the challenges I faced as a 10 year old of simply painting everything neatly and slowly falling in love with the idea of 'painting the light', thinking about contrast and tone, and taking a much more artistic approach to painting these little plastic figures. It's also nice to make things with your hands, without a screen. Here I've documented a few of my endeavours for whoever may be curious."
    },
    // {
    //     name: "AISIAEC",
    //     id: "aisiaec",
    //     icon: "music",
    //     description: "When I moved to Edinburgh in 2014 I put out an advert on Gumtree looking for musicians to jam with. All I see is an Empty Circle slowly formed off the back of that advert into a band that we were very proud of. We released 3 EPs between 2016 - 2019 and recorded them all ourselves. I created the artwork of course."
    // },
    {
        name: "Music",
        id: "music",
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
        description: "I started brewing when I moved to Edinburgh, but took a long haiatus until around 2020 when (for obvious reasons) home hobbies took off again. I brewed mostly IPAs, a few stouts and some other Ales. I also got into making my own Chili sauce and a few other things."
    },
	{
        name: "Running",
        id: "running",
        icon: "person-running",
    },
	{
        name: "Crafting",
        id: "crafting",
        icon: "hammer",
    },
]