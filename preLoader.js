var preloadAssets = function (game) {};
  
preloadAssets.prototype = {

  preload: function () {
    game.load.image('start_background', 'assets/title1345.png');
    game.load.image('game_background', 'assets/bck01345.png');
    game.load.image('end_background', 'assets/gameover2.jpg');
    game.load.image('bear', 'assets/BearChar.png');
    game.load.spritesheet('mainchar', 'assets/sprite1345.png', 26, 32);
//game.load.spritesheet('mainchar', 'assets/sprite1345.png', 32, 26);
    game.load.image('strt_button', 'assets/startbtn.png', 150, 250);
    game.load.image('levelscreen_background', 'assets/levelscreen.png', 600, 500);
    game.load.image('level1btn', 'assets/level1img.png');
    game.load.image('levelselbtn', 'assets/levelselbtn.png', 150, 250);
    game.load.image('mainmenubtn', 'assets/mainmenubtn.png', 150, 250);
    game.load.image('savesweetsbtn', 'assets/savesweetsbtn.png', 150, 250);
     game.load.image('loadsweetsbtn', 'assets/loadsweetsbtn.png', 150, 250);
    game.load.image('bear2', 'assets/Bearchar2.png');
    game.load.image('Rstscorebtn', 'assets/Rstscorebtn.png');
     game.load.image('movearrow', 'assets/Onscreenarrrow.png');
    game.load.spritesheet('blackhole', 'assets/blackhole.png', 400, 400);
    game.load.spritesheet('Winnertxt', 'assets/YouWin.png', 250, 200);
  },

  create: function () {
    this.set_scaling();
    game.state.start("TitleScreenState");
   
  },
  
  set_scaling: function () {
    game.scale.setMinMax(1200,700, 1200, 700);
    
      
    game.stage.disableVisibilityChange = true; // prevent the game from stopping when the page loses focus
    game.scale.refresh();
  }
};
