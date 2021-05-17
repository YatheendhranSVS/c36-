class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Multiplayer Game");
    title.position(110, 0);
    title.style('color', '#00aa33');
    
    var input = createInput("ENTR YOUR NAME");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      console.log(name)
      playerCount+=1;
      console.log(playerCount)
      player.update(name)
      player.updateCount(playerCount);

      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
