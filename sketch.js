var canvas;
var music;
var plain1
var plain2
var plain3
var plain4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(20,750),40,40);

    plain1 = createSprite(100,20,200,40);
    plain1.shapeColor = "green";

    plain2 = createSprite(300,20,200,40);
    plain2.shapeColor = "purple";

    plain3 = createSprite(500,20,200,40);
    plain3.shapeColor = "yellow";

    plain4 = createSprite(700,20,200,40);
    plain4.shapeColor = "brown";

    //create box sprite and give velocity
}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();

    box.bounceOff(plain1);

    box.bounceOff(plain2);

    box.bounceOff(plain3);

    box.bounceOff(plain4);

    if(plain1.isTouching(box) && box.bounceOff(plain1)){
        box.shapeColor = "green";
    }

    if(plain2.isTouching(box) && box.bounceOff(plain2)){
        box.shapeColor = "purple";
    }

    if(plain3.isTouching(box) && box.bounceOff(plain3)){
        box.shapeColor = "yellow";
    }

    if(plain4.isTouching(box) && box.bounceOff(plain4)){
        box.shapeColor = "brown";
    }
}
