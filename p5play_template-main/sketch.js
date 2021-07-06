var box;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,30,30);
box.shapeColor='violet'
}

function draw() 
{
  background(30);
  /*if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5
  }
  if(KeyIsDown(UP_ARROW)){
    box.position.y=box.posiiton.y-5
  }
  if(KeyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+5
  }*/

drawSprites();
}




