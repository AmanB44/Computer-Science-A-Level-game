/* This gets the canvas fron index html and defines the width and height */

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 560;

function doSomethingOnClick (){    
    document.getElementById("STARTimg").style.display='none';
    document.getElementById("StartScreen").style.display='none';
    Game(); 
 }
function Game (){

   /* This is an array which stores the currently pressed keys*/

   var keys = [];
   var Ekeys = [];

   /* This "cuts out" each individual sprite character, defines the speed of the character and where the character is placed on the map*/

   var coins = ["0.png","01.png","2.png"];
   var num = 0;

   c = false;
   c1 = false;

   var wave1 = false;
   var wave2 = false;
   var wave3 = false;

   var maze1 = false;
   var maze2 = false;
    
    var mazeWall1 = {
        x: 0,
        y: 0,
    }
    var mazeWall3 = {
      x: 156,
      y: 0,
  }
   var base = {
      y: 315,
      x: 330,
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


   /* This puts the background and character on the screen*/

   var playerSprite = new Image();
   playerSprite.src = "Player1.png";
   var enemy1Sprite = new Image();
   enemy1Sprite.src = "Enemy.png";
   var enemy2Sprite = new Image();
   enemy2Sprite.src = "Enemy.png";
   var enemy3Sprite = new Image();
   enemy3Sprite.src = "Enemy.png";
   var background = new Image();
   background.src = "Map.png";
   var coin = new Image();
   coin.src = "coin.png";
   var coin1 = new Image();
   coin1.src = "coin.png";
   var currency = new Image();
   currency.src = "currency.png";
   var counter = new Image();
   counter.src = "0.png";
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
               this.y + (this.height - 1 + 10) >= (player.y) &&
               (this.y - 5) <= (player.y + player.height)) {
               
               
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

   var player = new Character(340, 340, 31, 20, 0, 0, 3, 100, 20, false, false, true);

   
   var enemy1 = new Enemy(460, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   var enemy2 = new Enemy(500, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   var enemy3 = new Enemy(330, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   
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
    
   function maze(){
       if (player.x > 660){
           canvas.width = 200;
           canvas.height = 190;
           background.src = "Maze1.png";     
           bush.src = "";
           Tower1.src = "";
           Tower2.src = "";
           Tower3.src = "";
           Tower4.src = "";
           Tree.src = "";
           player.x = 20;
           player.y = 80;
           maze1 = true;
       } 
       if (player.x < 1 && maze1 == true){
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
               maze1 = false;
       }

       else if (player.y < 1 && maze1 == true){
         background.src = "Maze2.png";
         player.y = 160;
         maze1 = false;
         maze2 = true;
       }

       if (player.y > 170 && maze2 == true){
         background.src = "Maze1.png";
         maze1 = true;
         maze2 = false;
         player.y = 10;
       }
   }

   function wave(){
      if (num == 2){
         wave1 = true;
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

      movePlayer();
      handlePlayerFrame();    
      collision();
      
      mazeCollision();

      playerHealth();
      playerAttack();
      wave();
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
         collisionE();
      }
   }
   }
   startAnimating(15);
  
    
   function mazeCollision(){
      console.log(player.colliding);
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
   if (maze1 == false && maze2 == false){  
       if (player.x + 10 <= (vWall1.x + 19) &&
             vWall1.x <= (player.x + player.width - 10) &&
             player.y + 3 <= (vWall1.y + 139) &&
             vWall1.y <= (player.y + player.height - 1)) {



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
      if (c == false){

         if (player.x + 10 <= (Coin1.x + Coin1.width) &&
         Coin1.x + 1 <= (player.x + player.width - 10) &&
         player.y + 3 <= (Coin1.y + Coin1.height) &&
         Coin1.y - 3 <= (player.y + player.height - 3)) {


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
