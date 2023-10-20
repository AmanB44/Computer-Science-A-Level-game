
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
 var collisions = new collision();

function Game (){
   import {maze} from './Maze';
import {CP} from './Coins';
import {Character, Enemy, Hitbox, enemyAttack, pathfinding, moveEnemy, handleEnemyFrame, movePlayer, handlePlayerFrame, playerAttack, playerHealth } from './Characters';

   var player = new Character(340, 340, 31, 20, 0, 0, 3, 100, 20, false, false, true);
   var tree1 = new Hitbox(350, 250);
   var enemy1 = new Enemy(460, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   var enemy2 = new Enemy(500, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   var enemy3 = new Enemy(330, 530, 36, 23, 0, 0, 1, 100, 0.5, false, false, true, false, false);
   
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
   currency.src = "Currency.png";
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

   function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
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
       if(elapsed > fpsInterval){
          maze();
          ctx.clearRect(0,0,canvas.width, canvas.height);
          ctx.drawImage(background, 0,0,canvas.width, canvas.height);

          ctx.drawImage(coin, 405, 82);
          ctx.drawImage(coin1, 300, 200);
          ctx.drawImage(currency, 20, 515);
          ctx.drawImage(counter, 80, 515);
          ctx.drawImage(Heart1, 120, 515);
          ctx.drawImage(Heart2, 153, 515);
          ctx.drawImage(Heart3, 186, 515);
          ctx.drawImage(Heart4, 219, 515);
          ctx.drawImage(Heart5, 252, 515);
          CP();    
          drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
          drawSprite(enemy1Sprite, enemy1.width * enemy1.frameX, enemy1.height * enemy1.frameY, enemy1.width, enemy1.height, enemy1.x, enemy1.y, enemy1.width, enemy1.height); 
          drawSprite(enemy2Sprite, enemy2.width * enemy2.frameX, enemy2.height * enemy2.frameY, enemy2.width, enemy2.height, enemy2.x, enemy2.y, enemy2.width, enemy2.height); 
          drawSprite(enemy3Sprite, enemy3.width * enemy3.frameX, enemy3.height * enemy3.frameY, enemy3.width, enemy3.height, enemy3.x, enemy3.y, enemy3.width, enemy3.height);
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
          collision(player, movePlayer);
          playerHealth();
          playerAttack();
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

          collisionE(enemy1, enemy1.moveEnemy);



       }
       }
}