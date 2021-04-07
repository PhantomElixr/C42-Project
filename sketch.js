const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var batAnimation,bat;

var rain ,drops = [];
var maxDrops = 100;
var backgroundImage, backgroundImage2, backgroundImage3, backgroundImage4;
function preload(){
    
}
function preload(){
    backgroundImage = loadImage('images/thunderbolt/1.png');
    backgroundImage2 = loadImage('images/thunderbolt/2.png');
    backgroundImage3 = loadImage('images/thunderbolt/3.png');
    backgroundImage4 = loadImage('images/thunderbolt/4.png');

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
}

function setup(){
    createCanvas(400,600);
    
    engine = Engine.create();
    world = engine.world;

    for(var i =0 ; i< maxDrops ; i++){ 
    drops.push(new Drop(random(0,400),random(0,650)))
    }
    umbrella = new Umbrella(200,425)
    Engine.run(engine);
}

function draw(){
    background(0);
    var rand = Math.round(random(1,4));
    if(rand === 1){
        background(backgroundImage);
    }
    if(rand === 2){
        background(backgroundImage2);
    }
    if(rand === 3){
        background(backgroundImage3);
    }
    if(rand === 4){
        background(backgroundImage4);
    }
    for(var i =0 ; i < drops.length ; i++){ 
        drops[i].display();
        drops[i].update()
    }  
    umbrella.display();
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        bat.debug = true;
    }
}   