function Mouse(r,g,b) {

  this.display = function(d) {
    noFill();
    strokeWeight(3);
    stroke(r,g,b);
    arc(260, 410, d, d, 0, PI); //mouse
  }
}