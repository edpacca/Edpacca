export function getProjectData(projectId: string): ProjectType | undefined {
  return PROJECTS.find((p) => p.id === projectId);
}

export const PROJECTS: ProjectType[] = [
  {
    name: "Programming",
    id: "programming",
    icon: "code",
    description:
      "After falling in love with programming I left behind my life as a high pressure scientist in order to become a software developer. Now I've worked professionally all over the stack, with a number of languages and frameworks, I can safely say that I simply enjoy figuring out problems and finding optimal solutions. My personal projects usually emerge from a need that I have or simply a 'quick experiment' that gets out of hand; a few of my favourites are highlighted here.",
  },
  {
    name: "Miniatures",
    id: "miniatures",
    icon: "paint-brush",
    description:
      "I rekinded the hobby of mini-painting after digging out a bunch of old miniatures that I had collected between the ages of 10 - 14. The challenge back then was simply to paint each section a single colour, as neatly as possible. Now, I have fallen in love with the process of 'painting the light', thinking about contrast and tone, and trying to tell a story with the figures. I am still a long way from being any good, but hopefully the progress is visible across what is documented here.",
    bonus: "When I was in school, I actually used to make my own Warhammer 'magazine' - an ode to the White Dwarf called 'Black Blade'. I would take photos of my friends' paint jobs, give painting tutorials and write battle reports. I think I released about 5 issues, and would sell them for 20p to cover the printing costs. Unfortunately there are no known surviving copies...",
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
    icon: "music",
  },
  // {
  //     name: "Dungeons & Dragons",
  //     id: "dnd",
  //     icon: "dice-d20",
  // },
  {
    name: "Recipes",
    id: "recipes",
    icon: "pepper-hot",
    description:
      "I started brewing when I moved to Edinburgh, but took a long haiatus until around 2020 when (for obvious reasons) home hobbies took off again. I brewed mostly IPAs, a few stouts and some other Ales. I also got into making my own Chili sauce and a few other things.",
  },
  // {
  //     name: "Running",
  //     id: "running",
  //     icon: "person-running",
  // },
  {
    name: "Crafting",
    id: "crafting",
    icon: "hammer",
    description:
      "These posts refer specifically to 'big' crafts - as most of my projects are generally at miniature scale!",
  },
];
