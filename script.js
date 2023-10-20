/* This gets the canvas fron index html and defines the width and height */

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 560;

function doSomethingOnClick (){    
   //Removes the button and the black screen and starts the game
    document.getElementById("STARTimg").style.display='none';
    document.getElementById("StartScreen").style.display='none';
    Game(); 
    
 }
function Game (){

   /* This is an array which stores the currently pressed keys*/

   var keys = [];
   var Ekeys = [];
   var Enemies = [];

   /* This "cuts out" each individual sprite character, defines the speed of the character and where the character is placed on the map*/

   var coins = ["00.png","01.png","02.png"];
   var num = 0;
   var Bar = ["Health Bar1.png","Health Bar2.png","Health Bar3.png","Health Bar4.png","Health Bar5.png","Health Bar6.png","Health Bar7.png","Health Bar8.png","Health Bar9.png","Health Bar10.png","Health Bar11.png","Health Bar12.png","Health Bar13.png","Health Bar14.png","Health Bar15.png","Health Bar16.png","Health Bar17.png","Health Bar18.png","Health Bar19.png","Health Bar20.png","Health Bar21.png"];

   c = false;
   c1 = false;
   h1 = false;
   h2 = false;
   h3 = false;
   var wave1 = false;
   var wave2 = false;
   var wave3 = false;

   cOpen = false;
   e1T1 = false;
   e2T1 = false;
   e3T1 = false;
   e4T1 = false;
   var maze1 = false;
   var maze2 = false;
   var maze3 = false;
   var maze4 = false;
   var maze5 = false;
   var maze6 = false;
   var maze7 = false;

   PKey = false;

   ghostSpawn = false;

   regen = false;
    var mazeWall1 = {
        x: 0,
        y: 0,
    }
    
    TownHallH = 500;
    var mazeWall3 = {
      x: 156,
      y: 0,
  }
   var base = {
      y: 316,
      x: 331,
   }

   var pointT = {
      y: 86,
      x: 350,
   }

   var pointL = {
      y: 250,
      x: 340,
   }
   var PointR = {
      y: 250,
      x: 340,
   }
   var PointB = {
      y: 250,
      x: 340,
   }
   

   var vWall1 = {
   y: 104,
   x: 568,
   width: 18,
   height: 109,
   };

   var vWall2 = {
   y: 104,
   x: 114,
   width: 18,
   height: 109,
   };

   var vWall3 = {
   y: 307,
   x: 114,
   width: 18,
   height: 109,
   };

   var vWall4 = {
   y: 307,
   x: 568,
   width: 18,
   height: 109,
   };

   var hWall1 = {
   y: 103,
   x: 386,
   width: 170,
   height: 24,
   };

   var hWall2 = {
   y: 103,
   x: 109,
   width: 170,
   height: 24,
   };


   var hWall3 = {
   y: 434,
   x: 144,
   width: 170,
   height: 22,
   };

   var hWall4 = {
   y: 434,
   x: 386,
   width: 170,
   height: 22,
   };



   var tower1 = {
   y: 440,
   x: 553,
   width: 47,
   height: 72,
   };

   var tower2 = {
   y: 440,
   x: 102,
   width: 47,
   height: 72,
   };

   var tower3 = {
   y: 112,
   x: 102,
   width: 47,
   height: 72,
   };

   var tower4 = {
   y: 112,
   x: 553,
   width: 47,
   height: 72,
   };


   var Coin1 = {
   x: 405,
   y: 82,
   width: 6,
   height: 6,
   };

   var Coin2 = {
      x: 300,
      y: 200,
      width: 6,
      height: 6,
   };

   var end = false;
   /* This puts the background and character on the screen*/

   var playerSprite = new Image();
   playerSprite.src = "Player1.png";
   var enemy1Sprite = new Image();
   enemy1Sprite.src = "Enemy.png";
   var enemy2Sprite = new Image();
   enemy2Sprite.src = "Enemy.png";
   var enemy3Sprite = new Image();
   enemy3Sprite.src = "Enemy.png";   
   var enemy4Sprite = new Image();
   enemy4Sprite.src = "Enemy.png";
   var background = new Image();
   background.src = "Map.png";
   var coin = new Image();
   coin.src = "Coin1.png";
   var coin1 = new Image();
   coin1.src = "Coin1.png";
   var currency = new Image();
   currency.src = "currency.png";
   var counter = new Image();
   counter.src = "00.png";
   var bush = new Image();
   bush.src = "bush.png";
   var Tower1 = new Image();
   Tower1.src = "Tower1.png";
   var Tower2 = new Image();
   Tower2.src = "Tower1.png";
   var Tower3 = new Image();
   Tower3.src = "Tower2.png";
   var Tower4 = new Image();
   Tower4.src = "Tower2.png";
   var Tree = new Image();      
   Tree.src = "Tree.png";
   var Heart1 = new Image();
   Heart1.src = "Full heart.png";
   var Heart2 = new Image();
   Heart2.src = "Full heart.png";
   var Heart3 = new Image();
   Heart3.src = "Full heart.png"; 
   var Heart4 = new Image();
   Heart4.src = "Full heart.png";
   var Heart5 = new Image();
   Heart5.src = "Full heart.png";
   var Chest = new Image();
   Chest.src = "Chest.png";
   var OpenChest = new Image();
   OpenChest.src = "Open Chest.png";
   var Hearts = new Image();
   Hearts.src = "Hearts.png";
   var Hearts1 = new Image();
   Hearts1.src = "Hearts.png";
   var Hearts2 = new Image();
   Hearts2.src = "Hearts.png";
   var Text = new Image();
   Text.src = "Text.png";
   var Text2 = new Image();
   Text2.src = "Text2.png";
   var Text3 = new Image();
   Text3.src = "Text3.png";
   var Key = new Image();
   Key.src = "Key.png";
   var TownHall = new Image();
   TownHall.src = "TownHall.png";
   var GameOver = new Image();
   GameOver.src = "";
   var TownHallHBar = new Image();
   TownHallHBar.src = "Health Bar1.png";
   var Ghost1Sprite = new Image();
   Ghost1Sprite.src = "Ghost.png";
      
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
      constructor(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive, colliding, move, targetx, targety){
         super(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive);
         this.colliding = colliding;
         this.move = move;
         this.exD = Math.abs(this.x - targetx)
         this.eyD = Math.abs(this.y - targety)
         this.targetx = targetx;
         this.targety = targety;

      }
      
      
      enemyAttack(){ 
         if (this.alive == true){
            //Checking if the player is within the range of the enemy
            if (this.x + 11 >= (player.x - 10) &&
               this.x <= (player.x + 11 + 10) &&
               this.y + (this.height - 1 + 10) >= (player.y) &&
               (this.y - 5) <= (player.y + player.height)) {
               
               //These if statements check what side the player is to the enemy so that the enemy can attack in the right direction
               if (player.x >= (this.x + 11)){
                  this.frameY = 4;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
               }
               
               else if ((player.x + 11) <= this.x){
                  this.frameY = 5;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
               else if (player.y >= (this.y + this.height)){
                  this.frameY = 6;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
               else if ((player.y + player.height) <= this.y){
                  this.frameY = 7;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
            }  
            //If the player is not within range of the enemy then the enemy will move to the town hall
            else if (this.x == 331 && this.y == 316){
                  this.frameY = 7;
                  this.move = false;
                  this.moving = true;
                  TownHallH -= this.damage;
                  this.attacking = false;
                  //The player's speed is set to zero and the enemies charge and kill the player is the town hall is destroyed
                  if (TownHallH <= 0){
                     player.speed = 0;
                     enemy1.speed = 3;
                     enemy1.damage = 10;
                     enemy1.targetx = player.x;
                     enemy1.targety = player.y;
                     enemy2.speed = 3;
                     enemy2.damage = 10;
                     enemy2.targetx = player.x;
                     enemy2.targety = player.y;
                     enemy3.speed = 3;
                     enemy3.damage = 10;
                     enemy3.targetx = player.x;
                     enemy3.targety = player.y;
                     enemy4.speed = 3;
                     enemy4.damage = 10;
                     enemy4.targetx = player.x;
                     enemy4.targety = player.y;
                     this.move = true;
                     this.moving = false;
                     

                  }
            }
            
                
            else{
                this.attacking = false;
                this.move = true;
            }
            //This minuses the health of the player if the enemy is attacking
            if (this.attacking == true){
               player.health -= this.damage;
               //This displays a game over screen if the player is not alive
               if (player.health <= 0){
                  player.alive = false;
                  playerSprite.src = "";
                  player.attacking = false;
                  GameOver.src = "GameOver.png"
               }
            } 
         }

         }
       
      pathfinding(){
         if (this.alive == true && this.move == true){
            //This calculates the distance to the target's x and y coordinates
            this.exD = Math.abs(this.x - this.targetx)
            this.eyD = Math.abs(this.y - this.targety)
            //Checks if the enemy is at it's target
            if (this.y == this.targety && this.x == this.targetx || this.exD == 0 && this.eyD == 0){
               this.move = false;
               this.moving = true;
               this.attacking = true;
               this.speed = 0;


           }
             
           
           else{
            
               if (this.exD == 0 || this.exD >= this.eyD && this.eyD != 0){  
                  //Checks which of the distances are smaller then moves towards either the x or y coordinate of the target
                        if (this.y > this.targety){
                           Ekeys = 38;
                           this.move = true;
                        }
                        else if (this.y < this.targety){
                           Ekeys = 40;
                           this.move = true;
                        }
                     
                     } 
      
                     
               else{
                     if (this.x > this.targetx){
                        Ekeys = 37;
                        this.move = true;
                     }
      
                     else if (this.x < this.targetx){
                        Ekeys = 39;
                        this.move = true;
                     }
                  
               }
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
           if (Ekeys == 38 && this.move == true && this.attacking == false){
              this.y -= this.speed;
              this.frameY  = 2;
              this.moving = true;         
           }
        
           if (Ekeys == 37 && this.move == true && this.attacking == false){
              this.x -= this.speed;
              this.frameY  = 1;
              this.moving = true;
           }
        
           if (Ekeys == 40 && this.move == true && this.attacking == false){
              this.y += this.speed;
              this.frameY  = 3;
              this.moving = true;
           }
           if (Ekeys == 39 && this.move == true && this.attacking == false){
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
    
       class Ghost extends Enemy {
          constructor(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive, colliding, move, targetx, targety){
             super(x, y, width, height, frameX, frameY, speed, health, damage, moving, attacking, alive, colliding, move, targetx, targety);
                this.Anger = false;


          }
        detectPlayer(){
            if (this.x + 11 >= (player.x - 45) &&
               this.x <= (player.x + 11 + 70) &&
               this.y + (this.height - 1 + 40) >= (player.y) &&
               (this.y - 40) <= (player.y + player.height)) {
                
                this.targetx = player.x;
                this.targety = player.y;
                this.Anger = true;
                          
        }
            else if (this.targetx == this.x && this.targety == this.y){
               
                this.targetx = Math.floor(Math.random() * 701);
                this.targety = Math.floor(Math.random() * 561);
                this.Anger = false;
            }

            else{
               this.Anger = false;
            }
        }
        moveGhost(){
         if (this.alive == true){
           if (Ekeys == 38 && this.move == true && this.attacking == false){
              this.y -= this.speed;
              if (this.Anger == true){
                  this.frameY = 5;
              }
               else{
                this.frameY  = 1;
               }

              this.moving = true;         
           }
        
           if (Ekeys == 37 && this.move == true && this.attacking == false){
              this.x -= this.speed;
              if (this.Anger == true){
                  this.frameY = 7;
              }
               else{
                this.frameY  = 3;
               }
              this.moving = true;
           }
        
           if (Ekeys == 40 && this.move == true && this.attacking == false){
              this.y += this.speed;
              if (this.Anger == true){
                  this.frameY = 4;
              }
               else{
                this.frameY  = 0;
               }
              this.moving = true;
           }
           if (Ekeys == 39 && this.move == true && this.attacking == false){
              this.x += this.speed;
              if (this.Anger == true){
                  this.frameY = 6;
              }
               else{
                this.frameY  = 2;
               }
              this.moving = true;
           }

         }
  
         
      }
      GhostAttack(){ 
         if (this.alive == true){
            //Checking if the player is within the range of the enemy
            if (this.x + 11 >= (player.x - 10) &&
               this.x <= (player.x + 11 + 10) &&
               this.y + (this.height - 1 + 10) >= (player.y) &&
               (this.y - 5) <= (player.y + player.height)) {
               
              //These if statements check what side the player is to the enemy so that the enemy can attack in the right direction
               if (player.x >= (this.x + 11)){
                  this.frameY = 6;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
               }
               
               else if ((player.x + 11) <= this.x){
                  this.frameY = 7;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
               else if (player.y >= (this.y + this.height)){
                  this.frameY = 4;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
               else if ((player.y + player.height) <= this.y){
                  this.frameY = 5;
                  this.move = false;
                  this.moving = true;
                  this.attacking = true;
      
               }
            }  
            
                
            else{
                this.attacking = false;
                this.move = true;
            }
            //This minuses the health of the player if the enemy is attacking
            if (this.attacking == true){
               player.health -= this.damage;
              //This displays a game over screen if the player is not alive
               if (player.health <= 0){
                  player.alive = false;
                  playerSprite.src = "";
                  player.attacking = false;
                  GameOver.src = "Game Over.png"
               }
            } 
         }

         }
       
        handleGhostFrame(){
         if (this.alive == true){
           if (this.frameX < 4 && this.moving == true) this.frameX++
           else this.frameX = 0;
           }
  
         }
       }

   var player = new Character(340, 340, 31, 20, 0, 0, 3, 100, 20, false, false, true);
   var enemy2 = new Enemy(480, 480, 36, 23, 0, 0, 1, 100, 1, false, false, true, false, false, 331, 316);
   var enemy1 = new Enemy(460, 480, 36, 23, 0, 0, 1, 100, 1, false, false, true, false, false, 331, 316);
   var enemy3 = new Enemy(310, 480, 36, 23, 0, 0, 1, 100, 1, false, false, true, true, false, 331, 316);
   var enemy4 = new Enemy(300, 480, 36, 23, 0, 0, 1, 100, 1, false, false, true, false, false, 331, 188);
   var Ghost1 = new Ghost(300, 480, 11, 16, 0, 0, 1, 100, 1, false, false, true, false, false, 300, 480);



   
   class Hitbox {
      constructor(x, y){
         this.x = x;
         this.y = y;
      }
         
   }

   var tree1 = new Hitbox(350, 250);
    

   function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
   ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
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
      collision();
      mazeCollision();

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
      collision();
      mazeCollision();

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
      collision();
      mazeCollision();

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
      collision();
      mazeCollision();

      }
   }

   if (keys[32] && right == true && player.x < canvas.width - player.width){
      player.frameY  = 4;
      player.attacking = true;
      collision();
      mazeCollision();

   }
   if (keys[32] && left == true && player.x < canvas.width - player.width){
      player.frameY  = 5;
      player.attacking = true;
      collision();
      mazeCollision();

   }
   if (keys[32] && down == true && player.x < canvas.width - player.width){
      player.frameY  = 6;
      player.attacking = true;
      collision();
      mazeCollision();

   }
   if (keys[32] && up == true && player.x < canvas.width - player.width){
      player.frameY  = 7;
      player.attacking = true;
      collision();
      mazeCollision();

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
      else if (player.attacking == true && enemy4.attacking == true){
         enemy4.health -= player.damage;
         player.attacking = false;


         if (enemy4.health <= 0){
            enemy4.alive = false;
            enemy4Sprite.src = "";
            enemy4.attacking = false;

         }
      }

   }

   /*function handlePlayerAFrame(){

         if (player.frameX < 7 && player.attacking == true){
            
            while(player.frameX < 7){
                  player.frameX++;
            }
            player.attacking = false;
            collision(player, movePlayer);
            
         }
   }
   */
   /*
   function animate(){
   ctx.clearRect(0,0,canvas.width, canvas.height);
   ctx.drawImage(background, 0,0,canvas.width, canvas.height);
   drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
   movePlayer();
   handlePlayerFrame();
   requestAnimationFrame(animate);
   };
   animate();*/
 
   
   function playerHealth(){    
      //These if statements are used to determine which set of images are to be shown according to what the player's health is
       if (player.health > 90){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Full Heart.png"
           Heart4.src = "Full Heart.png"
           Heart5.src = "Full Heart.png"
       }
       else if (player.health > 80){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Full Heart.png"
           Heart4.src = "Full Heart.png"
           Heart5.src = "Half Heart.png"
       }
       else if (player.health > 70){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Full Heart.png"
           Heart4.src = "Full Heart.png"
           Heart5.src = "Empty Heart.png"
       }
       else if (player.health > 60){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Full Heart.png"
           Heart4.src = "Half Heart.png"
           Heart5.src = "Empty Heart.png"
       }
       else if (player.health > 50){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Full Heart.png"
           Heart4.src = "Empty Heart.png"
           Heart5.src = "Empty Heart.png"
       }
       else if (player.health > 40){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Half Heart.png"
           Heart4.src = "Empty Heart.png"
           Heart5.src = "Empty Heart.png"
       }
       else if (player.health > 30){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Full Heart.png"
           Heart3.src = "Empty Heart.png"
           Heart4.src = "Empty Heart.png"
           Heart5.src = "Empty Heart.png"
       }
        else if (player.health > 20){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Half Heart.png"
           Heart3.src = "Empty Heart.png"
           Heart4.src = "Empty Heart.png"
           Heart5.src = "Empty Heart.png"
       }
       else if (player.health > 10){
           Heart1.src = "Full Heart.png"
           Heart2.src = "Empty Heart.png"
           Heart3.src = "Empty Heart.png"
           Heart4.src = "Empty Heart.png"
           Heart5.src = "Empty Heart.png"
       }
        else if (player.health > 1){
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
    
function TownHallHealth(){    
   //These if statements are used to determine which image is to be shown according to what the town hall health is
       if (TownHallH > 475){
        TownHallHBar.src = Bar[0];
       }
       else if (TownHallH > 450){
           TownHallHBar.src = Bar[1];
       }
       else if (TownHallH > 425){
           TownHallHBar.src = Bar[2];
       }
       else if (TownHallH > 400){
           TownHallHBar.src = Bar[3];
       }
       else if (TownHallH > 375){
           TownHallHBar.src = Bar[4];
       }
       else if (TownHallH > 350){
           TownHallHBar.src = Bar[5];
       }
       else if (TownHallH > 325){
           TownHallHBar.src = Bar[6];
       }
        else if (TownHallH > 300){
           TownHallHBar.src = Bar[7];
       }
       else if (TownHallH > 275){
           TownHallHBar.src = Bar[8];
       }
        else if (TownHallH > 250){
           TownHallHBar.src = Bar[9];
       }
        else if (TownHallH > 225){
           TownHallHBar.src = Bar[10];
       }
        else if (TownHallH > 200){
           TownHallHBar.src = Bar[11];
       }
        else if (TownHallH > 175){
           TownHallHBar.src = Bar[12];
       }
        else if (TownHallH > 150){
           TownHallHBar.src = Bar[13];

       }
        else if (TownHallH > 125){
           TownHallHBar.src = Bar[14];

       }
        else if (TownHallH > 100){
           TownHallHBar.src = Bar[15];

       }
        else if (TownHallH > 75){
           TownHallHBar.src = Bar[16];

       }
        else if (TownHallH > 50){
           TownHallHBar.src = Bar[17];

       }
        else if (TownHallH > 25){
           TownHallHBar.src = Bar[18];

       }
        else if (TownHallH > 1){
           TownHallHBar.src = Bar[19];

       }
       else{
         TownHallHBar.src = Bar[20];

     }
       
       
   }
    
   function maze(){
       if (wave2 == true){
           if (player.x > 660){
              /*Changing canvas size*/
               canvas.width = 200;
               canvas.height = 160;
               /*Changing the background and removing previous images from the main map*/
               background.src = "Maze 1.png";     
               bush.src = "";
               Tower1.src = "";
               Tower2.src = "";
               Tower3.src = "";
               Tower4.src = "";
               Tree.src = "";
               player.x = 20;
               player.y = 70;
               Ghost1Sprite.src = "";
               maze1 = true;
           } 
           if (player.x < 1 && maze1 == true){
              /*Changing the canvas size and adding the images back if the user re enters the main map*/
                   canvas.width = 700;
                   canvas.height = 560;
                   background.src = "Map.png";
                   bush.src = "bush.png";
                   Tower1.src = "Tower1.png";
                   Tower2.src = "Tower1.png";
                   Tower3.src = "Tower2.png";
                   Tower4.src = "Tower2.png";
                   Tree.src = "Tree.png";
                   player.x = 650;
                   player.y = 280;
                   Ghost1Sprite.src = "Ghost.png";
                   maze1 = false;
                  
           }

           else if (player.y < 1 && maze1 == true){
             background.src = "Maze 2.png";
             player.y = 135;
             maze1 = false;
             maze2 = true;
           }

           if (player.y > 135 && maze2 == true){
             background.src = "Maze 1.png";
             maze1 = true;
             maze2 = false;
             player.y = 10;
           }
           else if (player.x > 160 && maze2 == true){
            background.src = "Maze 3.png";
            maze2 = false;
            maze3 = true;
            player.x = 10;
           }
           if (player.y > 135 && maze3 == true){
            background.src = "Maze 4.png";
            maze3 = false;
            maze4 = true;
            player.y = 5;
           }
           else if (player.x < 1 && maze3 == true){
            background.src = "Maze 2.png";
            maze3 = false;
            maze2 = true;
            player.x = 135;
           }
           else if (player.x > 160 && maze3 == true){
            background.src = "Maze5.png";
            maze3 = false;
            maze5 = true;
            player.x = 10;
           }
           if (player.y -3 < 1 && maze4 == true){
            background.src = "Maze 3.png";
            maze4 = false;
            maze3 = true;
            player.y = 135;
           }
           if (player.x < 1 && maze5 == true){
            background.src = "Maze 3.png";
            maze5 = false;
            maze3 = true;
            player.x = 135;
           }
           else if (player.y > 135 && maze5 == true){
            background.src = "Maze6.png";
            maze5 = false;
            maze6 = true;
            player.y = 10;
           }
           if (player.y < 1 && maze6 == true){
            background.src = "Maze5.png";
            maze6 = false;
            maze5 = true;
            player.y = 135;
           }
           else if (player.x > 160 && maze6 == true){
            background.src = "Maze7.png";
            maze6 = false;
            maze7 = true;
            player.x = 10;
           }
           if (player.x < 1 && maze7 == true){
            background.src = "Maze6.png";
            maze7 = false;
            maze6 = true;
            player.x = 135;
           }
       }



   }
       function wave(){
          if (/*num == 2 &&*/ wave2 == false){
             wave1 = true;
          }
          if (enemy3.alive == false && enemy2.alive == false && enemy1.alive == false && wave2 == false){
              wave1 = false;
              wave2 = true;
              enemy1.y = 50;
              enemy2.y = 50;
              enemy3.y = 50;
              enemy4.y = 50;
              enemy2.x = 450;
              enemy1.x = 430;
              enemy3.x = 331;
              enemy4.x = 300;
              enemy1.health = 100;
              enemy2.health = 100;
              enemy3.health = 100;
              enemy1.alive = true;
              enemy2.alive = true;
              enemy3.alive = true;
              enemy1Sprite.src = "Enemy.png";
              enemy2Sprite.src = "Enemy.png";
              enemy3Sprite.src = "Enemy.png";
              enemy4Sprite.src = "Enemy.png";
              enemy1.speed = 1;
              enemy2.speed = 1;
              enemy3.speed = 1;
              enemy1.targety = 188;
              enemy2.targety = 188;
              enemy3.targety = 188;


        
          }        
          if (enemy4.alive == false && enemy3.alive == false && enemy2.alive == false && enemy1.alive == false){
            wave3 = true;
        } 
        if (wave2 == true){   
           if (h1 == false){        
            if (65 + 6 >= (player.x) &&
            65 <= (player.x + 11 + 15) &&
            75 + (11 - 1) >= (player.y) &&
            (75 - 5) <= (player.y + player.height)){
               regen = true;
               h1 = true
               Hearts.src = "";
         }
           }
           if (h2 == false){        
            if (500 + 6 >= (player.x) &&
            500 <= (player.x + 11 + 15) &&
            150 + (11 - 1) >= (player.y) &&
            (150 - 5) <= (player.y + player.height)){
               regen = true;
               h2 = true
               Hearts1.src = "";
         }
           }
           if (h3 == false){        
            if (200 + 6 >= (player.x) &&
            200 <= (player.x + 11 + 15) &&
            350 + (11 - 1) >= (player.y) &&
            (350 - 5) <= (player.y + player.height)){
               regen = true;
               h3 = true
               Hearts2.src = "";
         }
           }
         while (regen == true){
            player.health += 20;
            regen = false;
         }
         }        
       }

   let fps, fpsInterval, startTime, now, then, elapsed;

   function startAnimating(fps){
      fpsInterval = 1000/fps;
      then = Date.now();
      startTime = then; 
      animate();
   }

   function animate(){
   requestAnimationFrame(animate);
   now = Date.now();
   elapsed = now - then;
   if (elapsed > fpsInterval){
      then = now - (elapsed % fpsInterval);
      maze();
      ctx.clearRect(0,0,canvas.width, canvas.height);
      ctx.drawImage(background, 0,0,canvas.width, canvas.height);
      ctx.drawImage(coin, 405, 82);
      ctx.drawImage(coin1, 300, 200);
      ctx.drawImage(currency, 20, 520);
      ctx.drawImage(counter, 80, 520);
      ctx.drawImage(Heart1, 520, 525);
      ctx.drawImage(Heart2, 553, 525);
      ctx.drawImage(Heart3, 586, 525);
      ctx.drawImage(Heart4, 619, 525);
      ctx.drawImage(Heart5, 652, 525);
       
      if (maze7 == true){
               if (cOpen == false){
                  ctx.drawImage(Chest, 100, 90);   
                  /*Checking if the user is within the range of the chest*/
                  if (100 + 6 >= (player.x) &&
                     100 <= (player.x + 11 + 15) &&
                     90 + (11 - 1) >= (player.y) &&
                     (90 - 5) <= (player.y + player.height)) {
                        /*Checking if the player has the key*/
                     if (PKey == true){
                        Text.src = "Text.png"  
                        ctx.drawImage(Text, 95, 75);

                        if(keys[79]){
                           cOpen = true
                        }
                        }

                     if (PKey == false){
                     Text2.src = "Text2.png"
                     ctx.drawImage(Text2, 93, 75);
                     }

               }
                  else{
                  Text.src = ""  
                  Text2.src = ""
                  }

         }
            if (cOpen == true){
               Text.src = "" 
               Chest.src = "" 
               ctx.drawImage(OpenChest, 100, 88);
               ctx.drawImage(Text3, 60, 40);
               Stop();
               

               }
            }
            if (maze4 == true){
               ctx.drawImage(Key, 95, 35);
               if (95 + 3 >= (player.x) &&
               95 <= (player.x + 5 + 10) &&
               35 + (5 - 4) >= (player.y) &&
               (35 - 9) <= (player.y + player.height)) {

                  Key.src = "" 
                  PKey = true;
               }

            }

      CP();    
      drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
      ctx.drawImage(bush, 400, 80);
      ctx.drawImage(Tower1, 99, 63);
      ctx.drawImage(Tower2, 553, 63);
      ctx.drawImage(Tower3, 99, 391);
      ctx.drawImage(Tower4, 553, 391);
      ctx.drawImage(Tree, 359, 131);
      ctx.drawImage(Tree, 295, 131);
      ctx.drawImage(Tree, 359, 131);

   
      
      if (wave1 == true){
         drawSprite(enemy1Sprite, enemy1.width * enemy1.frameX, enemy1.height * enemy1.frameY, enemy1.width, enemy1.height, enemy1.x, enemy1.y, enemy1.width, enemy1.height); 
      drawSprite(enemy2Sprite, enemy2.width * enemy2.frameX, enemy2.height * enemy2.frameY, enemy2.width, enemy2.height, enemy2.x, enemy2.y, enemy2.width, enemy2.height); 
      drawSprite(enemy3Sprite, enemy3.width * enemy3.frameX, enemy3.height * enemy3.frameY, enemy3.width, enemy3.height, enemy3.x, enemy3.y, enemy3.width, enemy3.height);

         enemy1.pathfinding();
         enemy1.enemyAttack();
         enemy1.moveEnemy();
         enemy1.handleEnemyFrame();
          enemy2.pathfinding();
          enemy2.enemyAttack();
          enemy2.moveEnemy();
          enemy2.handleEnemyFrame();
          enemy3.pathfinding();
          enemy3.enemyAttack();
          enemy3.moveEnemy();
          enemy3.handleEnemyFrame(); 



   
      }
      if (ghostSpawn == true){
         drawSprite(Ghost1Sprite, Ghost1.width * Ghost1.frameX, Ghost1.height * Ghost1.frameY, Ghost1.width, Ghost1.height, Ghost1.x, Ghost1.y, Ghost1.width, Ghost1.height); 
         Ghost1.pathfinding();
         Ghost1.enemyAttack();
         Ghost1.moveGhost();
         Ghost1.handleGhostFrame(); 
         Ghost1.detectPlayer(); 
      }
      if (wave2 == true){
         ghostSpawn = true;
         drawSprite(enemy1Sprite, enemy1.width * enemy1.frameX, enemy1.height * enemy1.frameY, enemy1.width, enemy1.height, enemy1.x , enemy1.y, enemy1.width, enemy1.height); 
         drawSprite(enemy2Sprite, enemy2.width * enemy2.frameX, enemy2.height * enemy2.frameY, enemy2.width, enemy2.height, enemy2.x, enemy2.y, enemy2.width, enemy2.height); 
         drawSprite(enemy3Sprite, enemy3.width * enemy3.frameX, enemy3.height * enemy3.frameY, enemy3.width, enemy3.height, enemy3.x, enemy3.y, enemy3.width, enemy3.height);
         drawSprite(enemy4Sprite, enemy4.width * enemy4.frameX, enemy4.height * enemy4.frameY, enemy4.width, enemy4.height, enemy4.x, enemy4.y, enemy4.width, enemy4.height);
         ctx.drawImage(Hearts, 65, 75);
         ctx.drawImage(Hearts1, 500, 150);
         ctx.drawImage(Hearts2, 200, 350);
         enemy1.pathfinding();
         enemy1.enemyAttack();
         enemy1.moveEnemy();
         enemy1.handleEnemyFrame();
         enemy2.pathfinding();
         enemy2.enemyAttack();
         enemy2.moveEnemy();
         enemy2.handleEnemyFrame();
         enemy3.pathfinding();
         enemy3.enemyAttack();
         enemy3.moveEnemy();
         enemy3.handleEnemyFrame(); 
         enemy4.pathfinding();
         enemy4.enemyAttack();
         enemy4.moveEnemy();
         enemy4.handleEnemyFrame(); 
         
         if (enemy1.x == enemy1.targetx && enemy1.y == enemy1.targety){
            if (e1T1 == true){
               enemy1.targetx = 331;
               enemy1.speed = 1;
            }
            else{
               enemy1.targetx = 255;
               enemy1.speed = 1;
            }

            if (enemy1.x == enemy1.targetx && enemy1.y == enemy1.targety){
               enemy1.targety = 331;
               enemy1.speed = 1;
               if (enemy1.x == enemy1.targetx && enemy1.y == enemy1.targety){
                  e1T1 = true
               }
            }
         }

         if (enemy2.x == enemy2.targetx && enemy2.y == enemy2.targety){
            if (e2T1 == true){
               enemy2.targetx = 331;
               enemy2.speed = 1;
            }
            else{
               enemy2.targetx = 255;
               enemy2.speed = 1;
            }

            if (enemy2.x == enemy2.targetx && enemy2.y == enemy2.targety){
               enemy2.targety = 331;
               enemy2.speed = 1;
               if (enemy2.x == enemy2.targetx && enemy2.y == enemy2.targety){
                  e2T1 = true;
               }
            }
         }

         if (enemy3.x == enemy3.targetx && enemy3.y == enemy3.targety){
            if (e3T1 == true){
               enemy3.targetx = 331;
               enemy3.speed = 1;
            }
            else{
               enemy3.targetx = 255;
               enemy3.speed = 1;   
            }

            if (enemy3.x == enemy3.targetx && enemy3.y == enemy3.targety){
               enemy3.targety = 331;
               enemy3.speed = 1;
               if (enemy3.x == enemy3.targetx && enemy3.y == enemy3.targety){
                  e3T1 = true;
               }
            }
         }

         if (enemy4.x == enemy4.targetx && enemy4.y == enemy4.targety){
            if (e4T1 == true){
               enemy4.targetx = 331;
               enemy4.speed = 1;
            }
            else{
               enemy4.targetx = 255;
               enemy4.speed = 1;
            }

            if (enemy4.x == enemy4.targetx && enemy4.y == enemy4.targety){
               enemy4.targety = 331;
               enemy4.speed = 1;
               if (enemy4.x == enemy4.targetx && enemy4.y == enemy4.targety){
                  e4T1 = true;
               }
            }
         }
   
      }
       
      ctx.drawImage(TownHall, 296, 189);
      ctx.drawImage(TownHallHBar, 305, 195);
      ctx.drawImage(GameOver, 0, 0);
      movePlayer();
      handlePlayerFrame();    
      collision();
      
      mazeCollision();
      TownHallHealth();
      playerHealth();
      playerAttack();
      wave();

   }

   }
   startAnimating(15);

   function mazeCollision(){
       if (maze1 == true){
           if (player.x + 10 <= (mazeWall1.x + 111) &&
                 mazeWall1.x <= (player.x + player.width - 10) &&
                 player.y + 3 <= (mazeWall1.y + 60) &&
                 mazeWall1.y <= (player.y + player.height - 1)) {


                 if (player.x + 10 < (mazeWall1.x + 111) && player.x + 10 > (mazeWall1.x + 107)){
                    player.x = player.x + 1.9
                    player.colliding = true;
                 }

                 else if (player.y + 3 < (mazeWall1.y + 60) && player.y + 3 > (mazeWall1.y + 56)){
                  player.y = player.y + 1
               }
  



           }else {
              startAnimating(15);
              player.colliding = false;

           }  
           if (player.x + player.width - 11 > (mazeWall3.x) ) {  
              player.x = player.x - 2
           }
       }

   }

   function collision(){
      if (maze1 == false && maze2 == false && maze3 == false && maze4 == false && maze5 == false && maze6 == false && maze7 == false){  
    //If the player is next to the wall
       if (player.x + 10 <= (vWall1.x + 19) &&
             vWall1.x <= (player.x + player.width - 10) &&
             player.y + 3 <= (vWall1.y + 139) &&
             vWall1.y <= (player.y + player.height - 1)) {


             //Checking which side of the wall the enemy is to see which direction to push the enemy away from the wall
             if ((player.x + player.width - 10) > vWall1.x && (player.x + player.width - 10) < vWall1.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (vWall1.x + 18) && player.x + 10 > (vWall1.x + 14)){
                player.x = player.x + 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (vWall2.x + 19) &&
             vWall2.x <= (player.x + player.width - 10) &&
             player.y + 3 <= (vWall2.y + 139) &&
             vWall2.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > vWall2.x && (player.x + player.width - 10) < vWall2.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (vWall2.x + 18) && player.x + 10 > (vWall2.x + 14)){
                player.x = player.x + 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (vWall3.x + 19) &&
             vWall3.x <= (player.x + player.width - 10) &&
             player.y + 3 <= (vWall3.y + 130) &&
             vWall3.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > vWall3.x && (player.x + player.width - 10) < vWall3.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (vWall3.x + 18) && player.x + 10 > (vWall3.x + 14)){
                player.x = player.x + 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (vWall4.x + 19) &&
             vWall4.x <= (player.x + player.width - 10) &&
             player.y + 3 <= (vWall4.y + 130) &&
             vWall4.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > vWall4.x && (player.x + player.width - 10) < vWall4.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (vWall4.x + 18) && player.x + 10 > (vWall4.x + 14)){
                player.x = player.x + 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (hWall1.x + 170) &&
             hWall1.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (hWall1.y + 10) &&
             hWall1.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > hWall1.x && (player.x + player.width - 10) < hWall1.x + 4){
                player.x = player.x - 1
             }

             else if (player.y + 3 < (hWall1.y + 11) && player.y + 3 > (hWall1.y + 7)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > hWall1.y && (player.y + player.height - 1) < hWall1.y + 4){
                player.y = player.y - 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (hWall2.x + 205) &&
             hWall2.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (hWall2.y + 10) &&
             hWall2.y <= (player.y + player.height - 1)) {



             if (player.x + 10 < (hWall3.x + 205) && player.x + 10 > (hWall3.x + 201)){
                player.x = player.x + 1
             }

             else if (player.y + 3 < (hWall2.y + 11) && player.y + 3 > (hWall2.y + 7)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > hWall2.y && (player.y + player.height - 1) < hWall2.y + 4){
                player.y = player.y - 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (hWall3.x + 170) &&
             hWall3.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (hWall3.y + 10) &&
             hWall3.y <= (player.y + player.height - 1)) {



             if (player.x + 10 < (hWall3.x + 170) && player.x + 10 > (hWall3.x + 166)){
                player.x = player.x + 1
             }

             else if (player.y + 3 < (hWall3.y + 9) && player.y + 3 > (hWall3.y + 5)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > hWall3.y && (player.y + player.height - 1) < hWall3.y + 4){
                player.y = player.y - 1
             }



       }else {
          startAnimating(15);

       }


       if (player.x + 10 <= (hWall4.x + 170) &&
             hWall4.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (hWall4.y + 10) &&
             hWall4.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > hWall4.x && (player.x + player.width - 10) < hWall4.x + 4){
                player.x = player.x - 1
             }

             else if (player.y + 3 < (hWall4.y + 9) && player.y + 3 > (hWall4.y + 5)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > hWall4.y && (player.y + player.height - 1) < hWall4.y + 4){
                player.y = player.y - 1
             }



       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (tower1.x + 47) &&
             tower1.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (tower1.y + 10) &&
             tower1.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > tower1.x && (player.x + player.width - 10) < tower1.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (tower1.x + 45) && player.x + 10 > tower1.x + 40){
                player.x = player.x + 1
             }


             else if (player.y + 3 < (tower1.y + 20) && player.y + 3 > (tower1.y + 6)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > tower1.y && (player.y + player.height - 1) < tower1.y + 4){
                player.y = player.y - 1
             }




       }else {
          startAnimating(15);

       }


          if (player.x + 10 <= (tower2.x + 47) &&
          tower2.x + 1 <= (player.x + player.width - 10) &&
          player.y + 3 <= (tower2.y + 10) &&
          tower2.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > tower2.x && (player.x + player.width - 10) < tower2.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (tower2.x + 45) && player.x + 10 > tower2.x + 40){
                player.x = player.x + 1
             }


             else if (player.y + 3 < (tower2.y + 20) && player.y + 3 > (tower2.y + 6)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > tower2.y && (player.y + player.height - 1) < tower2.y + 4){
                player.y = player.y - 1
             }




          }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (tower3.x + 47) &&
             tower3.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (tower3.y + 10) &&
             tower3.y <= (player.y + player.height - 1)) {



             if ((player.x + player.width - 10) > tower3.x && (player.x + player.width - 10) < tower3.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (tower3.x + 45) && player.x + 10 > tower3.x + 40){
                player.x = player.x + 1
             }


             else if (player.y + 3 < (tower3.y + 20) && player.y + 3 > (tower3.y + 6)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > tower3.y && (player.y + 16) < tower3.y + 4){
                player.y = player.y - 1
             }




       }else {
          startAnimating(15);

       }

       if (player.x + 10 <= (tower4.x + 47) &&
             tower4.x + 1 <= (player.x + player.width - 10) &&
             player.y + 3 <= (tower4.y + 10) &&
             tower4.y <= (player.y + player.height -1)) {



             if ((player.x + player.width - 10) > tower4.x && (player.x + player.width - 10) < tower4.x + 4){
                player.x = player.x - 1
             }

             else if (player.x + 10 < (tower4.x + 45) && player.x + 10 > tower4.x + 40){
                player.x = player.x + 1
             }


             else if (player.y + 3 < (tower4.y + 20) && player.y + 3 > (tower4.y + 6)){
                player.y = player.y + 1
             }

             else if ((player.y + player.height - 1) > tower4.y && (player.y + player.height - 1) < tower4.y + 7){
                player.y = player.y - 1
             }


       }else {
          startAnimating(15);

       }
   }
   }

    function collisionE(enemy1){

       if (enemy1.x + 10 <= (vWall1.x + 19) &&
             vWall1.x <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (vWall1.y + 139) &&
             vWall1.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > vWall1.x && (enemy1.x + enemy1.width - 10) < vWall1.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
                
             }

             else if (enemy1.x + 10 < (vWall1.x + 18) && enemy1.x + 10 > (vWall1.x + 14)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (vWall2.x + 19) &&
             vWall2.x <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (vWall2.y + 139) &&
             vWall2.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > vWall2.x && (enemy1.x + enemy1.width - 10) < vWall2.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (vWall2.x + 18) && enemy1.x + 10 > (vWall2.x + 14)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (vWall3.x + 19) &&
             vWall3.x <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (vWall3.y + 130) &&
             vWall3.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > vWall3.x && (enemy1.x + enemy1.width - 10) < vWall3.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (vWall3.x + 18) && enemy1.x + 10 > (vWall3.x + 14)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (vWall4.x + 19) &&
             vWall4.x <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (vWall4.y + 130) &&
             vWall4.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > vWall4.x && (enemy1.x + enemy1.width - 10) < vWall4.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (vWall4.x + 18) && enemy1.x + 10 > (vWall4.x + 14)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (hWall1.x + 170) &&
             hWall1.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (hWall1.y + 10) &&
             hWall1.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > hWall1.x && (enemy1.x + enemy1.width - 10) < hWall1.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.y + 3 < (hWall1.y + 11) && enemy1.y + 3 > (hWall1.y + 7)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > hWall1.y && (enemy1.y + enemy1.height - 1) < hWall1.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (hWall2.x + 205) &&
             hWall2.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (hWall2.y + 10) &&
             hWall2.y <= (enemy1.y + enemy1.height - 1)) {



             if (enemy1.x + 10 < (hWall3.x + 205) && enemy1.x + 10 > (hWall3.x + 201)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }

             else if (enemy1.y + 3 < (hWall2.y + 11) && enemy1.y + 3 > (hWall2.y + 7)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > hWall2.y && (enemy1.y + enemy1.height - 1) < hWall2.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (hWall3.x + 170) &&
             hWall3.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (hWall3.y + 10) &&
             hWall3.y <= (enemy1.y + enemy1.height - 1)) {



             if (enemy1.x + 10 < (hWall3.x + 170) && enemy1.x + 10 > (hWall3.x + 166)){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }

             else if (enemy1.y + 3 < (hWall3.y + 9) && enemy1.y + 3 > (hWall3.y + 5)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > hWall3.y && (enemy1.y + enemy1.height - 1) < hWall3.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }


       if (enemy1.x + 10 <= (hWall4.x + 170) &&
             hWall4.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (hWall4.y + 10) &&
             hWall4.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > hWall4.x && (enemy1.x + enemy1.width - 10) < hWall4.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.y + 3 < (hWall4.y + 9) && enemy1.y + 3 > (hWall4.y + 5)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > hWall4.y && (enemy1.y + enemy1.height - 1) < hWall4.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }



       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (tower1.x + 47) &&
             tower1.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (tower1.y + 10) &&
             tower1.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > tower1.x && (enemy1.x + enemy1.width - 10) < tower1.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (tower1.x + 45) && enemy1.x + 10 > tower1.x + 40){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }


             else if (enemy1.y + 3 < (tower1.y + 20) && enemy1.y + 3 > (tower1.y + 6)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > tower1.y && (enemy1.y + enemy1.height - 1) < tower1.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }




       }else {
          startAnimating(15);

       }


          if (enemy1.x + 10 <= (tower2.x + 47) &&
          tower2.x + 1 <= (enemy1.x + enemy1.width - 10) &&
          enemy1.y + 3 <= (tower2.y + 10) &&
          tower2.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > tower2.x && (enemy1.x + enemy1.width - 10) < tower2.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (tower2.x + 45) && enemy1.x + 10 > tower2.x + 40){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }


             else if (enemy1.y + 3 < (tower2.y + 20) && enemy1.y + 3 > (tower2.y + 6)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > tower2.y && (enemy1.y + enemy1.height - 1) < tower2.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }




          }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (tower3.x + 47) &&
             tower3.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (tower3.y + 10) &&
             tower3.y <= (enemy1.y + enemy1.height - 1)) {



             if ((enemy1.x + enemy1.width - 10) > tower3.x && (enemy1.x + enemy1.width - 10) < tower3.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (tower3.x + 45) && enemy1.x + 10 > tower3.x + 40){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }


             else if (enemy1.y + 3 < (tower3.y + 20) && enemy1.y + 3 > (tower3.y + 6)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > tower3.y && (enemy1.y + 16) < tower3.y + 4){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }




       }else {
          startAnimating(15);

       }

       if (enemy1.x + 10 <= (tower4.x + 47) &&
             tower4.x + 1 <= (enemy1.x + enemy1.width - 10) &&
             enemy1.y + 3 <= (tower4.y + 10) &&
             tower4.y <= (enemy1.y + enemy1.height -1)) {



             if ((enemy1.x + enemy1.width - 10) > tower4.x && (enemy1.x + enemy1.width - 10) < tower4.x + 4){
                enemy1.x = enemy1.x - 1;
                enemy1.colliding = true;
             }

             else if (enemy1.x + 10 < (tower4.x + 45) && enemy1.x + 10 > tower4.x + 40){
                enemy1.x = enemy1.x + 1;
                enemy1.colliding = true;
             }


             else if (enemy1.y + 3 < (tower4.y + 20) && enemy1.y + 3 > (tower4.y + 6)){
                enemy1.y = enemy1.y + 1;
                enemy1.colliding = true;
             }

             else if ((enemy1.y + enemy1.height - 1) > tower4.y && (enemy1.y + enemy1.height - 1) < tower4.y + 7){
                enemy1.y = enemy1.y - 1;
                enemy1.colliding = true;
             }


       }else {
          startAnimating(15);

       }

       }

   function CP(){
      //Checks if the coin has been collected or not
      if (c == false){
         //If the player is touching the coin
         if (player.x + 10 <= (Coin1.x + Coin1.width) &&
         Coin1.x + 1 <= (player.x + player.width - 10) &&
         player.y + 3 <= (Coin1.y + Coin1.height) &&
         Coin1.y - 3 <= (player.y + player.height - 3)) {

            //The coin dissapears and the num counter is incremented which then increases the onscreen counter
            coin.src = "";

            num = ++num;

            counter.src = coins[num];    

            c = true;



      }else {
      startAnimating(15);

      }
   }

      if (c1 == false){

         if (player.x + 10 <= (Coin2.x + Coin2.width) &&
         Coin2.x + 1 <= (player.x + player.width - 10) &&
         player.y + 3 <= (Coin2.y + Coin2.height) &&
         Coin2.y - 3 <= (player.y + player.height - 3)) {


            coin1.src = "";
            
            num = ++num;

            counter.src = coins[num];

            c1 = true;
            

      }else {
      startAnimating(15);

      }
   }
   }
}
