function Ears() {

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    
    arc(100, 350, 80, 80, 1.5, 4.8, CHORD);
    arc(420, 325, 80, 80, -1.9, 1.4, CHORD); //ears
  }
}