---
title: D&D Initaitve Tracker
description: An aesthetic and functional tool for the Dungeon Master to track combat in D&D. A single page, serverless svelte app that makes use of local storage for saving and recovering state between browser sessions.
date: 05/09/2023
projectId: programming
coverImage: dnd-initiative/initiative-icon.svg
published: true
technologies: [ Svelte, TypeScript ]
---


Deployed at: [https://edpacca.github.io/ednd-initiative/](https://edpacca.github.io/ednd-initiative/)

 If you're unfaimilar with DnD and curious then I guess [go read this](https://en.wikipedia.org/wiki/Player%27s_Handbook). When playing in-person, I have always found tracking intiative in DnD combat to be too fiddly and complicated.From trying to write everyone's names down in order to tracking the HP of 11 goblins with their own hopes and dreams there's always room for error - not to mention each time you have to scribble things down it pulls you out of any immersive role-play, and often just ends up being indecipherable anyway. Therefore as part of an ongoing project to develop my idealised set of DM tools I present the [Ed 'n Dragons initiative tracker](https://edpacca.github.io/ednd-initiative/).

![A complex combat state being tracked](dnd-initiative/combat-0.webp)

# The Problems

For some people tracking initiative on paper is fine and helps them organise their thoughts. For me, I like to stay as focussed on the game itself as possible. The tracker should enable me to do the following:

- Set up a new combat quickly
- Find the relevant information in a clear interface
- Handle changes to combat e.g. add new combatants, change initiative value etc
- Update HP quickly and accurately

I ended up using Svelte (again) as it had quickly becoming my frontend framework of choice, allowing me to easily develop a complex system of interlocking UI components whilst also providing an easy to manage and store the state of the application. Now in hindsight, the state managememnt reached a level of complexity that would have benefitted from using Redux, but this was not realised until deeper into the project.

## DnD stuff to track or show
In DnD terms this is the current list of attributes and values that can be tracked with the app:

- Initiative order
- Current turn
- Round number
- Hit points
- Armour class
- Conditions
- Bloodied status
- Legendary actions
- Lair actions

 Now this list seems amibitous but in truth there are many variations and exceptions for specific creatures in DnD. So this is the most generic and useful shortlist that I could think of. In fact, the way this project developed it started simple, growing and morphing into it's current form; this list was grown with the app and wasn't fully realised when development started.

*to be continued...*