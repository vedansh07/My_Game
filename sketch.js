var boy,boyImg;
var door1,door2,door3,door1Img,door2Img,door3Img;
var groundImg;

function preload(){
  boyImg = loadImage("boy.png");
  groundImg = loadImage("wall.png");
  door1Img = loadImage("door1.png");
  door2Img = loadImage("door2.png");
  door3Img = loadImage("door3.png");
}

function setup() {
  createCanvas(1200,800);
  
 boy= createSprite(600, 600, 50, 50);
 boy.addImage(boyImg);
 //boy.x=World.mouseX;
 //boy.y=World.mouseY;
 boy.scale=0.8;

 door1=createSprite(300,200,50,50);
 door1.addImage(door1Img);
 door1.scale=1.3;

 door2=createSprite(600,200,50,50);
 door2.addImage(door2Img);
 door2.scale=1.3;

 door3=createSprite(900,200,50,50);
 door3.addImage(door3Img);
 door3.scale=1.3;
}

function draw() {
  background(groundImg);
  stroke("white");
  fill("yellow")
  textSize(30); 
  text("Choose any one of the door",430,400); 
  drawSprites();
}