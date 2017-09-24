//set properties needed for animation
TweenMax.set(".element", {
  perspective: 400
});

// the first scene
function sceneOne() {
  var tl = new TimelineMax();

  tl.add("label");
  //animation for element on timeline
  tl.to(".other-element", 1, {property: value}, "label");
  //stagger needs the 0.2, which tells the elements how long to wait between each next fire
  tl.staggerTo(".next-element li", 1, {property: value}, 0.2, "label+=1");

  //make the timeline go a little bit faster
  tl.timeScale(1.2);

  return tl;
}

// Create a master timeline
var master = new TimelineMax({options});
// Add the scene function to the master
master.add(sceneOne(), "labelOnMaster");

//use this while you're working to get to a place in time
//master.seek("labelOnMaster+=2");e