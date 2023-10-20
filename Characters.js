var base = {
    y: 315,
    x: 330,
 }

var keys = [];
var Ekeys = [];


class Character {
    constructor(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive){
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.frameX = frameX;
       this.frameY = frameY;
       this.speed = speed;
       this.health = health;
       this.damage = damage;
       this.moving = moving;
       this.attacking = attacking; 
       this.alive = alive;
    
       }
       
    }
 
 class Enemy extends Character {
    constructor(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive, colliding, move){
       super(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive);
       this.colliding = colliding;
       this.move = move;
       this.exD = Math.abs(this.x - base.x)
       this.eyD = Math.abs(this.y - base.y)
    }
    
    
    enemyAttack(){ 
       if (this.alive == true){
          if (this.x + 11 >= (player.x - 10) &&
             this.x <= (player.x + 11 + 10) &&
             this.y + this.height >= (player.y) &&
             this.y <= (player.y + player.height)) {
             
             
             if (player.x >= (this.x + 11)){
                this.frameY = 4;
                this.move = false;
                this.moving = false;
                this.attacking = true;
             }
             
             else if ((player.x + 11) <= this.x){
                this.frameY = 5;
                this.move = false;
                this.moving = false;
                this.attacking = true;
    
             }
             else if (player.y >= (this.y + this.height)){
                this.frameY = 6;
                this.move = false;
                this.moving = false;
                this.attacking = true;
    
             }
             else if ((player.y + player.height) <= this.y){
                this.frameY = 7;
                this.move = false;
                this.moving = false;
                this.attacking = true;
    
             }
          }  
          
          else{
              this.attacking = false;
          }
          if (this.attacking == true){
             player.health -= this.damage;
    
             if (player.health <= 0){
                player.alive = false;
                playerSprite.src = "";
                player.attacking = false;
             }
          } 
       }
       }
   
    pathfinding(){
       if (this.alive == true){
          if (this.y != base.y || this.x != base.x){
             if (this.exD == 0 || this.exD >= this.eyD && this.eyD != 0){  
                if (this.y != base.y){
                      if (this.y > base.y){
                         Ekeys = 38;
                         this.move = true;
                      }
                      else if (this.y < base.y){
                         Ekeys = 40;
                         this.move = true;
                      }
                   }
                   } 
    
             else if (this.eyD == 0 || this.exD < this.eyD && this.exD != 0){
                if (this.x != base.x){
                   if (this.x > base.x){
                      Ekeys = 37;
                      this.move = true;
                   }
    
                   else if (this.x < base.x){
                      Ekeys = 39;
                      this.move = true;
                   }
                }
             }
         }
           
         
         else{
            this.move = false;
            this.moving = false;
         }
       }
      }  
      /*function collided(){
         if (this.colliding == true){
            
            if (this.x != pointT.x){
               if (this.x > pointT.x){
                  Ekeys = 37;
                  this.move = true;
               }
   
               else if (this.x < pointT.x){
                  Ekeys = 39;
                  this.move = true;
               }
            
               }
            if (this.y != pointT.y){
               if (this.y > pointT.y){
                  Ekeys = 37;
                  this.move = true;
               }
   
               else if (this.y < pointT.y){
                  Ekeys = 39;
                  this.move = true;
               }
            
               }
            }
            
            
         else{
            this.colliding = false;
         }
         
      }  
      */
    moveEnemy(){
       if (this.alive == true){
         if (Ekeys == 38 && this.move == true){
            this.y -= this.speed;
            this.frameY  = 2;
            this.moving = true;         
         }
      
         if (Ekeys == 37 && this.move == true){
            this.x -= this.speed;
            this.frameY  = 1;
            this.moving = true;
         }
      
         if (Ekeys == 40 && this.move == true){
            this.y += this.speed;
            this.frameY  = 3;
            this.moving = true;
         }
         if (Ekeys == 39 && this.move == true){
            this.x += this.speed;
            this.frameY  = 0;
            this.moving = true;
         }

       }
       
    }
   
   
    handleEnemyFrame(){
       if (this.alive == true){
         if (this.frameX < 7 && this.moving == true) this.frameX++
         else this.frameX = 0;
         }
       }
      

 }


 class Hitbox {
    constructor(x, y){
       this.x = x;
       this.y = y;
    }
       
 }

 
  



 window.addEventListener("keydown", function(e){
 keys[e.keyCode] = true;
 });

 window.addEventListener("keyup", function(e){
 delete keys[e.keyCode];
 player.moving = false;
 });
 up = false;
 down = false;
 left = false;
 right = false;
 window.addEventListener("keydown", function(e){ 


     
  if (keys[32]){
    up = up;
    down = down;
    left = left;
    right = right;

 }
  if (keys[39]){
    up = false;
    down = false;
    left = false;
    right = true;
      
  }
  if (keys[37]){
    up = false;
    down = false;
    left = true;
    right = false;
  }
  if (keys[38]){
    up = true;
    down = false;
    left = false;
    right = false;
  }
  if (keys[40]){
    up = false;
    down = true;
    left = false;
    right = false;
  }

 });
  
 
 function movePlayer(){

 if (keys[38] && player.y > 0){
    if (keys[32]){

    }
    else{
    player.y -= player.speed;
    player.frameY  = 3;
    player.moving = true;
    player.attacking = false;
    collision(player, movePlayer);
    }
 }

 if (keys[37] && player.x > 0){
    if (keys[32]){

    }
    else{
    player.x -= player.speed;
    player.frameY  = 1;
    player.moving = true;
    player.attacking = false;
    collision(player, movePlayer);
    }
 }

 if (keys[40] && player.y < canvas.height - player.height){
    if (keys[32]){

    }
    else{
    player.y += player.speed;
    player.frameY  = 2;
    player.moving = true;
    player.attacking = false;
    collision(player, movePlayer);
    }
 }
 if (keys[39] && player.x < canvas.width - player.width){
    if (keys[32]){

    }
    else{
    player.x += player.speed;
    player.frameY  = 0;
    player.moving = true;
    player.attacking = false;
    collision(player, movePlayer);
    }
 }

 if (keys[32] && right == true && player.x < canvas.width - player.width){
    player.frameY  = 4;
    player.attacking = true;
    collision(player, movePlayer);
 }
 if (keys[32] && left == true && player.x < canvas.width - player.width){
    player.frameY  = 5;
    player.attacking = true;
    collision(player, movePlayer);
 }
 if (keys[32] && down == true && player.x < canvas.width - player.width){
    player.frameY  = 6;
    player.attacking = true;
    collision(player, movePlayer);
 }
 if (keys[32] && up == true && player.x < canvas.width - player.width){
    player.frameY  = 7;
    player.attacking = true;
    collision(player, movePlayer);
 }
 }
 
 function handlePlayerFrame(){
 if (player.frameX < 7 && player.moving) player.frameX++
 else player.frameX = 0;
 collision(player, movePlayer);
 }


 function playerAttack(){
    if (player.attacking == true && enemy1.attacking == true){
       enemy1.health -= player.damage;
       player.attacking = false;
 

       if (enemy1.health <= 0){
          enemy1.alive = false;
          enemy1Sprite.src = "";
          enemy1.attacking = false;
       }
    }
    else if (player.attacking == true && enemy2.attacking == true){
       enemy2.health -= player.damage;
       player.attacking = false;


       if (enemy2.health <= 0){
          enemy2.alive = false;
          enemy2Sprite.src = "";
          enemy2.attacking = false;
        
       }
    }
    else if (player.attacking == true && enemy3.attacking == true){
       enemy3.health -= player.damage;
       player.attacking = false;


       if (enemy3.health <= 0){
          enemy3.alive = false;
          enemy3Sprite.src = "";
          enemy3.attacking = false;

       }
    }
 }

 function playerHealth(){
    console.log(player.x);
 
    if (player.health > 99){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Full Heart.png"
        Heart4.src = "Full Heart.png"
        Heart5.src = "Full Heart.png"
    }
    else if (player.health > 90){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Full Heart.png"
        Heart4.src = "Full Heart.png"
        Heart5.src = "Half Heart.png"
    }
    else if (player.health > 80){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Full Heart.png"
        Heart4.src = "Full Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else if (player.health > 70){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Full Heart.png"
        Heart4.src = "Half Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else if (player.health > 60){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Full Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else if (player.health > 50){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Half Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else if (player.health > 40){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Full Heart.png"
        Heart3.src = "Empty Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
     else if (player.health > 30){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Half Heart.png"
        Heart3.src = "Empty Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else if (player.health > 20){
        Heart1.src = "Full Heart.png"
        Heart2.src = "Empty Heart.png"
        Heart3.src = "Empty Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
     else if (player.health > 10){
        Heart1.src = "Half Heart.png"
        Heart2.src = "Empty Heart.png"
        Heart3.src = "Empty Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }
    else{
        Heart1.src = "Empty Heart.png"
        Heart2.src = "Empty Heart.png"
        Heart3.src = "Empty Heart.png"
        Heart4.src = "Empty Heart.png"
        Heart5.src = "Empty Heart.png"
    }

}

export {Character, Enemy, Hitbox, enemyAttack, pathfinding, moveEnemy, handleEnemyFrame, movePlayer, handlePlayerFrame, playerAttack, playerHealth};