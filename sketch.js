var player,playerImage
var floor,floorImage
var Solo


function preload(){

  floorImage = loadImage("./assets/fundo.png")
}

function setup(){

  createCanvas(1500,650);

  floor = createSprite(width/2,height/2)
  floor.addImage(floorImage)

  player = createSprite(50,50,10,10);
  //player.addImage(jonhImage)
  //player.scale = 0.1

  Solo = createSprite(width/2,height-50,1500,105)
  
  Solo.visible = false




  
}

function draw() {
  
  background("light_blue");

  if (keyDown("up_arrow")&& player.y>=400){
    player.velocityY = -10
  }
  player.velocityY = player.velocityY +0.5

  if (keyDown("left_arrow")){
    //player.velocityX = -5
    player.x = player.x -5
  }

  if (keyDown("right_arrow")){
    //player.velocityX = +5
    player.x = player.x +5
  }

   player.collide(Solo);

  drawSprites();
        
}
