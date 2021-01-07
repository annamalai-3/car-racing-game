class Form {
  constructor() {
    this. input = createInput("Name");
    this. button = createButton('Play');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    
    this.input.position(displayWidth/2, 160);
    this.button.position(displayWidth/2, 200);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index+=playerCount;
      player.update()
      player.updateCount(player.index);
      var greeting = createElement('h3');
      greeting.html("Hello " + player.name )
      greeting.position(130, 160)
    });
     
  }
  hide(){
    this.input.hide()
    this.button.hide()

  }
}
