var space, imagemSpace;
var portal,imagemPortal,portalGrupo;
var planet,imagemPlanet,planetGrupo;
var foguete,imagemFoguete;
var blocoInvisivel, blocoInvisivelGp;
var gameState = "play"

function preload(){
  imagemSpace = loadImage("space.png");
  imagemPortal = loadImage("portal.png");
  imagemPlanet = loadImage("planet1.png");
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
  blocoInvisivelGp = new Group();


}

function draw(){
  background(0);

    if(gameState === "play"){
      if(space.y > 400){
        space.y = 300
      }

      createAll();

      if(foguete.isTouching(blocoInvisivelGp)){
        foguete.velocityY = 0;
        //setar a velocidade para acabar o jogo e colocar no gameState win
      }

      if(foguete.isTouching(planetGrupo)||foguete.y >600){
        foguete.destroy();
        gameState = "end";
      }

      drawSprites();
      // conforme for andando acumule e mostre a pontuação do foguete até o momento do jogo

      if(keyDown("left_arrow")){
        foguete.x = foguete.x -3;
      }

      if(keyDown("right_arrow")){
        foguete.x = foguete.x +3;
      }

      if(keyDown("space")){
        foguete.velocityY = -10;

      }

      foguete.velocityY +=0.8;

    }

    // criar case para gerar diversos planetas diferentes
    // corrigir o bug do portal aparecer junto com o planeta, o portal deve aparecer depois que alguns planetas forem desviados (random?)

    if(gameState === "end"){
      stroke("red");
      fill("red");
      textSize(30);
      text("Você perdeu o jogo!",200,300);
    }
    // criar um if para ver se o game state é win se for exibir uma mensagem de voce ganhou o jogo com a cor verde

  }

  function createAll(){
    if(frameCount %240 === 0){
      portal = createSprite(200,-50);

      planet = createSprite(200,10);
      blocoInvisivel = createSprite(200,15);
      blocoInvisivel.visible = false;

      portal.velocityY = 1;
      planet.velocityY = 2;
      blocoInvisivel.width = planet.width;
      blocoInvisivel.height = 2;
      blocoInvisivel.velocityY = 1;

      portal.addImage(imagemPortal);
      planet.addImage(imagemPlanet);
      portal.scale = 0.5;
      portal.width = 2;
      planet.scale = 0.05;
      foguete.depth = portal.depth;
      foguete.depth +=1;

      portal.x = Math.round(random(120,400));
      planet.x = planet.x;
      blocoInvisivel.x = planet.x;
      // blocoInvisivel.x = portal.x;

      portal.lifetime = 800;
      planet.lifetime = 800;
      blocoInvisivel.lifetime = 800;

      planetGrupo.add(planet);
      blocoInvisivelGp.add(blocoInvisivel);

    }  

          
  }
