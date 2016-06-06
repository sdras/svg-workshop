var bP = $(".boggle path"),
    tl = new TimelineLite();

tl.add("start");
tl.staggerFrom(bP, 3, {
  cycle:{
    fill:["white", "yellow", "#e23e0c"],
    opacity:[0.8, 0.2, 0.5, 0.3],
  }, 
  ease:Elastic.easeOut
}, 0.001);
tl.staggerTo(bP, 3, {
  cycle:{
    y:[700, -700, -1000, 1000],
    x:[200, -200, -700, 700],
    rotation: function(i) {
      return i * 20
    }
  }, 
  opacity: 0,
  fill: "#f2bf30",
  ease:Circ.easeInOut
}, 0.001, "start+=1.25");