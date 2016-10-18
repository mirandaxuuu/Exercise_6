function Antenna(weight) {

  this.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(255, 200, 200);
    rect(180, 75, 50, 150);
    rect(280, 95, 50, 125); //anrtenna

    strokeWeight(weight);
    line(200, 70, 220, 20);
    line(300, 90, 340, 25); //top of antenna
  }
}