var bgimg;
var bottleimg;
var redbottleimg;
var gunimg;
var bulletimg;
var gun,bullet,redbottle,bottle;
var bg;
var redGroup,greenGroup,bulletGroup;
var score=0;
var gamestate=0;
var PLAY=1,END=2;

function preload(){
  bgimg=loadImage("bgimg.jpg");
  bottleimg=loadImage("bottleimg.png");
  redbottleimg=loadImage("red_bottle_img.png")
  bulletimg=loadImage("bulletimg.png")
  gunimg=loadImage("gun_img.png");

}

function setup() {
  createCanvas(1000,700);

  gun=createSprite(900,400);
  gun.addImage("gun",gunimg);
  gun.scale=0.5;

redGroup=new Group();
greenGroup=new Group();
//bulletGroup=new Group();

gamestate=PLAY;

}

function draw() {
  background(bgimg);  

  if(gamestate==PLAY){

    gun.y=World.mouseY;
  
  spawn_bottles();
  Spawn_bottlesred();

  if(mousePressedOver(gun)){
   bullet= spawn_bullet();

  }

    if(greenGroup.isTouching(bullet)){
      score=score+2;
     // greenGroup.destroyEach();
    }
  
    if(redGroup.isTouching(bullet)){
       gamestate==END;
    }}

    if(gamestate==END){
    
      background(0);
    
    }
    drawSprites();
    textSize(20);
    text("Score="+score,900,100);
  }

  function spawn_bullet(){
    bullet=createSprite(900,400)
  bullet.addImage("bullet",bulletimg);
  //bulletGroup.add(bullet);
  bullet.x=gun.x;
  bullet.y=gun.y;
  bullet.scale=0.2;
  bullet.velocityX=-8;
  return bullet;
}


function spawn_bottles(){
  if(World.frameCount%100==0){
    bottle=createSprite(40,10);
    var a=Math.round(random(300,600));
    bottle.y=a;
    bottle.addImage("bottleimage",bottleimg);
    bottle.scale=0.2;
    bottle.velocityX=4;
    bottle.lifetime=180;
    greenGroup.add(bottle);
  }
  }

  function Spawn_bottlesred(){
    if(World.frameCount%443==0){
      redbottle=createSprite(40,10);
      var b=Math.round(random(300,600));
      redbottle.y=b;
      redbottle.addImage("redbottleimage",redbottleimg);
      redbottle.scale=0.2;
      redbottle.velocityX=4;
      redbottle.lifetime=180;
      redGroup.add(redbottle);

    }
  
  }

  
