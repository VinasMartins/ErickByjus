var Trex, TrexRunning;

var ground;

var groundImg;

var invisibleground;

var cloud, cloudImg;

var obstacle, obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6;

var record = 0;

var score = 0;

var play = 1;

var end = 0;

var gameState = play;

var obstaclegp,cloudgp;

var Trexcollide;

var gameOver,gameOverImg;

var restart,restartImg;

var jumpSound,deathSound,pointSound;

//preload carrega as midías do jogo 
function preload() {
  TrexRunning = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  groundImg = loadImage("ground2.png");

  cloudImg = loadImage("cloud.png");

  obstacleImg1 = loadImage("obstacle1.png");
  obstacleImg2 = loadImage("obstacle2.png");
  obstacleImg3 = loadImage("obstacle3.png");
  obstacleImg4 = loadImage("obstacle4.png");
  obstacleImg5 = loadImage("obstacle5.png");
  obstacleImg6 = loadImage("obstacle6.png");

  Trexcollide = loadAnimation("trex_collided.png");

  gameOverImg = loadImage("gameOver.png");

  restartImg = loadImage("restart.png");

  jumpSound = loadSound("jump.mp3");

  //deathSound = loadSound("die.mp3");

  pointSound = loadSound("checkpoint.mp3");

}
//setup faz a aconfiguração
function setup() {

  createCanvas(600, 200);

  Trex = createSprite(50, 160, 20, 50);
  Trex.addAnimation("Runner", TrexRunning);
  Trex.addAnimation("Collide",Trexcollide);
  Trex.scale = 0.5;
  Trex.debug = false;
  Trex.setCollider("circle",-5,15,30);

  ground = createSprite(300, 170, 600, 2);
  ground.addImage("ground", groundImg);

  invisibleground = createSprite(300, 190, 600, 2);
  invisibleground.visible = false;

  obstaclegp = new Group(); 

  cloudgp = new Group();

  gameOver = createSprite(300,80);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  restart = createSprite(300,120);
  restart.addImage(restartImg);
  restart.scale = 0.5;
  restart.visible = false;

}
//draw faz o movimento, a ação do jogo
function draw() {
  background("#f0f9f7");

  textSize(18);
  fill("black");
  text("Score: " + score, 450, 80);
  text("Record: " + record, 450, 100);



  if (gameState === play) {
    score += Math.round(frameCount / 60);

    ground.velocityX = -(4+3*score /100);
  
    if(score > 0 && score %100 === 0){
      pointSound.play();

    }

    

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (keyDown("space") && Trex.y > 164) {
      Trex.velocityY = -11;
      jumpSound.play();

    }

    createCloud();

    createObstacle();


  }

  if(Trex.isTouching(obstaclegp)){
    gameState = end;
    deathSound.play();
  }

  if (gameState === end) {
    Trex.changeAnimation("Collide",Trexcollide);
    ground.velocityX = 0;
    cloudgp.setVelocityXEach(0);
    obstaclegp.setVelocityXEach(0);
    cloudgp.setLifetimeEach(-1);
    obstaclegp.setLifetimeEach(-1);
    gameOver.visible = true;
    restart.visible = true;

    if(record < score){
      record = score;
    }

    if(mousePressedOver(restart)){
      gameState = play;
      gameOver.visible = false;
      restart.visible = false;
      obstaclegp.destroyEach();
      cloudgp.destroyEach();
      Trex.changeAnimation("Runner", TrexRunning);

    }
  
  }

  Trex.velocityY = Trex.velocityY + 0.5;

  Trex.collide(invisibleground);


  //coordenadas do mouse na tela
  text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
  drawSprites();

}

//criando nuvens
function createCloud() {

  if (frameCount % 60 === 0) {
    cloud = createSprite(600, random(10, 100), 40, 10);
    cloud.velocityX = -(4+score /100);
    cloud.addImage(cloudImg);
    cloud.scale = random(0.4, 1.4);
    cloud.depth = Trex.depth - 1;
    cloud.lifetime = 230;
    cloudgp.add(cloud);


  }

}

function createObstacle() {

  if (frameCount % 60 === 0) {
    obstacle = createSprite(600, 170, 40, 10);
    obstacle.velocityX = -(4+score /100);
    obstacle.lifetime = 230;
    obstaclegp.add(obstacle);
    obstacle.scale = 0.5;

    var sorting = Math.round(random(1, 6));

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
