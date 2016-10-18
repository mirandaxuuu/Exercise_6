function Legs() {

  this.display = function(a) {
    stroke(0);
    strokeWeight(2);
    triangle(290, 720, 380, 730, 340, 800);
    triangle(440, 720, 510, 670, 490, 780); //legs

    fill(197, 31, 31);
    quad(220, 550-a, 190, 600-a, 210, 650-a, 240, 600-a);
    quad(420, 510-a, 390, 550-a, 410, 610-a, 440, 560-a); //arms
  }

}//end of class legs