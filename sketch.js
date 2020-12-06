const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var phyeng,myworld;
var ground1;
var physicsengine;

var box1;
var box2;
var box3;
var box4;
var box5;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;

function setup() {
  createCanvas(1000,500);     
  
    phyeng  =  Engine.create();      // phyeng.world
    myworld = phyeng.world;

    box1 = new Box(500,450,60,60);
  
    box2 = new Box(700,450,60,60);

    box3 = new Box(500,350,60,60);
    
    box4 = new Box(700,350,60,60);

    box5 = new Box(600,300,60,60)

    ground1 = new Ground(500,480,1000,10);

    pig1 = new Pig(600,450);

    pig2 = new Pig(600,350);

    log1 = new Log(600,400,300,PI/2);

    log2 = new Log(600,300,300,PI/2)

    log3 = new Log(550,250,100,PI/7);

    log4 = new Log(670,250,100,-PI/7)

    bird1 = new Bird(400,300)

    
}

function draw() {
  Engine.update(phyeng)
  background(0);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();
}