class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

    this.leaderboardTitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
    this.playerMoving = false;
  }
    getState (){
    var gameStateRef = database.ref ("gameState");
    gameStateRef.on ("value",function(data){
      gameState = data.val ();

    })
    }

    update (state){
      database.ref ("/").update ({
        gameState :state ,
        
      })
    }
 

  start() {
    player = new Player();
    playerCount = player.getCount ();
    form = new Form();
    form.display();
    
    car1 = createSprite (width/2-50 , height-100);
    car1.addImage ("car1",carimg1);
    car1.scale=0.07 ;

    car2 = createSprite (width/2+100 , height-100);
    car2.addImage ("car2",carimg2);
    car2.scale=0.07 ;

    cars = [car1,car2 ];
  }
   handleElements (){
    form.hide ();
    form.titleImg.position (40,50);
    form.titleImg.class ("gameTitleAfterEffect")

    this.resetTitle.html("Restart");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width/2+220,40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width/2+230,100);

    this.leaderboardTitle.html("Placar");
    this.leaderboardTitle.class("resetText");
    this.leaderboardTitle.position(width/3-60,40);

    this.leader1.class("leadersText");
    this.leader1.position(width/3-50,80);

    this.leader1.class("leadersText");
    this.leader1.position(width/3-50,130);
   }

  play () { 
    this.handleElements () ;
    this.handleResetButton();
    Player.getPlayersInfo ();
    player.getCarsAtEnd();

    
    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      this.showLife();
      this.showFuelBar();
      this.showLeaderBoard();

       //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          this.handleFuel(index);

         
   
          //alterar a posição da câmera na direção y
          camera.position.y = cars[index - 1].position.y;
        }
      }

      this.handlePlayerControls();

      const finishLine = height*6-100;

      if (player.positionY > finishLine) {
        gameState = 2;
        player.rank +=1;
        Player.updateCarsAtEnd(player.rank);
        player.update();
        this.showRank();
      }

      drawSprites ();
    }
  }

  handlePlayerControls() {
  
   
    if (keyIsDown(UP_ARROW)) {
      this.playerMoving = true;
      player.positionY += 10;
      player.update();
    }

    if (keyIsDown(LEFT_ARROW)&&player.positionX > width/3-50 || keyDown("A")&&player.positionX > width/3-50) {
      player.positionX -=5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW)&&player.positionX < width/2+300 || keyDown("D")&&player.positionX < width/2+300) {
      player.positionX +=5;
      player.update();
    }
  }

  handleResetButton(){
    this.resetButton.mousePressed(()=>{
      database.ref("/").set({
        playerCount:0,
        gameState:0,
        carsAtEnd:0,
        players:{},
      });

      window.location.reload();
    });
  }

  showLeaderBoard(){
    var leader1,leader2;
    
    var players = Object.values(allPlayers);

    if ((players[0].rank === 0 && players[1].rank === 0) || 
    players[0].rank === 1) {
      leader1 = 
      players[0].rank+
      "&emsp;"+
      players[0].name+
      "&emsp;"+
      players[0].score;
      
      leader2 = 
      players[1].rank+
      "&emsp;"+
      players[1].name+
      "&emsp;"+
      players[1].score;
    }

    if (players[1].rank === 1) {
      leader1 = 
      players[1].rank+
      "&emsp;"+
      players[1].name+
      "&emsp;"+
      players[1].score;
      
      leader2 = 
      players[0].rank+
      "&emsp;"+
      players[0].name+
      "&emsp;"+
      players[0].score;
    }

    this.leader1.html(leader1);
    this.leader2.html(leader2);
  }

  showLife(){
    push();
    image(lifeImage,width/2-130,height-player.positionY-280,20,20);
    fill("white");
    rect(width/2-100,height-player.positionY-280,185,20);
    fill("red");
    rect(width/2-100,height-player.positionY-280,player.life,20);
    noStroke();
    pop();
  }

  showFuelBar(){
    push();
    image(fuelImage,width/2-130,height-player.positionY-330,20,20);
    fill("white");
    rect(width/2-100,height-player.positionY-330,185,20);
    fill("yellow");
    rect(width/2-100,height-player.positionY-330,player.fuel,20);
    noStroke();
    pop();
  }

  handleFuel(index){
    if (player.fuel > 0 && this.playerMoving) {
      player.fuel -=0.3;
    }
  }

  showRank(){
    swal({
      title:`Incrivel!${"\n"}Rank${"\n"}${player.rank}`,
      text:"Parabens voce chegou na linha de chegada!!",
      imageUrl:"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize:"100x100",
      confirmButtonText:"ok"
    })
  }
}
