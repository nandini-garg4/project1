const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(40,780,900,16)
}

function draw() {
  background("black");  
  //drawSprites()
  for(var k=0;k<=width;k=k+80){

    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  ground.display()
}