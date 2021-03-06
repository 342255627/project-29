
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,tree,slingshot,stone,
mango1,mango2,mango3,mango4,mango5,
mango6,mango7,mango8,mango9,mango10,
mango11,mango12,mango13,mango14,mango15;

function preload()
{

}
	function setup() {
		createCanvas(1800,800);
	
	
		engine = Engine.create();
		world = engine.world;
		

	boy=new Boy(20,20);

	ground=new Ground(width/2,702,width,20);

	tree = new Tree(1200+200,400,50,50);

	stone=new Stone(235,500,48,39);

	slingshot = new Slingshot(stone.body,boy.body,-90,-50);

	mango1=new Mango(1400,245,48,60);
	mango2=new Mango(1400,213,48,60);
	mango3=new Mango(1350,159,48,60);
	mango4=new Mango(1460,267,48,60);
	mango5=new Mango(1350,386,48,60);
	mango6=new Mango(1500,245,48,60);
	mango7=new Mango(1500,213,48,60);
	mango8=new Mango(1600,374,48,60);
	mango9=new Mango(1300,267,48,60);
	mango10=new Mango(1300,350,48,60);
	mango11=new Mango(1505,245,48,60);
	mango12=new Mango(1395,213,48,60);
	mango13=new Mango(1202,159,48,60);
	mango14=new Mango(1023,267,48,60);
	mango15=new Mango(1150,245,48,60);
	
	Engine.run(engine);
	
		
	  
	}
	
	
	function draw() {
	  rectMode(CENTER);
	  background("pink");
	  textFont("colonna MT");
	  strokeWeight(2);
	  stroke("white");
	  fill("red");
	  textSize(50);
	  text("Press space to get a second chance!!",200,100);
	  boy.display();
	  tree.display();
	  stone.display();
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango5.display();
	  mango6.display();
	  mango7.display();
	  mango8.display();
	  mango9.display();
	  mango10.display();
	  mango11.display();
	  mango12.display();
	  mango13.display();
	  mango14.display();
	  mango15.display();
	  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);


 
drawSprites();

	}
	
	
	function mouseDragged(){
		if(gameState!=="launched"){
	   
				  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}
	}
	
	
	function mouseReleased(){
		slingshot.fly();
		gameState="launched"
	}
	
	function keyPressed(){
		if(keyCode === 32){
			slingshot.attach(stone.body);

		}
	}
	
	function detectCollision(stone,mango1){
		mangoBodyPosition=lmango.body.position
		stoneBodyPosition=lstone.body.position
		
		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
		
		}
	}