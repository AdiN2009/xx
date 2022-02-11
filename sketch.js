
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var back,Back;
var hero,Hero;
var villian,Villian;
var score;
var bullet,Bullet;
var BulletGroup;
var bomb,Bomb
var BombGroup;
var laser,Laser;
var LaserGroup;
var IB,IB2;
var xx;

function preload(){
    back = loadImage("images.png");
    hero = loadImage("superhero.png");
    villian = loadImage("villian.png");
    bullet = loadImage("bullet.png");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
    bomb = loadImage("bomb.png");
    laser = loadImage("laser.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  Back = createSprite(500,250);
  Back.addImage(back);
  Back.scale = 5;

  BulletGroup = createGroup();
  BombGroup = createGroup();
  LaserGroup = createGroup();



  Hero = createSprite(250,250,40,40);
  Hero.addImage(hero);
  Hero.scale= 0.1;

  Villian= createSprite(800,250,40,40);
  Villian.addImage(villian);
  Villian.scale= 0.1;



 
  Back.x=Back.width/2;

  score=0;
}


function draw() 
{
  background("white");
  Engine.update(engine);
  Back.velocityX= -4;
  
  if (Back.x <= 0){
    Back.x= Back.width/2;
    
  }



 

  if(score%20 ===0)
  {
    Bullet= createSprite(1400,100,40,40);
    Bullet.addImage(bullet);
    Bullet.velocityX = -10;
    Bullet.y=Math.round(random(10,700))
    Bullet.x=Math.round(random(700,1400))
    Bullet.scale= 0.09;
    BulletGroup.add(Bullet);
  }
  if(score == 50 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }



  if(score == 150 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 200 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 250 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 300 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 350 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 450 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 550 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 600 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 700 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 750 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 800 )
  {
    Bomb= createSprite(1400,100,40,40);
    Bomb.addImage(bomb);
    Bomb.velocityX = -10;
    Bomb.y=Math.round(random(10,800))
    Bomb.x=Math.round(random(700,1400))
    Bomb.scale= 0.6;
    BombGroup.add(Bomb);
    
  }
  if(score == 620 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 670 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 730 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 790 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 840 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 900 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 980 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 1060 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 1120 )
  {
    Laser= createSprite(1400,100,1000,10);
    Laser.addImage(laser);
    Laser.velocityX = -10;
    Laser.y=Math.round(random(10,800))
    Laser.x=Math.round(random(700,1400))
    Laser.scale= 0.6;
    LaserGroup.add(Laser);
    
  }
  if(score == 1200){
B = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
B.shapeColor ="black"
 win();
  
  }

  
 


 
  
  if(Hero.collide(BulletGroup)){
   gameOver();
   Hero.visible=false;
   
  }
  if(Hero.collide(BombGroup)){
    gameOver();
    Hero.visible=false;
    
   }
   if(Hero.collide(LaserGroup)){
    gameOver();
    Hero.visible=false;
    
   }
  
  drawSprites();
  
  mousePressed();

  textSize(40);
  text("score: "+ score,1300,50);
  score = score + Math.round(getFrameRate()/60);
  console.log(score);

  
}


function mousePressed()
{
  if (keyCode === 38){
    Hero.y = Hero.y-6
    ;
  }

  if (keyCode === 40){
    Hero.y = Hero.y +6;
  }
}

function gameOver(){
  xx = createSprite(400,400,7000,4000);
  
}


