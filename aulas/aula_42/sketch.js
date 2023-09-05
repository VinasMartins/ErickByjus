var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1,car2,carimg1,carimg2;
var track;
var cars = [];
var lifeImage;
var fuelImage;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
 carimg1 = loadImage ("./assets/car1.png");
 carimg2 = loadImage ("./assets/car2.png");
 track = loadImage ("./assets/track.jpg");
 lifeImage = loadImage("./assets/life.png");
 fuelImage = loadImage("./assets/fuel.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
 game.getState ();
  game.start();
}

function draw() {
  background(backgroundImage);
  
  if (playerCount===2) {
   game.update (1);
  }

  if (gameState===1) {
    game.play ();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
