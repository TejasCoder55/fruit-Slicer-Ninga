var PLAY=1;
var END=0;
var Gamestate=1;
var monster;
var enem;
var sword1;
var fruit1,fruit2,fruit3,fruit4;
var score;
var gameoverI;
var knifeSwooshSound;
var gameOverSound;
function preload(){
  
sword1=loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
enem=loadAnimation("alien1.png","alien2.png");
 gameoverI=loadImage("gameover.png");
   knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(600,600);
sword=createSprite(40,200,20,20);
sword.scale=0.7;
sword.addImage("s",sword1);
  sword.x=200;
  sword.y=200;
  fruitGroup=createGroup();
enemyGroup=createGroup();
  score=0;
}


function draw(){
background("lightGreen");
text("score :"+score,500,50)

  if (Gamestate===PLAY){
      sword.y=World.mouseY;
  sword.x=World.mouseX;
     
     enemy();
    fruits();
    
    if(fruitGroup.isTouching(sword)){
      knifeSwooshSound.play();
    fruitGroup.destroyEach();
    
  score=score+1;
  }

  
if (enemyGroup.isTouching(sword)){
  Gamestate=END;
  
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.setVelocityXEach(0);
  enemyGroup.setVelocityXEach(0);
  
  sword.addImage(gameoverI);
  sword.scale=1.1;
  sword.x=200;
  sword.y=200;
 
  gameOverSound.play();
}
}
drawSprites();
  }


  


function fruits(){
  if (World.frameCount%60===0){
    fruit=createSprite(400,200,20,20);
   fruit.scale=0.2;
    r=Math.round(random(1,4))
    if( r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else if(r==4){
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(100,340));
    fruit.velocityX=-7;
    fruit.lifetime=100;
    fruitGroup.add(fruit);
  }
  
}
function enemy(){
if(World.frameCount%200===0){
 monster=createSprite(400,200,20,20);
  monster.addAnimation("i" ,enem);
  monster.y=Math.round(random(100,300));
  monster.velocityY=8;
  monster.setLifetime=50;
  enemyGroup.add(monster);
}
}








