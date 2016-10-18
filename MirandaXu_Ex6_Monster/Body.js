function Body(r1, b1, g1, r2, b2, g2) {
  this.bodyRed = r1
  this.bodyGreen = g1
  this.bodyBlue = b1
  this.headRed = r2
  this.headGreen = g2
  this.headBlue = b2

  this.display = function() {
    fill(r1, b1, g1);
    ellipse(370, 550, 300, 350); //body

    fill(r2, b2, g2);
    ellipse(260, 350, 320, 260); //head
    
  }
}