---
title: "Second post - hard beginnings"
date: "2021-04-15"
---

So this took a long time, but I think we've made some progress.

Last post I've mentioned we're going to add a tech stack and an explanation for why we chose each part.

So here we go:

This site is <b>hosted on Azure</b>, since I'm a developer at Microsoft. We get credits towards using Azure each month for personal use, and I thought it would be a good way to learn about some of the technologies that are available on Azure.

Secondly, I've selected <a href="http://aka.ms/node-qs"><b>App Services with Node-JS</b></a>  as a server, since it's mostly lightweight, pretty popular and for my site's traffic it should be more than enough. When it comes to a server, Express.js was one of the easier choices here, both suggested by the quickstart guide and I have some previous experience with it so this was a no brainer.

Lastly, I've selected <a href="https://github.com/gatsbyjs/gatsby-starter-hello-world"><b>Gatsby-JS</b> starter template</a> as a front-end \ static stack to be served from said Node.JS server, since it has some really interesting properties for me:

- MD (Markdown) autogeneration of (blog) pages, which should help me post content with relative ease.
- React & GraphQL baked in - I've really missed those two, as I've been working with those two in my previous job as a Frontend developer @Haaretz, and I've been meaning to find a way to brushen up on those in some way. This is one way of going about it.s
- Built-in service worker - I think there's potential there, and I haven't really explored personally what can we do as web developers with this piece of technology.


Upcoming content:

- How I've set up a release pipeline (deployment & CI)
- Adding some user interactibles (comment section? Login?)
- Journey forward and what this site could become