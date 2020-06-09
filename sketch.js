const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var dust;
var engine,world;

function preload(){
   
}

function setup() {
  
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);
   
   paper = new Paper(350,200,50,50);
   bin1 = new Bin(800,450,10,100);
   s1 = new Sp(750,540);
}


function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    bin1.display();
       
    paper.display();
    s1.display();
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}
