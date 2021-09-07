const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var player, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var platform1,platform2,platform3,platform4;
var box1, box2, box3, playerjump;
var arrrowSprite;
var gameState = "PLAY";
var level = "level1";
var flag=0
function setup() {
  var canvas = createCanvas(800, 600);

  player = createSprite(40, 200, 20, 20);

  engine = Engine.create();
  world = engine.world;






  gateSprite = createSprite(400, 500, 100, 20);
  wallSprite1 = createSprite(10, 160, 20, 260)
  wallSprite2 = createSprite(340, 20, 650, 20);
  wallSprite3 = createSprite(115, 250, 20, 200);
  wallSprite4 = createSprite(200, 340, 190, 20);
  wallSprite5 = createSprite(50, 340, 110, 20)
  wallSprite6 = createSprite(200, 120, 20, 200);
  wallSprite7 = createSprite(305, 250, 20, 200);
  wallSprite8 = createSprite(400, 160, 20, 260);
  wallSprite9 = createSprite(305, 250, 20, 200);
  wallSprite10 = createSprite(435, 340, 390, 20);
  wallSprite11 = createSprite(605, 170, 20, 200);
  wallSprite12 = createSprite(615, 380, 20, 100);
  wallSprite13 = createSprite(695, 240, 20, 360);
  boxSprite1 = createSprite(120, 60, 20, 20);
  boxSprite2 = createSprite(520, 40, 20, 20);
  boxSprite3 = createSprite(520, 320, 20, 20);
  arrrowSprite = createSprite(520, 290, 5, 30)

  wall1 = createSprite(400, 560, 900, 20);
    playerjump = createSprite(30, 100, 50, 10)
    platform1=createSprite(300,300,80,20)
    
wall1.visible=false
playerjump.visible=false
platform1.visible=false

  World.add(world, player)



  Engine.run(engine);


}

function draw() {
  background("black");
  rectMode(CENTER);
  playerjump.bounceOff(wall1);

  if (level === "level1") {
      background("black");
    if (gameState === "PLAY") {
      if (keyDown(DOWN_ARROW)) {
        player.y = player.y + 7;
      }
      if (keyDown(UP_ARROW)) {
        player.y = player.y - 6;
      }
      if (keyDown(LEFT_ARROW)) {
        player.x = player.x - 7;
      }
      if (keyDown(RIGHT_ARROW)) {
        player.x = player.x + 7;
      }

      if (keyDown(LEFT_ARROW)) {
        arrrowSprite.velocityX = 0;
        arrrowSprite.velocityY = 4;
      }
      if (keyDown(LEFT_ARROW)) {
        arrrowSprite.velocityY = -4;
        arrrowSprite.velocityX = 0;
      }

      if (player.isTouching(arrrowSprite)) {
        gameState = "END"
      }

      player.collide(wallSprite1);
      player.collide(wallSprite2);
      player.collide(wallSprite3);
      player.collide(wallSprite4);
      player.collide(wallSprite5);
      player.collide(wallSprite6);
      player.collide(wallSprite7);
      player.collide(wallSprite8);
      player.collide(wallSprite9);
      player.collide(wallSprite10);
      player.collide(wallSprite11);
      player.collide(wallSprite12);
      player.collide(boxSprite1);
      player.collide(boxSprite2);
      player.collide(boxSprite3);
      arrrowSprite.bounceOff(boxSprite1);
      arrrowSprite.bounceOff(boxSprite2);
      arrrowSprite.bounceOff(wallSprite10)
      arrrowSprite.bounceOff(wallSprite8)
      if (player.isTouching(gateSprite)) {
        level = "level2";

      }
    }

    if (gameState === "END") {

    }

  }//level 1 ends here

  if (level === "level2"&&flag==0) {
    background("blue");
    
    wallSprite1.visible = false;
    wallSprite2.visible = false;
    wallSprite3.visible = false;
    wallSprite4.visible = false;
    wallSprite5.visible = false;
    wallSprite6.visible = false;
    wallSprite7.visible = false;
    wallSprite8.visible = false;
    wallSprite9.visible = false;
    wallSprite10.visible = false;
    wallSprite11.visible = false;
    wallSprite12.visible = false;
    wallSprite13.visible = false;
    boxSprite1.visible = false;
    boxSprite2.visible = false;
    boxSprite3.visible = false;
    arrrowSprite.visible = false;
    gateSprite.visible = false;
    player.visible = false;
    
    
    flag=1
    wall1.visible=true
playerjump.visible=true
platform1.visible=true
    wall1.shapeColor="white"
    playerjump.shapeColor="blue"
    platform1.shapeColor="white"
   
   
    
    playerjump.velocityY = 3;
    
    

  }

  if(flag==0){
   
  }
 
  drawSprites();

}

function reset() {

}
