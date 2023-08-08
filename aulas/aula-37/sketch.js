var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1,car2,carimg1,carimg2;
var track;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 // database = firebase.database();
  game = new Game();

  game.start();
}

function draw() {
  background(backgroundImage);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
