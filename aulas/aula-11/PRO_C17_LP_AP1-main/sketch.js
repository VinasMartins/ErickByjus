var trex,trexRunning;

var ground;


//preload carrega as midías do jogo 
function preload(){
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  
}
//setup faz a aconfiguração
function setup(){

  createCanvas(600,200);
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("Runner",trexRunning);
  trex.scale = 0.5;

  ground = createSprite(300,180,600,2);
 
  
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");

  if(keyDown("space")){
    trex.velocityY = -11;

  }

  trex.velocityY = trex.velocityY +0.5;
  
 
  trex.collide(ground);
  
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  drawSprites();

}
