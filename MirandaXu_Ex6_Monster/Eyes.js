function Eyes() {

  this.display = function(x, y) {
    fill(255, 255, 255);
    ellipse(x, y, 80, 80); //eyes

    fill(0, 0, 0);
    noStroke();
    ellipse(180, 310, 25, 25);
    ellipse(340, 340, 25, 25); //pupils
  }
}