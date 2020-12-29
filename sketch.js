
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg;
var box1, box2, box3;
var ground;
var dustbin,dustbinImg;


function preload()
{
	dustbinImg = loadImage("Dustbin.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(600,510,100,180);
	dustbin.addImage(dustbinImg,"Dustbin");
	dustbin.scale = 0.5;
	World.add(world, dustbin);

	paper = new Paper(100,100,20);
	
	ground = new Ground(300,600,1000,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	paper.display();

	ground.display();

	
	dustbin.display();

  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:40, y:-40})

	}


}



