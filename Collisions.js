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

var collision = function(player){
   
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

   var collisionE = function(enemy1){

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

