var bob, bobImage, jack, jackImage, ronald, ronaldImage;
var bobR, jackR, ronaldR;
var bobI, jackI, ronaldI;
var ground, end, cloud;
var fireCrab, sawHand;

function preload(){
    //bobImage =   loadAnimation("Bob.gif");
    //cloud =   loadAnimation("Cloud.gif");
}
function setup(){
    createCanvas(600, 400);
    ground = createSprite(300,390,600,20);
    ground.shapeColor="brown";
    bob = createSprite(20,350,20,20);
    //bob.addImage(bobImage);
}
function draw(){
    background("blue");
    
    if(keyDown(RIGHT_ARROW)){
        bob.velocityX = +10
    }

    //if(keyDown(LEFT_ARROW)){
    //    bob.velocityX = -10
    //}
    drawSprites();
}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }  