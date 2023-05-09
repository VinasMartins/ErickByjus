var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  var sorting = Math.round(random(1,3));

  rabbit.x = World.mouseX;
  

  if(frameCount %80 === 0){
    if(sorting === 1){
      createApples();

    }
    else if(sorting === 2){
      createOrange();
    }
    else{
      createRed();
    }
  }

  drawSprites();
  
}

function createApples(){
  apple = createSprite(random(50,350),40,40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifeTime = 150;
  
}

function createOrange(){
  orangeL = createSprite(random(50,350),40,40,10,10);
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.07;
  orangeL.velocityY = 3;
  orangeL.lifeTime = 150;
  
}


function createRed(){
  red = createSprite(random(50,350),40,40,10,10);
  red.addImage(redImg);
  red.scale = 0.07;
  red.velocityY = 3;
  red.lifeTime = 150;
  
}