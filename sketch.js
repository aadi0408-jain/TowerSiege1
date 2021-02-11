const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;
var score;
var bgImage;
var blockGroup;

function preload(){
  polygon_img=loadImage("polygon.png");
  bgImage = loadImage("DayImg.jpg");
}
function setup() {
  createCanvas(1130,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  score = 0;

  stage1=new Stage (1000,335,250,20);
  stage2=new Stage (700,585,250,20);

  block1=new Block (1000,200,40,50);
  block2=new Block (1000,250,40,50);
  block3=new Block (1000,300,40,50);
  block4=new Block (960,250,40,50);
  block5=new Block (1040,250,40,50);
  block6=new Block (960,300,40,50);
  block7=new Block (1040,300,40,50);
  block8=new Block (1080,300,40,50);
  block9=new Block (920,300,40,50);

  block10=new Block (700,500,40,50);
  block11=new Block (700,450,40,50);
  block12=new Block (740,500,40,50);
  block13=new Block (660,500,40,50);
  block14=new Block (700,550,40,50);
  block15=new Block (660,550,40,50);
  block16=new Block (740,550,40,50);
  block17=new Block (620,550,40,50);
  block18=new Block (780,550,40,50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(255, 140, 0);
 
  textSize(20);
  fill("black") 
  text("Press Space to get a second chance to Play!!",700 ,40);
  textSize(20);
  fill("white")
  text("SCORE:"+score,300,40)
  
  fill("yellow")
  stage1.display();
  stage2.display();
 
  fill("darkviolet")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,100,20);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();

  }
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
