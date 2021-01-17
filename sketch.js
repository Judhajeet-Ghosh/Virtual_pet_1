//Create variables here
var doggy, dog, happyDog, database, foods, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  doggy = createSprite(300,300,50,50)
  doggy.addImage(dog)
  doggy.scale= 0.2;

foodStock=database.ref("food")
foodStock.on("value",readStock, showError)
  
 }


function draw() { 

  background(46,139,87)


  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    doggy.addImage(happyDog)
  }
   

  drawSprites();
  //add styles here

}



function readStock(data){
foods = data.val()
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}

function showError(){
  console.log("ERROR IN ON FUNCTION")
}



