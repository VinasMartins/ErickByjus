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

//desenha sprites
function draw() {
  background(0);

  //criando paredes e definindo o coelho para colidir com as paredes.
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //a variavel armazena o arredondamento do numero aleatorio de 1 até 3.
  var sorting = Math.round(random(1,3));
  
  //movendo o coelho no eixo x do mouse.
  rabbit.x = World.mouseX;
  
  //valida se o modulo 80 do frameCount retorna 0. 
  //E se for verifica se sorting é = 1 e entao chama a func createApples.
  //se nao verifica se sorting é = 2 e entao chama a funcao createOrange.
  //caso contrario chama a func createRed.
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
//criando maçãs com o tamanho,a imagem,avelocidade.
function createApples(){
  apple = createSprite(random(50,350),40,40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifeTime = 150;
  
}

//criando criando folha laranja com o tamanho,a imagem,avelocidade.
function createOrange(){
  orangeL = createSprite(random(50,350),40,40,10,10);
  orangeL.addImage(orangeImg);
  orangeL.scale = 0.07;
  orangeL.velocityY = 3;
  orangeL.lifeTime = 150;
  
}

////criando criando folha vermelha com o tamanho,a imagem,avelocidade.
function createRed(){
  red = createSprite(random(50,350),40,40,10,10);
  red.addImage(redImg);
  red.scale = 0.07;
  red.velocityY = 3;
  red.lifeTime = 150;
  
}