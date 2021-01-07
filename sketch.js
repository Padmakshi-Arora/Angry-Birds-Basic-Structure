const World = Matter.World;
const Bodies= Matter.Bodies;
const Engine = Matter.Engine;
const Body = Matter.Body;

var log1,log2,log3,log4;
var pig1,pig2;
var engine, world;
var box1,box2;
var ground;
var box3,box4,box5;
var bird;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,15);

  box1 = new Box(730,350,50,50);
  pig1 = new Pig(800,350);
  box2 = new Box(870,350,50,50);
  log1 = new Log(800,310,200,PI/2);
  //PI=180 degrees
  box3 = new Box(730,270,50,50);
  pig2 = new Pig(800,270);
  box4 = new Box(870,270,50,50);
  log2 = new Log(800,230,200,PI/2);

  log3 = new Log(760,170,150,PI/7);
  box5 = new Box(800,190,50,50);
  log4 = new Log(840,170,150,-PI/7);

  bird = new Bird(100,200);

  
}

function draw() {
  background(0); 
  
  Engine.update(engine);
  
  ground.display();
  
  box1.display();
  pig1.display();
  box2.display();
  log1.display();

  box3.display();
  pig2.display();
  box4.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  bird.display();
 }














