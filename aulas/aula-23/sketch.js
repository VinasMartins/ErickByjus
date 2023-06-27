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

var fun1,fun2,fun3,fun4;

var ground3,ground4;

var con;

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

    con = Matter.Constraint.create({
        pointA:{x:200,y:100},
        bodyB:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
    })
    World.add(world,con);

    var opitions = {isStatic:true}

    ground = Bodies.rectangle(100,400,600,20,opitions);
    World.add(world,ground);

    fun = Bodies.rectangle(100,300,100,20,opitions);
    World.add(world,fun);

    fun1 = new Ground(50,370,50,30);
    fun2 = new Ground(150,370,50,30);
    fun3 = new Ground(250,370,50,30);
    fun4 = new Ground(350,370,50,30);

    ground3 = Bodies.rectangle(10,200,20,400,opitions);
    World.add(world,ground3);

    ground4 = Bodies.rectangle(390,200,20,400,opitions);
    World.add(world,ground4);

}

function draw(){
    background("black");

    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
    rect(ground3.position.x,ground3.position.y,20,400);
    rect(ground4.position.x,ground4.position.y,20,400);

    push(Matter.Body.rotate(fun,angle));
    translate(fun.position.x,fun.position.y);
    rotate(angle);
    rect(0,0,100,20);
    pop();
    angle +=0.1;

    fun1.display();
    fun2.display();
    fun3.display();
    fun4.display();

    push();
    strokeWeight(5);
    stroke("red");
    line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
    pop();
    
}

function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

