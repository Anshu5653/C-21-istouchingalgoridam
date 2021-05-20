var movingRect, fixedRect;
var gameObj1,gameObj2,gameObj3;

function setup() {
  createCanvas(600,600);
  
  movingRect = createSprite(50, 100, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200,200,60,60)
  fixedRect.shapeColor = "green";

  gameObj1 = createSprite(100,200,30,30)
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(300,500,30,30)
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(200,400,30,30)
  gameObj3.shapeColor = "green";
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect,gameObj1)){
    movingRect.shapeColor = "red";
    gameObj1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
  }

  
  
  drawSprites();
}

