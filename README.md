# Advanced SVG Workshop

Starter Materials for Advanced SVG Animation Workshop
Author: Sarah Drasner

This repo houses the materials and resources for the Advanced SVG Animation Workshop. Most of the materials for the course are outlined below, but there are also directories housed here of very basic examples of some of the techniques we will cover so that students don't have to spend a lot of time researching in order to get started. It is recommended that students use CodePen to create work for the duration of the course, as we'll use preprocessors like SCSS as well as Babel for ES6 and codepen makes it easy to do so without time devoted to setup. If you like, you can also scroll to the CodePen collection section and fork one of the existing pens in those collections, they are comprehensive. GreenSock pens in the collection use member's only plugins that are CodePen-safe. For MorphSVG, DrawSVG, and FindShapeIndex sections, localhost will fail and using CodePen is recommended.

For sections covering React-Motion, it may make more sense to use Create-React-App so that your workflow more closely mirrors development, but that decision is up to you.

##Slides:
* [SVG Workshop 1](http://slides.com/sdrasner/smashing-workshop1?token=GwIg9v4C)
* [SVG Workshop 2](http://slides.com/sdrasner/smashingworkshop2?token=pR5HLetg)
* [SVG Workshop 3](http://slides.com/sdrasner/smashing-workshop3?token=zWiaoPN8)
* [SVG Workshop- DataVis](http://slides.com/sdrasner/svg-workshop-data-vis?token=rC0MZakh)
* [SVG Workshop- React](http://slides.com/sdrasner/advanced-svg-animation-react?token=ufkHSlmC)
* [SVG Workshop- Mo.js](http://slides.com/sdrasner/svg-workshop-mojs?token=wAkiI-Pe)

All slides have password svgisawesome!@!

##Collections:
* [SVG and CSS/GreenSock CodePen Collection](http://codepen.io/collection/XvBQJQ/)
* [Intro to D3 Collection](http://codepen.io/collection/XKgVVV/)
* [Mo.js Collection](http://codepen.io/collection/XOEKow/)

Included in this repo are some very basic starter kits. 

##Part One, Section Three
There is a resource for the sprite and CSS animation SVG, should you need a starter resource.
SVG Resources:
* [http://icomoon.io/](Icomoon.io)
* [https://thenounproject.com/](The Noun Project)
* [http://www.freepik.com/](Freepik)

##Part Three, Section Six
[GreenSock Docs](http://greensock.com/docs/#/HTML5/), [Forums](http://greensock.com/forums/), and [Easing Visualizer](http://greensock.com/ease-visualizer).

There are three directories you can use as GSAP starter kits:
* vanillajs-interaction
* basic-tween
* basic-timeline
* master-timeline

##Part Four, Section Seven
There are a few ways to work with the GSAP timeline in this file: gsap-resources.js. For any interaction with jQuery, remember to use the 3.0+ version. [Alpha](https://code.jquery.com/jquery-3.0.0-alpha1.js)

##DataVis
The starter resource for this section is in the directory basic-d3. This is d3 version 4, so be wary that if you try out of the box things that exist in the d3 docs for the blocks, they might not work. (Not very many d3 blocks have been updated.) Big changes include axis and transition, new version demo-ed here.

##React
There are two basic starter directories included here for React. One is basic-react-svg-css, which shows a very simple use case of a reusable SVG component animated with CSS. There is also basic-react-motion, which shows a single staggered motion animation.

##Mojs
Mojs-shapes directory includes every out of the box shape that mo.js allows you to create. You can also create custom shapes (look in the mo.js codepen collection for bouncy radio demo for an example).

Mojs-tools directory shows a simple shape tween and .then() syntax with both timeline and curve-editor tools loaded in.

