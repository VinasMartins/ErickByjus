
//Declare a variável para PLAY e END
var play = 1;

var end = 0;

//Atribua o valor de gameState como PLAY

var gameState = play;

var bow , arrow, background, redB, blueB, pinkB, greenB,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}


function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
  redB = new Group();
  blueB = new Group();
  pinkB = new Group();
  greenB = new Group();
 
  arrowGroup = new Group();

  
}

function draw() {
  background(0);

  //Adicione a condição para gameState = PLAY
  if(gameState === play){

    bow.y = World.mouseY;
  // solo em movimento
    scene.velocityX = -3;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    
    // soltar arco quando a tecla espaço for pressionada
    if (keyDown("space")) {
      createArrow();
    }
    
    //criando inimigos continuamente
    var select_balloon = Math.round(random(1,4));
    
    if (World.frameCount % 100 == 0) {
      switch(select_balloon ){
        case 1:redBalloon();
        break;
        case 2:blueBalloon();
        break;
        case 3:pinkBalloon();
        break;
        //Declare a variável para PLAY e END
        var play = 1;
        
        var end = 0;
        
        //Atribua o valor de gameState como PLAY
        
        var gameState = play;
        
        var bow , arrow, background, balloonB,arrowGroup;
        var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
        
        var score = 0;
        function preload(){
          
          backgroundImage = loadImage("background0.png");
          
          arrowImage = loadImage("arrow0.png");
          bowImage = loadImage("bow0.png");
          red_balloonImage = loadImage("red_balloon0.png");
          green_balloonImage = loadImage("green_balloon0.png");
          pink_balloonImage = loadImage("pink_balloon0.png");
          blue_balloonImage = loadImage("blue_balloon0.png");
          
        }
        
        
        function setup() {
          createCanvas(400, 400);
          
          //crie o fundo
          scene = createSprite(0,0,400,400);
          scene.addImage(backgroundImage);
          scene.scale = 2.5;
          
          // criando arco para a flecha
          bow = createSprite(380,220,20,50);
          bow.addImage(bowImage); 
          bow.scale = 1;
          
          score = 0;
          balloonB = new Group();
         
          arrowGroup = new Group();
        
          
        }
        
        function draw() {
          background(0);
        
          //Adicione a condição para gameState = PLAY
          if(gameState === play){
        
            bow.y = World.mouseY;
          // solo em movimento
            scene.velocityX = -3;
        
            if (scene.x < 0){
              scene.x = scene.width/2;
            }
            
            // soltar arco quando a tecla espaço for pressionada
            if (keyDown("space")) {
              createArrow();
            }
            
            //criando inimigos continuamente
            var select_balloon = Math.round(random(1,4));
            
            if (World.frameCount % 100 == 0) {
              switch(select_balloon ){
                case 1:createBalloon(which_balloon=red_balloonImage, balloon_scale=0.1, balloon_velocityX=6);
                break;
                case 2:createBalloon(which_balloon=blue_balloonImage, balloon_scale=0.1, balloon_velocityX=4);
                break;
                case 3:createBalloon(which_balloon=pink_balloonImage, balloon_scale=1, balloon_velocityX=3);
                break;
                case 4:createBalloon(which_balloon=green_balloonImage, balloon_scale=0.1, balloon_velocityX=5);
                break;
                default:break;
              }
            }
        
            if(arrowGroup.isTouching(balloonB)){
              destroyBalloon(balloonB);
            }
        
            if(balloonB.isTouching(bow)){
              bow.destroy();
              gameState = end;
            }
          }
        
          //escreva uma condição para o estado END
          if(gameState === end){
            arrowGroup.destroyEach();
            balloonB.destroyEach();
            scene.velocityX = 0;
          }
         
          drawSprites();
          textSize(18);
          fill("black");
          text("score: " + score, 200, 20);
        
        }
        
        
        function createBalloon(which_balloon, balloon_scale, balloon_velocityX) {
          var balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
          balloon.addImage(which_balloon);
          balloon.velocityX = balloon_velocityX;
          balloon.lifetime = 150;
          balloon.scale = balloon_scale;
          balloonB.add(balloon);
        }
        
        // Criar flechas para o arco
         function createArrow() {
          var arrow= createSprite(100, 100, 60, 10);
          arrow.addImage(arrowImage);
          arrow.x = 360;
          arrow.y=bow.y;
          arrow.velocityX = -4;
          arrow.lifetime = 100;
          arrow.scale = 0.3;
          arrowGroup.add(arrow);
        
        }
        
        function destroyBalloon(which_balloon){
          which_balloon.destroyEach();
          arrowGroup.destroyEach();
          score += 1;
        }
        
        case 4:greenBalloon();
        break;
        default:break;
      }
    }

    if(arrowGroup.isTouching(redB)){
      destroyBalloon(redB);
    }

    if(arrowGroup.isTouching(blueB)){
      destroyBalloon(blueB);
    }

    if(arrowGroup.isTouching(pinkB)){
      destroyBalloon(pinkB);
    }

    if(arrowGroup.isTouching(greenB)){
      destroyBalloon(greenB);
    }

    if(redB.isTouching(bow)||blueB.isTouching(bow)||pinkB.isTouching(bow)||greenB.isTouching(bow)){
      bow.destroy();
      gameState = end;
    }
  }

  //escreva uma condição para o estado END
  if(gameState === end){
    arrowGroup.destroyEach();
    redB.destroyEach();
    blueB.destroyEach();
    pinkB.destroyEach();
    greenB.destroyEach();
    scene.velocityX = 0;
  }
 
  drawSprites();
  textSize(18);
  fill("black");
  text("score: " + score, 200, 20);

}


// function createBalloon(which_balloon, balloon_scale, balloon_velocityX) {
//   var balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
//   balloon.addImage(which_balloon);
//   balloon.velocityX = balloon_velocityX;
//   balloon.lifetime = 150;
//   balloon.scale = balloon_scale;
//   balloonB.add(balloon);
// }

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}

function destroyBalloon(which_balloon){
  which_balloon.destroyEach();
  arrowGroup.destroyEach();
  score += 1;
}
