var bg,plr_bg_img,track;

var start_img, startover_img, start, startgame;

var btredc1_img, btredc2_img, btredc;
var btwhitec1_img, btwhitec2_img, btwhitec;
var btyellowc1_img, btyellowc2_img, btyellowc;
var btblackc1_img, btblackc2_img, btblackc;
var btbluec1_img, btbluec2_img, btbluec;
var btgreenc1_img, btgreenc2_img, btgreenc;
var carselection

var car1_img,car2_img,car3_img,car4_img,car5_img,car6_img;
var ecar1, ecar2, ecar3, ecar4, ecar5, ecar6, ecar7;
var enemy,ecar;

var canyon_img, city_img, desert_img, grass_img, snow_img, water_img;
var st1, st2, st3, st4, st5, st6;
var streetselection;
var game,player;

var plr_car=0;
var plr_bg=0;
var gameState=0;
var distance=0, fuel=100,oxygen=3;
var carvelocity=0;


function preload(){
    bg = loadImage("images/bg/startbg.jpg");
    start_img = loadImage("images/button/start.jpg");
    startover_img = loadImage("images/button/startover.jpg");

    btredc1_img = loadImage("images/button/btredcar1.jpg");
    btredc2_img = loadImage("images/button/btredcar2.jpg");

    btwhitec1_img = loadImage("images/button/btwhitecar1.jpg");
    btwhitec2_img = loadImage("images/button/btwhitecar2.jpg");

    btyellowc1_img = loadImage("images/button/btyellowcar1.jpg");
    btyellowc2_img = loadImage("images/button/btyellowcar2.jpg");

    btblackc1_img = loadImage("images/button/btblackcar1.jpg");
    btblackc2_img = loadImage("images/button/btblackcar2.jpg");

    btbluec1_img = loadImage("images/button/btbluecar1.jpg");
    btbluec2_img = loadImage("images/button/btbluecar2.jpg");

    btgreenc1_img = loadImage("images/button/btgreencar1.jpg");
    btgreenc2_img = loadImage("images/button/btgreencar2.jpg");

    canyon_img = loadImage("images/bg/canyon.jpg");
    city_img = loadImage("images/bg/city.jpg");
    desert_img = loadImage("images/bg/desert.jpg");
    grass_img = loadImage("images/bg/grass.jpg");
    snow_img = loadImage("images/bg/snow.jpg");
    water_img = loadImage("images/bg/water.jpg");
    
    car1_img = loadImage("images/car/car1.png"); //red car
    car2_img = loadImage("images/car/car2.png"); //white car
    car3_img = loadImage("images/car/car3.png"); //yellow car
    car4_img = loadImage("images/car/car4.png"); // black car
    car5_img = loadImage("images/car/car5.png"); //blue car
    car6_img = loadImage("images/car/car6.png"); //green car

    ecar1 = loadImage("images/car/ecar1.png");
    ecar2 = loadImage("images/car/ecar2.png");
    ecar3 = loadImage("images/car/ecar3.png");
    ecar4 = loadImage("images/car/ecar4.png");
    ecar5 = loadImage("images/car/ecar5.png");
    ecar6 = loadImage("images/car/ecar6.png");
    ecar7 = loadImage("images/car/ecar7.png");
}

function setup(){
    canvas = createCanvas(displayWidth-600, displayHeight-170);

    start = createSprite(canvas.width/2, (canvas.height/2));
    start.scale = 0.6;

    btredc=createSprite((canvas.width/2) - 300, (canvas.height/2) + 100);
    btredc.visible=false;
    btredc.scale=0.6;

    btwhitec=createSprite((canvas.width/2), (canvas.height/2) + 100);
    btwhitec.visible=false;
    btwhitec.scale=0.6;

    btyellowc=createSprite((canvas.width/2) + 300, (canvas.height/2) + 100);
    btyellowc.visible=false;
    btyellowc.scale=0.6;

    btblackc=createSprite((canvas.width/2) - 300, (canvas.height/2) + 200);
    btblackc.visible=false;
    btblackc.scale=0.6;

    btbluec=createSprite((canvas.width/2), (canvas.height/2) + 200);
    btbluec.visible=false;
    btbluec.scale=0.6;

    btgreenc=createSprite((canvas.width/2) + 300, (canvas.height/2) + 200);
    btgreenc.visible=false;
    btgreenc.scale=0.6;

    st1=createSprite((canvas.width/2) - 380, (canvas.height/2) - 50);
    st1.visible=false;
    st1.scale=0.05;

    st2=createSprite((canvas.width/2) -  230, (canvas.height/2) - 50);
    st2.visible=false;
    st2.scale=0.05;

    st3=createSprite((canvas.width/2) - 80, (canvas.height/2) - 50);
    st3.visible=false;
    st3.scale=0.05;

    st4=createSprite((canvas.width/2) + 70, (canvas.height/2) - 50);
    st4.visible=false;
    st4.scale=0.05;

    st5=createSprite((canvas.width/2) + 220, (canvas.height/2) - 50);
    st5.visible=false;
    st5.scale=0.05;

    st6=createSprite((canvas.width/2) + 370, (canvas.height/2) - 50);
    st6.visible=false;
    st6.scale=0.05;

    //track=createSprite(canvas.width/2,canvas.height/2+160);
    //track.visible=false;
    //track.scale=1.45;

    player=createSprite(canvas.width-600,canvas.height-50);
    player.visible=false;

    game = new Game();
    enemy = new Group();
}

function draw(){
    background(bg);

    //Start Game with Glick on START button
    if(gameState===0){
        startgame = new startGame();
        startgame.gameStart();
    }

    //Select Car from 6 type of Cars
    if(gameState===1){
        carselection = new carSelection();
        carselection.selectCar();
    }

    //Street Selection
    if(gameState===2){
        streetselection = new streetSelection();
        streetselection.selectStreet();
    }

    //Start to play game
    if(gameState===3){
        clear();
        game.play();
        game.spawnCar();
    }

    drawSprites();

    if(gameState===3){
        textSize(25);
        fill("white");
        stroke("black");
        strokeWeight(2);
        text("Distance : " + distance, canvas.width-1300, player.y-300);
        text("Fule : " + fuel + " L ", canvas.width-1300, player.y-260);
        text("Life : " + oxygen , canvas.width-1300, player.y-220);

    }
}