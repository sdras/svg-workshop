var $colLine = $("#column line"),
    $box = $("#box polygon"),
    $roof = $("#roof polygon"),
    $roofline = $("#roof-lines line");

TweenMax.set($(".one"), { rotation:-37, scale:1.15, transformOrigin:"100% 100%" });
TweenMax.set($(".two"), { x:-19, y:20, rotation:67, scaleY:4.8, scaleX:0.8, transformOrigin:"100% 100%" });
TweenMax.set($(".three"), { scaleY:1.95, rotation:-83, transformOrigin:"100% 100%"});
TweenMax.set($(".four"), { scaleY:2.7, rotation:90, transformOrigin:"0% 100%"});

function houseIn() {
  var tl = new TimelineMax();
  
	tl.staggerFromTo($colLine, 0.5, {scale:0}, {transformOrigin:"100% 100%", scale:1, delay:0.5, ease:Back.easeOut}, 0.06)
  .staggerFromTo($box, 0.5, {scaleY:0}, {transformOrigin:"100% 100%", scaleY:1, ease:Back.easeOut}, 0.06)
  .staggerFromTo($roofline, 0.5, {opacity:0}, {opacity:0.6, ease:Back.easeOut}, 0.06)
  .fromTo($(".one"), 0.4, {rotation:-37, scale:1.15}, {rotation:0, scale:1, transformOrigin:"100% 100%", ease:Back.easeOut})
	.fromTo($(".two"), 0.4, {x:-19, y:20, rotation:67, scaleY:4.8, scaleX:0.8}, {x:0, y:0, rotation:0, scaleX:1, scaleY:1, transformOrigin:"100% 100%", ease:Circ.easeOut}, "-=0.3")
	.fromTo($(".three"), 0.4, {scaleY:1.95, rotation:-83}, {scale:1, rotation:0, transformOrigin:"100% 100%", ease:Back.easeOut}, "-=0.3")
	.fromTo($(".four"), 0.4, {scaleY:2.7, rotation:90}, {scale:1, rotation:0, transformOrigin:"0% 100%", ease:Back.easeOut}, "-=0.3")
  .fromTo($("#top"), 0.4, {scaleY:0}, {scale:1, transformOrigin:"50% 50%", ease:Back.easeOut}, "-=0.3")
  .staggerFromTo($roof, 0.5, {scaleY:0}, {transformOrigin:"50% 100%", scaleY:1, ease:Back.easeOut}, 0.06);
  
  tl.timeScale(1.3);

  return tl;
}

function houseOut() {
  var tl = new TimelineMax();
  
	tl.fromTo($(".house-loader"), 1, {rotation:0, x:0}, {rotation:90, x:-100, transformOrigin:"75% 75%", ease:Bounce.easeOut}, "+=1.5")
  .fromTo($box, 1, {fill:"#06B795"}, {fill:"#35D75D"}, "-=1")
  .fromTo($roof, 1, {fill:"#06B795"}, {fill:"#35D75D"}, "-=1")
    .staggerTo($roofline, 1, {opacity:0, ease:Back.easeOut}, 0.06, "-=0.25")
  .staggerTo($roof, 0.75, {scale:0, opacity:0, transformOrigin:"50% 100%", ease:Circ.easeIn}, 0.06, "-=0.5")
  .staggerTo($colLine, 0.5, {scale:0, opacity:0, transformOrigin:"50% 100%", ease:Circ.easeOut}, 0.06)
  .staggerTo($box, 0.5, {scaleX:0, opacity:0, transformOrigin:"100% 50%", ease:Circ.easeOut}, 0.1, "-=0.45");
  
  tl.timeScale(1.8);

  return tl;
}

var master = new TimelineMax({repeat:-1});
master.add(houseIn(), "houseIn")
			.add(houseOut(), "houseOut");