const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background;
var stone;
var ball;
var score=0;

function preload(){
   stone=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stnd1 = new stat(400,230,320,40);
    ground=new Ground(600,350,1200,100)
    block1= new Box(330,200,30,40);
    block2 = new Box(360,200,30,40);
    block3 = new Box(390,200,30,40);
    block4 = new Box(420,200,30,40);
    block5 = new Box(450,200,30,40);
    block6= new Box(360,160,30,40);
    block7= new Box(390,160,30,40);
    block8= new Box(420,160,30,40);
    block9 = new Box(390,120,30,40);
    ball=Bodies.circle(60,150,20)
    sling= new SlingShot(this.ball,{x:60,y:150} )
    World.add(world,ball)
}

function draw(){
    Engine.update(engine);
    background("black")
    text("score:"+score,750,40);
    stnd1.display()
    ground.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    sling.display()
    imageMode (CENTER)
    image(stone,ball.position.x,ball.position.y,40,40)
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if (keyCode===32){
        sling.attach(this.ball)
    }
}