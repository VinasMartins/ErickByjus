const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var engine,world;

var ball;

var ground;

function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ballOpitions ={restitution:1,frictionAir:0.2}

    ball = Bodies.circle(100,10,20,ballOpitions);
    
    World.add(world,ball);

    var opitions = {isStatic:true}

    ground = Bodies.rectangle(200,400,400,20,opitions);

    World.add(world,ground);

   
}

function draw(){
    background("black");

    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,200);
    
}

