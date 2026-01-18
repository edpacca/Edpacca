---
title: D&D Initiaitve Tracker
description: An aesthetic and functional tool for the Dungeon Master to track combat in D&D. A single page, serverless svelte app that makes use of local storage for saving and recovering state between browser sessions.
date: 05/09/2023
projectId: programming
coverImage: dnd-initiative/initiative-icon.svg
published: true
technologies: [ TypeScript, Svelte ]
---

Deployed at: [https://edpacca.github.io/ednd-initiative/](https://edpacca.github.io/ednd-initiative/)
(_not optimised for mobile use_)

 If you're unfaimilar with DnD and curious then I guess [go read this](https://en.wikipedia.org/wiki/Player%27s_Handbook). When playing in-person, I have always found tracking intiative in DnD combat to be fiddly and complicated - from writing everyone's names down in order as 5 people yell out numbers at the same time, to individually tracking the HP of 11 goblins with their own hopes and dreams. There's always room for error, not to mention that frantically scribbling things down pulls you out of any immersive role-play that may be happened. And if you've my handwriting, it often just ends up being indecipherable anyway. Hence I develoepd the [Ed 'n Dragons initiative tracker](https://edpacca.github.io/ednd-initiative/), as part of an (eternally) ongoing project to develop an idealised set of DM tools. As with nearly all my projects, this is programmed from scratch relying on as few external libraries as possible.

![A complex combat state being tracked](dnd-initiative/combat-0.webp)

# The Problem we're solving

For some people tracking initiative on paper is sufficient - it helps them organised their thoughts, or perhaps they simply enjoy the open freedom of the page. For me though it doesn't tend to work. I can't write fast enough and I like to stay as focussed on the game as possible, and I end up with a jumbled mess on the page and ultimately needing to spend time figuring out or fixing my shoddy notes. There's many areas that software could aid here, but for a start I wanted the combat tracker to do the following:

- Set up a new session quickly
- Show data clearly and neatly
- Be able to load preset monster stats
- Keep track of hit-points
- Look good!

It ultimately ended up meeting all these requirements. I actually had such a blast coding this and new ideas kept coming to me, and it also does the following:

- Is deployed on the web, accessible from anywhere
- Save and load groups of entities
- Keeps track of history, with undo functionality
- Tracks conditions
- Change the theme

and probably some more things that I'll remember as I finish this.

I ended up using pure Svelte (again) as it had quickly become a favoured framework for Javascript and component based frontents. It allowed me to easily develop a complex system of interlocking UI components, whilst also easily handling and updating the state of the application. Now in hindsight, the state managememnt reached a level of complexity that would have benefitted from using Redux, but this was not realised until deeper into the project.

## DnD stuff to track or display
In DnD terms this is the current list of attributes and values that can be tracked or displayed with the app:

- Initiative order
- Current turn
- Round number
- Hit points
- Armour class
- Conditions
- Bloodied status
- Legendary actions
- Lair actions

 Now this list seems amibitous but in truth there are many variations and exceptions for specific creatures in DnD. So this is the most generic and useful shortlist that I came up with, and it serves for most things. I think adding notes may be a good future feature - but I also want to keep it as streamlined as possible.

 The creature specific attribtues are all tracked on a single line. I tried to ensure they were all clearly displayed and distinguished from one another. I didn't label them as I felt it added visual clutter but I did add tooltips for certain actions that aren't immediately obvious.

![Right click to add a modifier](dnd-initiative/tooltip-0.webp)


## Minions!
Being able to make 'minions' is one of the most useful features I've found while using this in the wild. The idea with 'minions' is to have a multiple individually tracked entities that all go on the same initiative. With a standard tracker you would need to make a new entity for each one if you wanted to track all their health values, but not with mine.

![toggle between standard, minions and legendary creature types](dnd-initiative/creatures-0.webp)

Clicking on the creature's icon will cycle between different types of enemy trackers. The 'Minion' type supports multiple entities under the single tracker while the 'Legendary' type gives you a legendary actions tracker.

The real power of the Minion though is when it comes to damage and conditions. When in combat mode, you can just deal damange and healing directly to a given entity - but additionally all creatures and players have the option to open a modal focussed on that creature, shown below. Here it's a doddle to mange things, especially with the minions.

![A handful of Goblins is now easy to manage!](dnd-initiative/minions-0.webp)

...writeup to be continued...
