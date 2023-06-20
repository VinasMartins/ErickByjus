const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var engine,world;

var ball;

var ground;

var button;

var fun;

var angle = 60;

function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    button = createImg("up.png");
    button.position(250,60);
    button.size(60,60);
    button.mouseClicked(vForce);

    var ballOpitions ={restitution:1,frictionAir:0.01}

    ball = Bodies.circle(100,10,20,ballOpitions);
    
    World.add(world,ball);

    var opitions = {isStatic:true}

    ground = Bodies.rectangle(100,400,600,20,opitions);

    World.add(world,ground);

    fun = Bodies.rectangle(100,300,100,20,opitions);
    World.add(world,fun);

}

function draw(){
    background("black");

    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);

    push(Matter.Body.rotate(fun,angle));
    translate(fun.position.x,fun.position.y);
    rotate(angle);
    rect(0,0,100,20);
    pop();
    angle +=0.1;
    
}

function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.03,y:-0.03})

}

