var body;
var eye1;
var eye2;
var antenna;
var legs;
var ears;
var mouse;

function setup(){
  createCanvas(700,900);
  background(205,164,158);
  
  body = new Body(71, 31, 31,156, 38, 50);
  eye1 = new Eyes();
  eye2 = new Eyes();
  antenna = new Antenna(4);
  legs = new Legs();
  ears = new Ears();
  mouse = new Mouse(50,0,0);
}


function draw(){
  body.display();
  
  eye1.display(200,330);
  eye2.display(320,340);
  
  antenna.display();
  
  legs.display(0);
  
  ears.display();
  
  mouse.display(80);
  
}