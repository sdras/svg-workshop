var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
  svgNS = svg.namespaceURI,
  vbx = document.createElementNS(svgNS, "viewBox"),
  width = Math.round(window.innerWidth),
  height = Math.round(window.innerHeight),
  x = window.innerWidth / 2,
  y = window.innerHeight / 2,
  radius = 10;

document.body.appendChild(svg);
document.body.style.background = '#222';
svg.setAttribute("viewBox", "0 0 " + width + " " + height);
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.style.cursor = "pointer";

function drawCirc() {
  var st = 40;
  var allW = Math.round(width / st);
  var allH = Math.round(height / st);
  var startY = -st / 2;
  var allT = allW * allH;

  for (var i = 0; i < allT; i++) {
    var circ = document.createElementNS(svgNS, "circle");
    svg.appendChild(circ);
    circ.setAttribute("r", radius);
    circ.setAttribute("fill", "rgb(225, " + i + ", 0)");
    circ.setAttribute("stroke-width", "40");
    circ.setAttribute("stroke-opacity", "0");
    circ.setAttribute("stroke", "orangered");
    circ.setAttribute("cx", (i % allW) * st);

    if (i % allW === 0) {
      startY += st;
    }
    circ.setAttribute("cy", (startY));

    //style it
    circ.style.transformOrigin = "50% 50%";
    circ.style.opacity = 0.5;
    circ.style.transition = "0.4s all ease-out";

    circ.addEventListener("mouseover", function(e) {
      this.style.transform = "scale(2)";
      this.style.opacity = 1;
    });

    circ.addEventListener("mouseleave", function(e) {
      var nowCirc = this;
      this.style.transition = "0.6s all ease-in";
      setTimeout(function() {
        nowCirc.style.transform = "scale(1)";
        nowCirc.style.opacity = 0.5;
      }, 600);
    });

    this.circ = circ;
  }
};

drawCirc();