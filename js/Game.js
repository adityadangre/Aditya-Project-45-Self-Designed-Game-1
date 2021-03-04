class Game {
    constructor(){
  
    }
    play(){
        background(rgb(198,135,103));
        camera.y=player.y;

        //track.visible=true;
        player.visible=true;
        //set baground for player
        if(plr_bg===1)
        image(canyon_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        //track.addImage(canyon_img);
        else 
        if(plr_bg===2)  {
          image(canyon_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        }
        else
        if(plr_bg===3)  
          image(desert_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===4)  
          image(grass_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===5)  
          image(snow_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===6)  
          image(water_img, 0,-canvas.width*3,canvas.width, canvas.height*10);

        //set car for player    
         if(plr_car===1){
            player.addImage(car1_img);
            player.scale=2.5; 
         }
         else 
         if(plr_car===2){
            player.addImage(car2_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===3){
            player.addImage(car3_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===4){
            player.addImage(car4_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===5){
            player.addImage(car5_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===6){
            player.addImage(car6_img);
            player.scale=2.5;
         }

         if(keyDown(UP_ARROW)){
         
        }

         if(keyDown(DOWN_ARROW)){
         
      }

      if(keyDown(LEFT_ARROW)){
        player.x=canvas.width-600;
      }

      if(keyDown(RIGHT_ARROW)){
        player.x=canvas.width-320;
      }

      }

    spawnCar(){
      if(frameCount % 200 === 0){
        var r = Math.round(random(1,2));
        if(r===1)
        ecar = createSprite(canvas.width-600, camera.y+height/2,40,40);
        else
        ecar = createSprite(canvas.width-320, camera.y+height/2,40,40);
        ecar.velocityY=random(-6,-15);
        ecar.scale=2;
         var rand = Math.round(random(1,7));
        switch(rand){
          case 1: ecar.addImage(ecar1);
                  break;
          case 2: ecar.addImage(ecar2);
                  break;
          case 3: ecar.addImage(ecar3);
                  break;
          case 4: ecar.addImage(ecar4);
                  break;
          case 5: ecar.addImage(ecar5);
                  break;
          case 6: ecar.addImage(ecar6);
                  break;
          case 7: ecar.addImage(ecar7);
                  break;
          default: break;
        }

        ecar.lifetime = 500;
        enemy.add(ecar);
      }
    }
}