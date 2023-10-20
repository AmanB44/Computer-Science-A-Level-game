export function maze(){
    if (player.x > 660){
        canvas.width = 200;
        canvas.height = 190;
        background.src = "Maze1.png";
        coin.src = "";
        coin1.src = "";       
        bush.src = "";
        Tower1.src = "";
        Tower2.src = "";
        Tower3.src = "";
        Tower4.src = "";
        Tree.src = "";
        player.x = 20;
        player.y = 80;
        
    }
    if (player.x < 10){
             canvas.width = 700;
             canvas.height = 560;
           background.src = "Map.png";
            coin.src = "coin.png";
            coin1.src = "coin.png";
            bush.src = "bush.png";
            Tower1.src = "Tower1.png";
            Tower2.src = "Tower1.png";
            Tower3.src = "Tower2.png";
            Tower4.src = "Tower2.png";
            Tree.src = "Tree.png";
             player.x = 650;
            player.y = 280;
    }
}
