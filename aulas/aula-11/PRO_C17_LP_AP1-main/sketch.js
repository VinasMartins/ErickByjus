var Trex,TrexRunning;

var ground;

var groundImg;

var invisibleground;

var cloud,cloudImg;

var obstacle,obstacleImg1,obstacleImg2,obstacleImg3,obstacleImg4,obstacleImg5,obstacleImg6;

//preload carrega as midías do jogo 
function preload(){
  TrexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
   
  groundImg = loadImage("ground2.png");

  cloudImg = loadImage("cloud.png");

  obstacleImg1 = loadImage("obstacle1.png");
  obstacleImg2 = loadImage("obstacle2.png");
  obstacleImg3 = loadImage("obstacle3.png");
  obstacleImg4 = loadImage("obstacle4.png");
  obstacleImg5 = loadImage("obstacle5.png");
  obstacleImg6 = loadImage("obstacle6.png");
  
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

    createObstacle();

    
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  drawSprites();

}

//criando nuvens
function createCloud(){

  if(frameCount %60 === 0){
    cloud = createSprite(600,random(10,100),40,10);
    cloud.velocityX = -3;
    cloud.addImage(cloudImg);
    cloud.scale = random(0.4,1.4);
    cloud.depth = Trex.depth -1;
    cloud.lifetime = 230;

  }
  
}

function createObstacle(){

  if(frameCount %60 === 0){
    obstacle = createSprite(600,170,40,10);
    obstacle.velocityX = -3;
    obstacle.lifetime = 230;
    obstacle.scale = 0.5;
    
    var sorting = Math.round(random(1,6));

    switch (sorting) {
      case 1: obstacle.addImage(obstacleImg1);
        
        break;

      case 2: obstacle.addImage(obstacleImg2);

        break;

      case 3: obstacle.addImage(obstacleImg3);

        break;

      case 4: obstacle.addImage(obstacleImg4);

        break;

      case 5: obstacle.addImage(obstacleImg5);

        break;

      case 6: obstacle.addImage(obstacleImg6);

        break;    
        
        
    }
  }

}
