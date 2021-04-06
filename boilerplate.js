var canvas;
var music;
var redbox,bluebox,greenbox,orangebox,whitebox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
redbox.createSprite=(200,100,30,40);
redbox.shapeColour=(255,0,0);
greenbox.createSprite=(400,100,30,40);
greenbox.shapeColour=(0,128,0);
bluebox.createSprite=(500,100,30,40);
bluebox.shaprcolour=(0,0,255)
orangebox.createSprite=(600,100,30,40);
orangebox.shapeColour=(255,165,0);


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(redbox.isTouching(whitebox)&& whitebox.bounceOff(redbox)){
whitebox.shapeColour=(255,0,0);
    }
    if(greenbox.isTouching(whitebox)&& whitebox.bounceOff(greenbox)){
        whitebox.shapeColour=(0,128,0);
            }
 if(bluebox.isTouching(whitebox)&& whitebox.bounceOff(bluebox)){
                whitebox.shapeColour=(0,0,255);
 }
 if(orangebox.isTouching(whitebox)&& whitebox.bounceOff(orangebox)){
    whitebox.shapeColour=(255,165,0);
}
}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
whitebox.velocityX=-5;
    }
if(keyCode===RIGHT_ARROW){
  whitebox.velocityX=5;
 }
 if(keyCode===UP_ARROW){
    whitebox.velocityY=5;
 }
 if(keyCode===DOWN_ARROW){
    whitebox.velocityY=-5;
        }
}