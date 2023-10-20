var c = false;
var c1 = false;
var coins = ["0.png","1.png","2.png"];

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

export {CP};