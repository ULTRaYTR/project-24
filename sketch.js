const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Stone1 = new Stone(200,550)
    Iron1 = new Iron(300,550)
    Rubber1 = new Rubber(400,550)
   
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Stone1.display()
    Iron1.display()
    Rubber1.display()
   
 
}