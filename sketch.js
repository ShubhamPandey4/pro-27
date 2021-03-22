var bob1, bob2, bob3, bob4, bob5;
var roof, bobObject1, roofObject;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 30;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(739, 500, 30);
    bob2 = new Bob(680, 500, 30);
    bob3 = new Bob(620, 500, 30);
    bob4 = new Bob(500, 500, 30);
    bob5 = new Bob(560, 500, 30);
    
   roof = new Roof(620,100,500,50);
   rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  rope1.display();


 
  drawSprites();
 
}



