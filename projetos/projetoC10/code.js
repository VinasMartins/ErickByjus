var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["05563c24-fb47-4dd8-be0e-90842c1b5c88","732ef546-c58f-4e7c-9217-cd3ef5e26251"],"propsByKey":{"05563c24-fb47-4dd8-be0e-90842c1b5c88":{"name":"volleyball2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"},"732ef546-c58f-4e7c-9217-cd3ef5e26251":{"name":"kidportrait_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;

//criando a variavel das paredes
var parede1 = createSprite(190, 120,250,3);
var parede2 = createSprite(190,260,250,3);
var parede3 = createSprite(67,145,3,50);
var parede4 = createSprite(67,235,3,50);
var parede5 = createSprite(313,145,3,50);
var parede6 = createSprite(313,235,3,50);
var parede7 = createSprite(41,170,50,3);
var parede8 = createSprite(41,210,50,3);
var parede9 = createSprite(337,210,50,3);
var parede10 = createSprite(337,170,50,3);
var parede11 = createSprite(18,190,3,40);
var parede12 = createSprite(361,190,3,40);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

 
//dando cor as paredes 
parede1.shapeColor='green';
parede2.shapeColor='blue';
parede3.shapeColor='red';
parede4.shapeColor='orange';
parede5.shapeColor='purple';
parede6.shapeColor='brown';
parede7.shapeColor='pink';
parede8.shapeColor='deeppink';
parede9.shapeColor='yellow';

var Sam = createSprite(40,190,13,13);
  Sam.shapeColor = "green";

var car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  
var car2 = createSprite(215,130,10,10);
  car2.shapeColor ="red";
  
var car3 = createSprite(165,250,10,10);
  car3.shapeColor = "blue";
  
var car4 = createSprite(270,250,10,10);
  car4.shapeColor = "blue";
  
  car1.velocityY = 13;
  car2.velocityY = 13;
  car3.velocityY = -13;
  car4.velocityY = -13;
  

var cars = createGroup();
  cars.add(car1);
  cars.add(car2);
  cars.add(car3);
  cars.add(car4);



function draw() {
  background("#d9ffff");
  
  cars.bounceOff(parede1);
  cars.bounceOff(parede2);
  Sam.bounceOff(parede12);
  
  if(keyDown("right")){
    Sam.x +=4;
  }
  
  if(keyDown("left")){
    Sam.x -=4; 
  }
  
  if(Sam.isTouching(cars)){
    Sam.x = 40;
    Sam.y = 190;
    life +=1;
  }
  
  if(life > 9){
    fill("red");
    textSize(20);
    textAlign(CENTER,TOP);
    stroke("red");
    text("Game Over!",200,200);
    cars.setVelocityYEach(0);
    Sam.velocityX = 0;
  }
  
//criando o ponto de largada e o ponto de chegada.
  strokeWeight(0);
  fill("lightblue");
  rect(15,170,52,40);
  text("Mortes: "+life,200,100);
  
  //criando o ponto de chegada.
  fill("lightGreen");
  rect(310,170,52,40);
  
  

   drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
