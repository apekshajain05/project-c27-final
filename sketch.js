
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block,bob1,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var block_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World .add(world,ground);

block = Bodies.rectangle(200,100,200,30,block_options);
World.add(world,block);

var bob_options = {

  restitution : 1.0,
  density : 1.0

}

bob  = Bodies.circle(220,200,30,bob_options);
World.add(world,bob);


var options = {
  bodyA : bob,
  bodyB : block,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background("pink"); 
  Engine.update(engine);
fill("black");
text("Press SPACE to move the pendulum",20,30);
text("Press ENTER to release MouseOver",20,50);

  fill ("lightblue");
rectMode(CENTER);
rect(block.position.x,block.position.y,200,30);

fill("grey");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,25);


fill("lightgreen");
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,30);

strokeWeight(4);
stroke("white");
line(bob.position.x,bob.position.y,block.position.x,block.position.y)




if(keyCode===32){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode === 13){
bob.position.x = 200;

}

}


