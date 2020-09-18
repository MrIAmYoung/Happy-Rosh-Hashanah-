var luke,lukeImage;
var chewy,chewyImage;
var robots, robotsImage;
var darthvader,darthvaderImage;
var starwars;
var bgColor=(202,204,206);
var envelope,envelopeImage;
var shanahTovah="L'shanah Tovah";
var happy="Happy";
var rosh="Rosh Hashanah!";
var gamemode="serve";

function preload() {
lukeImage=loadImage("Luke-Skywalker-PNG-Picture.png");
chewyImage=loadImage("Chewbacca.png");
robotsImage=loadImage("r2d2c3po.png");
darthvaderImage=loadImage("Darthvader.png");
envelopeImage=loadImage("envelope.png");
starwars=loadSound("Starwars.mp3");
}

function setup() {
  createCanvas(800,1200);
  
  luke=createSprite(100,975,1,1);
  luke.addImage("lukes",lukeImage);
  luke.scale=0.275;
  
  chewy=createSprite(650,975,1,1);
  chewy.addImage("chewys",chewyImage);
  chewy.scale=0.5;
  
  robots=createSprite(600,250,1,1);
  robots.addImage("robotss",robotsImage);
  robots.scale=0.125;
  
  darthvader=createSprite(200,250,1,1);
  darthvader.addImage("darths",darthvaderImage);
  darthvader.scale=0.325;
  
  envelope=createSprite(400,500,1,1);
  envelope.addImage("envelopes",envelopeImage);
  envelope.scale=0.75
  
  
}

function draw() {
  background(bgColor);

  
  fill(255,255,0);
  textSize(35);
  text(shanahTovah,275,600);
  text(happy,350,650);
  text(rosh,275,700);

  if (gamemode==="serve"){
    envelope.visible=true;
    darthvader.visible=false;
    robots.visible=false;
    chewy.visible=false;
    luke.visible=false;
    text("Press 'Space' or tap to open the envelope!",100,100);
  }
  if (touches.length>0 || keyWentDown("space") &&
      gamemode==="serve"){
    touches=[];
    gamemode="play";
    envelope.visible=false;
    luke.visible=true;
    chewy.visible=true;
    robots.visible=true;
    darthvader.visible=true;
    bgColor=(124,126,128);
    starwars.play();
  }
  
  drawSprites();
}
