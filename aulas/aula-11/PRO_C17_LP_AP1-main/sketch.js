var Trex,TrexRunning;

var ground;

var groundImg;

var invisibleground;

var cloud,cloudImg;

//preload carrega as midías do jogo 
function preload(){
  TrexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
   
  groundImg = loadImage("ground2.png");

  cloudImg = loadImage("cloud.png");
}
//setup faz a aconfiguração
function setup(){

  createCanvas(600,200);
  
  Trex = createSprite(50,160,20,50);
  Trex.addAnimation("Runner",TrexRunning);
  Trex.scale = 0.5;

  ground = createSprite(300,170,600,2);
  ground.addImage("ground",groundImg);

  invisibleground = createSprite(300,190,600,2);
  invisibleground.visible = false;

 
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");


  ground.velocityX = -10;

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space") && Trex.y > 164){
    Trex.velocityY = -11;

  }

    Trex.velocityY = Trex.velocityY +0.5;
  
    Trex.collide(invisibleground);

    createCloud();

    
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  drawSprites();

}

function createCloud(){

  if(frameCount %60 === 0){
    cloud = createSprite(600,random(10,100),40,10);
    cloud.velocityX = -3;
    cloud.addImage(cloudImg);
    cloud.scale = random(0.4,1.4);
    cloud.depth = Trex.depth -1;

  }
  
}
