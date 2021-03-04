class startGame {
    constructor(){
    }

    gameStart(){
        if(mousePressedOver(start)){
            start.visible=false;
            gameState=1;
        }
    
        if(mouseIsOver(start)){
            start.addImage(startover_img);
        }
        else
        start.addImage(start_img);
        
        textSize(80);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-145, (displayHeight-650)/2);
    }
}