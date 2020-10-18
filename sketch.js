const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
var ball;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;



    leftside = createSprite(310,610,20,100);
    leftside.shapeColor = "red";
 
    rightside = createSprite(530,610,20,100);
    rightside.shapeColor = "red";
 
    centerside = createSprite(420,650,200,20);
    centerside.shapeColor = "red";
 
  	packageSprite=createSprite(width/2, 80, 10,10);
  	packageSprite.addImage(packageIMG)
  	packageSprite.scale=0.2
 
     helicopterSprite=createSprite(width/2, 200, 10,10,);
     helicopterSprite.addImage(helicopterIMG)
     helicopterSprite.scale=0.6
 
 
     

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(width/2,height-50,800,20,ground_options);
    World.add(world,ground);
    var options = {

    restitution:0.4,
    friction:0.4,
    isStatic:true
    }
    ball = Bodies.circle(width/2, 80, 10,options);
    World.add(world,ball);



    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    drawSprites();
    

}
function KeyPressed(){

if(keyDown === "DOWN_ARROW")

Body.setStatic(ball,false);



}

