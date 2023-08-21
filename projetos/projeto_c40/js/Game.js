class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    animal1 = createSprite(width / 2 - 50, height - 100);
    animal1.addImage(" animal1",  animal1_img);
    animal1.scale = 0.07;

    animal2 = createSprite(width / 2 + 100, height - 100);
    animal2.addImage(" animal2",  animal2_img);
    animal2.scale = 0.07;

    animals = [ animal1,  animal2];

    // C38 TA
    bush = new Group();
    grass = new Group();

    // Adicione o sprite de combustível ao jogo
    this.addSprites(bush, 4, bushImage, 0.02);

    // Adicione o sprite de moeda ao jogo
    this.addSprites(grass, 18, grassImage, 0.09);
  }

  // C38 TA
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);

      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        animals[index - 1].position.x = x;
        animals[index - 1].position.y = y;

        // C38  SA
        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          this.handleBush(index);
          this.handleGrass(index);

          // Altere a posição da câmera na direção y
         }
      }

      // manipulação dos eventos do teclado
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }

      drawSprites();
    }
  }

  handleBush(index) {
    // Adicione combustível
    animals[index - 1].overlap(bush, function(collector, collected) {
      player.bush = 185;
      //collected (coletado) é o sprite no grupo de colecionáveis que desencadeia
      //o evento
      collected.remove();
    });
  }

  handleGrass(index){

    animals[index - 1].overlap(grass, function(collector, collected) {
      player.score += 21;
      player.update();
      collected.remove();
    });


  //   animals[index - 1].overlap(grass, function(collected, collector) {
  //     player.score += 21;
  //     player.update();
  //     collector.remove();
  //   });


  //   animals[index].overlap(grass, function(collector, collected) {
  //     player.score += 21;
  //     player.update();
  //     collected.update();
  //   });

  }

    
}
