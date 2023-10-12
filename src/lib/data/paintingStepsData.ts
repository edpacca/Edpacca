import { DA_ARMOUR_GALLERY } from "./galleries";
import { DA_ARMOUR_PAINTS, type PaintColourType } from "./paintColourData";

export interface PaintingStep {
    paints: PaintColourType[];
    instructions: string[];
    imagePath: string;
}

const DA_ARMOUR_INSTRUCTIONS: string[][] = [
    [
        "I start by priming with black, followed by a mid grey spray-can \"zenithal\", although I think just the grey would do.",
        "This Dark Green paint is quite thin, and I've found that takes a lot of layers to cover properly over straight black. Similarly it's too bright over straight white. Here we just need 2 coats to get a nice even coverage across the armour. You can see that it is more saturated than the colour swatch from the vallejo website implies."
    ],
    [
        "Next we'll be using an interesting paint called Smokey Ink. I find it gives a nice warmth to the shadows and really adds some interesting depth to the colours.",
        "Water down to about 60/40 ink to water. This ink a strange almost sticky consistency when used straight from the bottle, but we want it to be thick enough to cover the armour panels and not just sink into the recesses.",
    ],
    [
        "After trying a few highlight colours I settled on this Deep Green. It has a slightly bluer tinge which will give us some cooler highlights to compliment our warm shadows.",
        "A mid to light drybrush serves to give some night highlights on the raised edges. After all we're trying to paint a whole army here!",
        "If I was taking more care I would then reinforce some of the edge highlights with this colour after the drybrush. You could then follow up with some Lime Green highlights to further push them if you're feeling fancy."
    ],
    [
        "Now onto the bone coloured panels. I start with a base coat of Flat Earth (#theearthisnotround). This paint looks slightly warmer and more yellow than the Vallejo swatch.",
        "You may need two coats to get a smooth coverage."
    ],
    [
        "My least favourite step. This bone white is a lovely colour but like most white/off-white paints it can be hard to get a good coverage without it going chalky. If taking your time you can mix in some gloss varnish as a sort of paint medium, but obviously that adds more time and takes longer to dry.",
        "You can see how my result here is still not great, but don't worry this will be fixed later on!",
        "Edit// I've found it recently more time efficient to skip this step and spend more time on the final layering."
    ],
    [
        "Same as step 2, but a slightly thinner consistency of smokey ink - maybe 50/50 diluted with water. This really adds some punch and grit to the bone panels and makes it look like that parchment colour that I've been after. I actually even like the texture fom the paint strokes that this kind of accentuates - even though most would consider it a flaw.",
        "Make sure to get some collecting in the recesses - this will serve to aid our shadows we added with the first wash and marry the look of the green abd bone."
    ],
    [
        "The final step is the most technical but makes a big difference. I sort of wet blend the a thinned down Flat Eart with a Bone White. I put a blob of each on my wet palette and mix a bit there, leaving me with a gradient of paint colour to pick from.",
        "Transfer a bit of the darker mix to the model on the underside of the bone panels, then a bit of the lighter mix and gently mix the two back and forth until you get a smoother blend.",
        "This doesn't have to be too dramatic, and this photo doesn't really show too much contrast - but this step serves to smooth out the chalky white bits and add a bit of depth to these parts of the model"
    ],
    [
        "After filling in the rest of the model we have a nice looking Dark Angels Devastators Sergeant - \"Shoot that one!!\"",
        "The base here is done in the same manner as all my highland themed bases. Tutorial coming soon!"
    ]
]

export const DA_ARMOUR_RECIPE_STEPS: PaintingStep[] = [
    {
        paints: [
            DA_ARMOUR_PAINTS[0]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[0],
        imagePath: DA_ARMOUR_GALLERY[0]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[1]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[1],
        imagePath: DA_ARMOUR_GALLERY[1]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[2]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[2],
        imagePath: DA_ARMOUR_GALLERY[2]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[3]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[3],
        imagePath: DA_ARMOUR_GALLERY[3]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[4]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[4],
        imagePath: DA_ARMOUR_GALLERY[4]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[1]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[5],
        imagePath: DA_ARMOUR_GALLERY[5]
    },
    {
        paints: [
            DA_ARMOUR_PAINTS[3],
            DA_ARMOUR_PAINTS[4]
        ],
        instructions: DA_ARMOUR_INSTRUCTIONS[6],
        imagePath: DA_ARMOUR_GALLERY[6]
    },
    {
        paints: [],
        instructions: DA_ARMOUR_INSTRUCTIONS[7],
        imagePath: DA_ARMOUR_GALLERY[7]
    }
]

