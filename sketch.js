function preload(){
  backGroundImg = loadImage("background.png")
  PlayerImg = loadImage("pc.png")
  TaggerImg = loadImage("npc.png")
  obstacleImg = loadImage("Boulder.png")
}
function setup(){
  createCanvas(600,600)
  backGround = createSprite(0,0,600,600)
  backGround.addImage(backGroundImg)
  backGround.scale = 3
  player = createSprite(250,500,10,10)
  player.addImage(PlayerImg)
  player.scale = 0.3
  invisGround = createSprite(200,500,2000,10)
  invisGround.visible = false 
}
function draw(){
  background("brown")
  backGround.velocityX = -2
  if(backGround.x<0){
    backGround.x = 300
  }
if(keyDown("Space")){
  player.velocityY = -10
}
player.velocityY = player.velocityY+0.8
player.collide(invisGround)
  drawSprites()
}