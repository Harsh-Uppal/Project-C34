// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//All Variables
var bobHolder,engine,heldBob = "null";
var bobs = [];
function setup() {

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    var length = 200;
    var sD = 20;
    var diffAdd = 20;

    //Give values to variables
    bobHolder = new BobHolder(100, 100, 175, 20);

    bobs[0] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[1] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[2] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[3] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[4] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[5] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[6] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[7] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    bobs[0].display();
    bobs[1].display();
    bobs[2].display();
    bobs[3].display();
    bobs[4].display();
    bobs[5].display();
    bobs[6].display();
    bobs[7].display();

    bobHolder.display();
}

function mouseDragged() {
    //catch key presses
    if (heldBob != "null") {
        Body.setPosition(bobs[parseInt(heldBob)].bob, { x: mouseX, y: mouseY });
        return;
    }

    mouseX += 5;

    if (mouseX < 130 && mouseX > 105 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[0].bob, { x: mouseX, y: mouseY });
        heldBob = "0";
    }
    else if (mouseX < 155 && mouseX > 130 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[1].bob, { x: mouseX, y: mouseY });
        heldBob = "1";
    }
    else if (mouseX < 180 && mouseX > 155 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[2].bob, { x: mouseX, y: mouseY });
        heldBob = "2";
    }
    else if (mouseX < 205 && mouseX > 180 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[3].bob, { x: mouseX, y: mouseY });
        heldBob = "3";
    }
    else if (mouseX < 230 && mouseX > 205 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[4].bob, { x: mouseX, y: mouseY });
        heldBob = "4";
    }
    else if (mouseX < 255 && mouseX > 230 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[5].bob, { x: mouseX, y: mouseY });
        heldBob = "5";
    }
    else if (mouseX < 280 && mouseX > 255 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[6].bob, { x: mouseX, y: mouseY });
        heldBob = "6";
    }
    else if (mouseX < 305 && mouseX > 280 && mouseY > 250 && mouseY < 350) {
        Body.setPosition(bobs[7].bob, { x: mouseX, y: mouseY });
        heldBob = "7";
    }
}

function mouseReleased() {
    heldBob = "null";
}