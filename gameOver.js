var gameOver = function (game) {};

gameOver.prototype = {
  
  create: function () {
    game.add.sprite(0, 0, 'end_background');
    this.create_title();
    this.capture_key_inputs();
  },
  
  create_title: function () {
    this.title_style = {
      font: "48px impact",
      fill: "#00ff00",
      align: "left"
    };
    game.add.text(0, game.height / 2, "Restart By Clicking", this.title_style);
  },
  
  capture_key_inputs: function () {
    game.input.onDown.add(this.restart_game, this);
  },
  
  restart_game: function () {
    game.score = 0;
    game.sweets = 0;
    game.p1health = 500;
    game.state.restart();
    game.state.start("PlayGameState");
  }
};