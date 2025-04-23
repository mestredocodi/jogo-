rfunction setup() {
  createCanvas(400, 400);
}

function draw() {
  background(blue);
  circle(200,200,300);
  circle(190,150,60);
  circle(300,150,60);
  circle(200,150,30);
  circle(307,150,30);
  line(200,270,250,270);
  triangle(190,240,250,260,200,200);
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
    }
}
