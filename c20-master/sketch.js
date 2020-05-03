var r = 0;
var g = 127.5;
var b = 255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(600,800);
}


function draw(){
  r = map(mouseX,0,600,0,255);
  b = map(mouseX,0,600,100,255);
  g = map(mouseY,0,800,1,255);
  background(r,g,b);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
  // Create an ellipse that will move around with you mouse about the X axis.
  fill (255,255,255);
  ellipse(mouseX,mouseY,64,64);
  console.log (mouseX);
  console.log (mouseY); 
  // Remember to fill the canvas with white paint before creating the ellipse.
  
}