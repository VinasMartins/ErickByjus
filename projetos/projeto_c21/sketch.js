var space, imagemSpace;
var portal,imagemPortal,portalGrupo;
var planet, planetImg1, planetImg2, planetImg3, planetImg4,planetGrupo;
var foguete,imagemFoguete;
var blocoInvisivel, blocoInvisivelGp;
var gameState = "play";
var score = 0;

function preload(){
  imagemSpace = loadImage("space.png");
  imagemPortal = loadImage("portal.png");
  //carregar todas as imagens dos planetas aqui
  planetImg1 = loadImage("planet1.png");
  planetImg2 = loadImage("planet2.png");
  planetImg3 = loadImage("planet3.png");
  planetImg4 = loadImage("planet4.png");
  imagemFoguete = loadImage("rocket.png");
}

function setup(){
  createCanvas(600,600);
  space = createSprite(300,300);
  space.addImage("space",imagemSpace);
  space.velocityY = 3;

  foguete = createSprite(200,200,50,50);
  foguete.addImage(imagemFoguete);
  foguete.scale = 0.08;

  
  planetGrupo = new Group();
  portalGrupo = new Group();
  blocoInvisivelGp = new Group();


}

function draw(){
  background(0);
  
  // text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);

  if(gameState === "play"){
    // if(frameCount %180 === 0)
    score += Math.round(getFrameRate() /60);
    if(space.y > 400){
      space.y = 300
    }

    createPlanet();
    //Ajustar bug da criacao do portal apenas depois de um periodo de jogo
    if (frameCount %20 === 0){
      createPortal()
    }

    if(foguete.isTouching(portalGrupo)){
      //setar a velocidade para acabar o jogo e colocar no gameState win
      foguete.velocityY = 0;
      gameState = "win";
    
    }

    if(foguete.isTouching(planetGrupo)||foguete.y > 600){
      foguete.destroy();
      gameState = "end";
    }

    drawSprites();
    // conforme for andando acumule e mostre a pontuação do foguete até o momento do jogo
    textSize(18);
    fill("blue");
    text("Pontuaçao: "+ score,450,80);
    

    if(keyDown("left_arrow")){
      foguete.x = foguete.x -3;
    }

    if(keyDown("right_arrow")){
      foguete.x = foguete.x +3;
    }

    if(keyDown("space")){
      foguete.velocityY = -10;

    }

    foguete.velocityY +=0.4;

  }


  if(gameState === "end"){
    stroke("red");
    fill("red");
    textSize(30);
    text("Você perdeu o jogo!\nSua pontuação foi de: "+score,150,300);
  }
    
  // criar um if para ver se o game state é win se for exibir uma mensagem de voce ganhou o jogo com a cor verde

  if(gameState === "win"){
    planetGrupo.destroyEach();
    textSize(30);
    stroke("green");
    fill("green");
    text("Voce venceu o jogo!\nSua pontuação foi de: "+score,150,300);
  }

}

function createPlanet(){
  if(frameCount %150 === 0){
    planet = createSprite(Math.round(random(60, 540)), 0, 40, 40);
    planet.velocityY = +(2+score /100);
    planet.lifetime = 800;
    planet.scale = 0.05;

    var sorting = Math.round(random(1, 4));
    // criar case para gerar diversos planetas diferentes em locais aleatórios no jogo
    switch(sorting) {
      case 1: planet.addImage(planetImg1);

      break;

      case 2: planet.addImage(planetImg2);

      break;

      case 3: planet.addImage(planetImg3);

      break;

      case 4: planet.addImage(planetImg4);

      break;

    }
    
    blocoInvisivel = createSprite(planet.x,planet.y);
    blocoInvisivel.visible = false;
    blocoInvisivel.width = planet.width;
    blocoInvisivel.height = 2;
    blocoInvisivel.velocityY = planet.velocityY;
    blocoInvisivel.lifetime = 800;
    blocoInvisivelGp.add(blocoInvisivel);

    planetGrupo.add(planet);
  }
}

function createPortal(){
  // corrigir o bug do portal aparecer junto com o planeta, o portal deve aparecer depois que alguns planetas forem desviados (random?)
  portal = createSprite(Math.round(random(60, 540)), 0, 40, 40);

  portal.velocityY = 1;

  portal.addImage(imagemPortal);
  portal.scale = 0.5;
  portal.width = 2;

  portal.lifetime = 800;
  portalGrupo.add(portal);

}
