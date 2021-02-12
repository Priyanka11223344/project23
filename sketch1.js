const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopter,heliImg;
var packageImg;
var rect1,rect2,rect3;
var packageBody;
var b1,b2;

function preload(){
heliImg = loadImage("helicopter.png");
}

function setup(){
    createCanvas(800,700);
   engine = Engine.create();
    world = engine.world;
   
    var options = {
        isStatic:true,restitution:1
    }
    packageBody = Bodies.rectangle(400,100,20,20,options);
    packageBody.image = loadImage("package.png");
    World.add(world,packageBody);

helicopter = createSprite(400,100,20,20);
helicopter.addImage(heliImg);
helicopter.scale = 0.5;

 rect1 = createSprite(290,600,10,192);
 rect1.shapeColor = "red";

 rect2 = createSprite(380,690,192,10);
 rect2.shapeColor = "red";

 rect3 = createSprite(480,600,10,192);
 rect3.shapeColor = "red";

 b1 = createSprite(2,200,10,700);
b1.visible = false;

 b2 = createSprite(798,200,10,700);
 b2.visible = false;

Engine.run(engine);
}

function draw(){
    background(0);
Engine.update(engine);

helicopter.collide(b1);
helicopter.collide(b2);

imageMode(CENTER);
image(packageBody.image,packageBody.position.x,packageBody.position.y,20,20);

drawSprites();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        helicopter.velocityX = 3;
    }
    if(keyCode === LEFT_ARROW){
        helicopter.velocityX = -3;
    }
    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(packageBody,false);
    }
}