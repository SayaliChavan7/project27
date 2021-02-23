
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var chain1,chain2,chain3,chain4,chain5;
var bob;
var bob1Diameter;


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof =new Roof(400,60,400,30);

	bob1 = new Bob(290,370);
	bob2 = new Bob(350,370);
	bob3 = new Bob(410,370);
	bob4 = new Bob(470,370);
	bob5 = new Bob(530,370);

	chain1 = new Chain(bob1.body,roof.body,-110,0)
	chain2 = new Chain(bob2.body,roof.body,-50,0)
	chain3 = new Chain(bob3.body,roof.body,10,0)
	chain4 = new Chain(bob4.body,roof.body,70,0)
	chain5 = new Chain(bob5.body,roof.body,130,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 

