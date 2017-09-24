// Position parameters

var tl = new TimelineLite();
tl.to(".orange", 1, {x:750})
  //this just follows the first
  .to(".green", 1, {x:750})
  //there is a one second gap between these two tweens
  .to(".blue", 1, {x:750}, "+=1")
  //this goes to two seconds in
  .to(".red", 1, {x:750}, "2")
  // add a relative label at this part of the timeline
  .add("newLabel")
  // tween at 3 seconds past the relative label
  .to(".purple", 1, {x:750}, "newlabel+=3");

//-------------------------------------------------------

// Some Useful Timeline function calls

tl.pause(); // Pause timeline - within a timeline it would be var foo = new TimelineMax({paused:true});, very handy for getting a timeline ready for interaction.
tl.restart(); // Restart the timeline - very useful for interaction (set the timeline to paused:true, and then trigger restart)
tl.reverse(); // Reverse playback- nice for exiting a scene in interaction.
tl.seek(n); // Go to n seconds or 'label'- good for working because you don't have to sit through the whole animation.
tl.timeScale(n); // Speed up/slow down timeline by n seconds- use this for debugging to slow it down, or for faster playback in action
tl.globalTimeScale(n); // changes all of the timescales at once- useful for multiple timelines.
tl.progress(0.5); // Skip to halfway
tl.resume(); // Continue playback
tl.resume(n); // Continue playback at n seconds
tl.play(n); // Play from n seconds- funnily, less useful
tl.play(-n); // Play n seconds from end

// also options, usage: new TimelineMax({example});
paused:true // boolean, default is false
yoyo:true // close to CSS animation direction: alternate- makes the timeline go back and forth.
repeat:n // iteration count
delay:n // delay of the whole timeline
repeatDelay:n // delay in between iteration

//-------------------------------------------------------

// Transforms in GSAP
// comments show CSS equivalent

x: 100 // transform: translateX(100px)
y: 100 // transform: translateY(100px)
z: 100 // transform: translateZ(100px)
// you do not need the null transform hack or hardware acceleration, it comes baked in with
// force3d:true. If you want to unset this, force3d:false
scale: 2 // transform: scale(2)
scaleX: 2 // transform: scaleX(2)
scaleY: 2 // transform: scaleY(2)
scaleZ: 2 // transform: scaleZ(2)
skew: 15 // transform: skew(15deg)
skewX: 15 // transform: skewX(15deg)
skewY: 15 // transform: skewY(15deg)
rotation: 180 // transform: rotate(180deg)
rotationX: 180 // transform: rotateX(180deg)
rotationY: 180 // transform: rotateY(180deg)
rotationZ: 180 // transform: rotateZ(180deg)
perspective: 1000 // transform: perspective(1000px)
transformOrigin: '50% 50%' // transform-origin: 50% 50%

//-------------------------------------------------------

// DrawSVG
// Use percentage, absolute values, or boolean

drawSVG: true // full stroke drawn
drawSVG:"100%" // same as true
drawSVG: "10%" // the first 10%
drawSVG: "10% 90%" // the first 10% to the last 90%
drawSVG: "50% 50%" // looks like nothing because both ends at 50%
drawSVG:"20 350" // the first 20px and 350px

//-------------------------------------------------------

// SplitText
// creates an array (can use mySplitText.chars, in the case below, foo.chars), also wraps all in divs

var foo = new SplitText("#bar", {
   type: "words, chars, lines",
   //optional- may animate better, may cause text reflow to be less natural
   position: "absolute", 
   //optional
   wordsClass:"foobar"
});

// use in GSAP animation:
tl.staggerFrom(mySplitText.chars, 0.8, {opacity:0, scaleX:0, ease:Power4.easeOut}, 0.05, "+=4");

//-------------------------------------------------------

// MorphSVG

// You may need to convert the shape data to a path before you begin working
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

TweenLite.to("#initial", 1, {morphSVG:"#next"}); //first shape tween
TweenLite.to("#initial", 1, {morphSVG:"#second"}); //the second shape tween. Notice that we don't use #next, we continue to tween from the initial shape.
TweenLite.to(“#polygon”, 2, {morphSVG:"240,220 240,70 70,70 70,220"}); //use a shape instead of an idea
TweenLite.to(“#path”, 2, {morphSVG:"M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10"}); //use a path instead of an ID

// Load shapeIndex to check out the optimal shape tween https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/findShapeIndex.js, it will start up a GUI
// this plugin is smart and will use a repeat:-1 to continually show the tween so you can use the GUI.

// use an existing ID
findShapeIndex("#square", "#star");
// or use path data
findShapeIndex("#square", "M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10");