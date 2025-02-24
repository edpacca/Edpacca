---
title: Wapp (Wedding App)
description: A full-stack application used to manage my wedding - developed from scratch, deployed and used in production using Docker. Making use of the MERN stack, Wapp allows guests to login, record a meal choice and receive other information about the wedding.
date: 07/16/2022
coverImage: wapp/wapp-logo.webp
projectId: programming
published: true
technologies: [TypeScript, React, Redux, Express, MongoDb]
---

Wapp stands for "Wedding App" of course (what were you thinking?!). I decided I needed to test my new programming skills by building a full-stack app that was actually going to be useful. At the time this was probably my most ambitious project to date. I think it took around 4 months to complete, and I made absolutely everything from scratch where possible. I used as few dependencies as possible, but because of React it ended up being huge anyway. It deployed with very few hiccups [(discussed here)](#hiccups) and was actually very useful for us wedding hosts, and the guests.

[Wapp Demo]() with mocked server and database hosted on github pages.

# The Gist

- MongoDB No-SQL database
- ExpressJS backend (TS of course)
- React / Redux frontend
- Deployed as separate impages using Docker-compose on a single DigitalOcean droplet

I tried some new things like playing with the google maps api, and authenticating users securely (even though there really is no need as the data is harmless!). One of the coolest and least useful "widgets" I made was a scrollable timeline for the wedding day, which had animations driven by the scroll position, rather than triggered at a certain point, or looping continuously. So the user can scroll back and forth and control the animation so to speak.

## Admin

Wapp Admin logs in from a separate route. On the admin page they can see an overview of all the user data which they have full control over.

## Users

Users are added manually by the admin and sign in with a Username and Password (no email). The login is authenticated using `jwt` (json web tokens) verifying both the client with a client secret and the login information. The user is then logged in where they can record their pprox arrival day/time (i.e. Friday morning, Friday evening, Sat morning) and their meal choices. There is also complete itineraries for each day and any additional info that might be useful.
The user can see a histogram showing when other guests are going to show up.

post to be continued...
