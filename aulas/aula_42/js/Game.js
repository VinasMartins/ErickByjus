class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
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
   }

  play () { 
    this.handleElements () ;
    this.handleResetButton();
    Player.getPlayersInfo ();

    
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
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

         
   
          //alterar a posição da câmera na direção y
          camera.position.y = cars[index - 1].position.y;
        }
      }

      this.handlePlayerControls();

      drawSprites ();
    }
  }

  handlePlayerControls() {
  
   
    if (keyIsDown(UP_ARROW)) {
      this.playerMoving = true;
      player.positionY += 10;
      player.update();
    }
  }

  handleResetButton(){
    this.resetButton.mousePressed(()=>{
      database.ref("/").set({
        playerCount:0,
        gameState:0,
        players:{},
      });

      window.location.reload();
    });
  }
}
