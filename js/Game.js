class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
      car1 = createSprite(100,200,50,50);
      car2 = createSprite(300,200,50,50);
      car3 = createSprite(500,200,50,50);
      car4 = createSprite(700,200,50,50);
      cars = [car1,car2,car3,car4]
    }
  }
  play(){

    form.hide()
    text("game starting",200,300);
    Player.getallplayerinfo()
    var index = 0;
    var x = 200;
    var y = 100;
    for(var plr in allplayers ){
      y= displayHeight-allplayers[plr].distance;
      x = x+200;
    index = index + 1;
    cars  [index-1].x = x;
    cars  [index-1].y = y;
    if(index===player.index){
      cars[index-1].shapeColor="red";
      camera.position.x=displayWidth/2;
      camera .position.y = cars[index-1].y
    }
    }
if(keyIsDown(UP_ARROW)&& player.index!=null){
 player.distance = player.distance+10
  player.update()
}
    drawSprites()
  }
}
