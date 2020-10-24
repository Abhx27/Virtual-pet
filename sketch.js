//Create variables here
var dog, happyDog, database,goodS,foodStock

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  dogSprite = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  
  dogSprite = createSprite(10,10,250,250)
  
}


function draw() {  


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  drawSprites();
  //add styles here

}



