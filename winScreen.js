var winScreen = function (game) {};

winScreen.prototype = {
  
  create: function () {
    this.bg = game.add.tileSprite(0,0, 5000, 5000, 'end_background');
    this.wintxt();
    //game.add.sprite(0, 0, 'end_background');
    this.create_title();
    this.capture_key_inputs();
  },
  
  create_title: function () {
    this.title_style = {
      font: "20px impact",
      fill: "#00ff00",
      align: "left"
    };
    game.add.text(0, game.height / 4, "Restart By Clicking", this.title_style);
  },
  
  capture_key_inputs: function () {
    game.input.onDown.add(this.restart_game, this);
  },
  wintxt: function(){
    wintxt = game.add.sprite(250, 250, 'Winnertxt');
    wintxt.x = 50;
    wintxt.y = -50;
    wintxt.height = 500;
    wintxt.width = 500;
    wintxt.animations.add('sizing', [0, 1, 2], 3, true);
    wintxt.animations.play('sizing');  
      
      
  },
  restart_game: function () {
    game.score = 0;
    game.sweets = 0;
    game.p1health = 500;
    //game.state.restart();
    game.state.start("PlayGameState");
  }
};