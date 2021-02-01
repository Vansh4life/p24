
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var hammer1;
var plane1;
var stone1;
var rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer1 = new Hammer(400,350);

	plane1 = new Plane(400,680,800,50);

	stone1 = new Stone(400,350);

	rubber1 = new Rubber(400,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);

	hammer1.display();
	plane1.display();
	stone1.display();
	rubber1.display();
  
  drawSprites();
 
}



