var titleScreen = function (game) {};

titleScreen.prototype = {

  create: function () {
   title =  game.add.sprite(0, 0,'start_background');
    this.create_title();
    this.capture_key_inputs();
    this.start_button();
    this.create_menu();
    this.level_button();
    this.resetscore_button();
   
   
   
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
   
  },
    
    start_button: function(){
        start_button = game.add.button(0, 0, "strt_button",this.start_game);
       
        start_button.x = 250;
        start_button.y = 120;
        start_button.height = 35;
        start_button.width = 60;
       
        start_button.inputEnabled = true;
    
    },

    level_button: function(){
        level_button = game.add.button(0, 0, "levelselbtn", this.level_page);
        level_button.x = 250;
        level_button.y = 160;
        level_button.height = 35;
        level_button.width = 60;
        level_button.inputEnabled = true;
        
        
    
    
    
  },
    
    resetscore_button: function(){
        resetscore_button = game.add.button(0, 0, "Rstscorebtn", this.resetOnclick);
        resetscore_button.x = 350;
        resetscore_button.y = 160;
        resetscore_button.height = 310;
        resetscore_button.width = 250;
        resetscore_button.inputEnabled = true;
        

        
    },
    
   
        
        
    
    
  actionOnCLick: function() {
    game.state.start("PlayGameState");
      
  },
  resetOnclick: function(){
    game.sweets = 0;
    localStorage.setItem("Sweets-Collected", game.sweets);  
      
  },
  capture_key_inputs: function () {

  },
  
  start_game: function () {
     game.state.start("PlayGameState");
  },
  level_page: function(){
      game.state.start("LevelScreenState");
      
      
  },
    
}
  