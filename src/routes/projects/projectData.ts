
const defaultIcon = "/icons/ep-logo.svg";

const projectNames = [
	"Miniature Painting",
	"Programming",
	"Brewing",
	"Running",
	"Muay Thai",
	"Woodwork",
	"Dungeons & Dragons",
	"AISIAEC",
	"Solo music"
]

const minipainting: Project = {
    name: "Miniature Painting",
    image: defaultIcon,
    description: "I rekidled an old hobby of mine from when I was around 9-13 years old of painting miniatures. I collected figures from Warhammer 40k (Dark angels), Lord of the Rings (bad guys of course) and Warhammer Fantasy (Ogre Kingdoms"
}

const aisiaec: Project = {
    name: "A.I.S.I.A.E.C",
    image: defaultIcon,
    description: "When I moved to Edinburgh in 2014 I put out an advert on Gumtree looking for musicians to jam with. All I see is an Empty Circle slowly formed off the back of that advert into a band that we were very proud of. We released 3 EPs between 2016 - 2019 and recorded them all ourselves. I created the artwork of course."
}

const brewing: Project = {
    name: "Brewing",
    image: defaultIcon,
    description: "I started brewing when I moved to Edinburgh aswell, but took a long haiatus until around 2020 when for obvious reasons home hobbies took off again. I brewed mostly IPAs, a few stouts and some other Ales."
}

export const PROJECTS: Project[] = [
    minipainting,
    aisiaec,
    brewing
]
