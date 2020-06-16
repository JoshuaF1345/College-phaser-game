var levelScreen = function (game) {};

levelScreen.prototype = {

  create: function () {
    game.add.sprite(0, 0, 'levelscreen_background');
    this.create_title();
    this.capture_key_inputs();
    this.level1_button();
    this.create_menu();
    
    //this.level1_buttonevent();
    //this.start_game();
  },

  create_title: function () {
    this.title_style = {
      font: "48px impact",
      fill: "#00ff00",
      align: "left"
    };
  },
    create_menu: function () {
     this.menu_style = {
        font: "30px impact",
        fill: "#00ff00",
        
    };
    //game.add.text(0, game.height / 2, "Start By Clicking", this.title_style);
  },
    
    level1_button: function(){
        level1_button = game.add.button(0, 0, "level1btn",this.start_game);
        //level1_button = this.input.onDown.add(this.start_game);
        level1_button.x = 50;
        level1_button.y = 50;
        level1_button.height = 370;
        level1_button.width = 425;
        //level1_button = game.input.onDown.add(this.start_game, this.level1_button);
        //level1_button.input.onDown(this.start_game);
        //level1_button = game.add.text(0, game.height / 2 ,"Start", this.menu_style);
        level1_button.inputEnabled = true;
    
    

    
    

  },
    
  actionOnCLick: function() {
    game.state.start("PlayGameState");
      
  },
  capture_key_inputs: function () {
    //game.input.onDown.add(this.start_game, this);
  },
  
  start_game: function () {
     game.state.start("PlayGameState");
  }
};