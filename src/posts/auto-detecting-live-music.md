---
title: Song Hog
description: An audio processing pipeline that takes a long recording from a rehearsal and automatically extracts the bits where people are playing music
date: 05/24/2026
icon: pig
projectId: programming
published: false
dev: true
technologies: [ python, docker ]
---

This service that I built is a genuine quality-of-life improvement for me and my bandmates - and I'm very pleased with the implementation. There were many steps in this from development, deployment, benchmarking and optimisation so I'll break this up into a few posts. I wax lyrical a bit because... I want to and it's my blog, but [go here if you want to cut to the chase]().


# The Problem
Phone microphones and on-board audio processing have improved a lot over the last few years; to the point where I can set my phone recording in a room with a hefty bass amp, keys going through a PA, two guitars going full blast through 4x12s and the mic pointing straight at a drumkit and still make out a good deal of what's going on. A friend recently showed me a recording of an old band jam, from when we were ~14, recorded on the mic of one of those 300px digital cameras - it's basically unintelligible static. It probably could have been considered the edgiest black-metal if it wasn't meant to be early 00's pop-punk(* make footnote *). Of course back then we may have considered uploading it as an actual demo, but now the purpose is merely to capture any spontaneous ideas that may happen throughout the course of a rehearsal. When those magic moments happen you don't want to be scrambling to press record on your phone, so having it constantly going in the background is great for that. 

The problem comes afterwards - you have a 1-2 h recording to scrub through to find "that one good bit we did at the end of the third take of...". The recordings also contain a good deal of chatting, tuning, messing around and general not-playing-music-bits. Then you have to either use the horrendous touch screen timeline scrubbing on your phone, or go to the effort of downloading the files and chopping them up on your computer, and as the guy with the recorder it's always my job. What actually happens is those snippets of gold never see the light of day and basically sit in my extensive, yet dusty archive of recordings. I used Google recorder which also makes it difficult to share the snippets as they only export in `.m4a` format - which is fine if you use VLC for streaming media on your phone, but most people aren't that weird. I should note though that whatever compression approach they use is excellent: an hour long `.m4a` file comes in around 12 Mb (* confirm *) which is well within manageable limits for organised cloud file storage. 

So therein is our problem defined:

- Manually chopping out snippets from long recordings is laborious
- The `.m4a` file format is not particularly mobile friendly for busy adults
- The slow build up of unprocessed recordings feeds a metaphysical gargoyle that lurks in a dusty alcove at the back of my mind, occasionally surfacing to deliver short slugs of existential dread whenever I remember that I haven't dealt with them.

# The Idea 
When you look at the wave forms for the recordings, it's quite obvious when there' music going on vs. when someone is talking. It's basically almost clipping for that period of time. The app will actually even identify the segments that are music, probably with ML. As far as I could tell there's no useful way to use this other than have the tag pop up on the screen when you're scrubbing through - which does help a bit with the manual approach. Still, I always thought there must be a simply way to identify those bits algorithmically. And in my specific case, because the music is always very loud, I actually just need to identify the sections where it's a lot more noisy for a sustained period of time. 
