var playGame = function (game) {};

playGame.prototype = {
  create: function () {
   this.hptest();
    toggleon = false;
    game.sweets = 0;
    game.p1health = 500;
    this.bg = game.add.tileSprite(0, 0, 5000, 5000, 'game_background');
    
    
    game.world.setBounds(0, 0, 2000, 2000);
    
    this.create_score();
    this.update_score_text();
    
    this.set_physics();
    
    this.capture_key_inputs();
  
    this.define_mainchar();
  
    this.define_beargroup();
    
    this.create_p1health();
    this.update_p1health_text();
    
    this.create_sweets();
    this.update_sweets_text();
    
   
    
    this.define_blackholegroup();
    
    this.createTimer();
    this.enemyQueue();
    this.sweetQueue();
  
    this.home_button();
      
    this.onscreenctrl_button();
  
  },
  
  update: function () {
    this.check_for_collisions();
    
    this.update_score_text();
    this.update_sweets_text();
    this.update_p1health_text();
   
  },
  
  check_for_collisions: function () {
    
    game.physics.arcade.collide(bears, bears);
    game.physics.arcade.overlap(mainchar, bears, this.bearkill,null, this);
    
    game.physics.arcade.overlap(mainchar, blackholes, this.hptestcheck,null, this);
    game.physics.arcade.overlap(mainchar, blackholes, this.gameOver,null, this);
    
    game.physics.arcade.overlap(mainchar, bears, this.youWin,null, this);  
    game.physics.arcade.overlap(mainchar, blackholes, this.playerhithazard,null, this);
  },
  

  gameOver: function () {
    if(game.p1health <= 0){
      this.state.restart();
      game.sweets = 0;
      game.state.start("GameOverState");
    }
  },
  
    createTimer: function(){
        this.enemyQueue(game.rnd.integerInRange(2500, 5000));
        this.sweetQueue(game.rnd.integerInRange(2500, 5000));
            
    
    },
    
    enemyQueue: function() {
      game.time.events.loop(10000,this.define_blackhole); 
      
    },
    
    sweetQueue: function(){
      game.time.events.loop(5000, this.define_bear);
      game.time.events.loop(10000, this.define_bear2);
        
        
    
    
    },
    
   
    
  create_score: function () {
    this.score_style = {
      font: "24px impact",
      fill: "#0000ff",
      align: "left"
    };
    game.score_text = game.add.text(10, 20, "", this.score_style);
  
  },
  
  increase_score: function () {
    game.score += 1;
    
        
    
  },
  
  update_score_text: function () {
    game.score_text.text = "SCORE = " + game.score;
    game.score_text.fixedToCamera = true;game.score_text.cameraOffset.setTo(10, 10);
  },
  
    save_sweets: function(){
      localStorage.setItem("Sweets-Collected", game.sweets);  
        
        
    },
    load_sweets: function(){
    game.sweets = +localStorage.getItem("Sweets-Collected");
    //localStorage.getItem("Sweets-Collected");
        
        
    },
    
  create_sweets: function () {
    this.sweets_style = {
      font: "24px impact",
      fill: "#0000ff",
      align: "left"
    };
      game.sweets_text = game.add.text(10,50, "", this.sweets_style);
  },
        
    increase_sweets: function () {
      game.sweets += 1;
  },
  
  update_sweets_text: function () {
    game.sweets_text.text = "Sweets Collected = " + game.sweets;
    game.sweets_text.fixedToCamera = true;game.sweets_text.cameraOffset.setTo(10, 30);
  },
      
 create_p1health: function(){
   this.p1health_style = {
      font: "24px impact",
      fill: "#0000ff",
      align: "left"
       
   };  
     game.p1health_text = game.add.text(10,50, "", this.p1health_style);
     
 },
  update_p1health_text: function() {
    game.p1health_text.text = "Health = " + game.p1health;   
    game.p1health_text.fixedToCamera = true;game.p1health_text.cameraOffset.setTo(10, 50);  
  },    
    
  set_physics: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 0;
  },
  
  capture_key_inputs: function () {
    var a_left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    a_left.onDown.add(this.move_left, this);
    var d_right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    d_right.onDown.add(this.move_right, this);
    var w_up = game.input.keyboard.addKey(Phaser.Keyboard.W);
    w_up.onDown.add(this.move_up, this);
    var s_down = game.input.keyboard.addKey(Phaser.Keyboard.S);
    s_down.onDown.add(this.move_down, this);
    var bear_n = game.input.keyboard.addKey(Phaser.Keyboard.N);
    bear_n.onDown.add(this.define_bear, this);
    bear_n.onDown.add(this.define_bear2, this);
    bear_n.onDown.add(this.define_blackhole,this);
    
    var save_f = game.input.keyboard.addKey(Phaser.Keyboard.T);
    save_f.onDown.add(this.save_sweets, this);
    var load_f = game.input.keyboard.addKey(Phaser.Keyboard.F);
    load_f.onDown.add(this.load_sweets, this);
    load_f.onDown.add(this.localstorWin, this);
  },
    

        
    
  
  define_mainchar: function () {
   mainchar = game.add.sprite(26, 32, 'mainchar');
   mainchar.animations.add("movement", [0, 2], 2, false);
    game.physics.arcade.enable(mainchar);
    mainchar.enableBody = true;
    mainchar.scale.setTo(0.5, 0.5);
  mainchar.height = 100;
 mainchar.width = 50;
    mainchar.x = game.width * 0.75;
    mainchar.y = game.height / 2 - mainchar.height / 2;
    mainchar.body.collideWorldBounds = true;
    mainchar.body.bounce.x = 0;
    mainchar.body.bounce.y = 0;
    mainchar.inputEnabled = true;
    mainchar.input.enableDrag(true);
    game.camera.follow(mainchar);
//mainchar.anchor.setTo (0.5,0.5);
  },
  
  move_left: function () {
   mainchar.body.velocity.x -= 100;
//mainchar.angle = -90;
   
  },
  
  move_right: function () {
    mainchar.body.velocity.x += 100;
  mainchar.animations.play("movement");
 //mainchar.animations.stop("movement");
  
  },
  move_up: function () {
    mainchar.body.velocity.y -= 100;
   
    
      
  },
  move_down: function () {
    mainchar.body.velocity.y += 100;;
 
  },

   define_beargroup: function (){
     bears = game.add.group();
     bears.enableBody = true;
   
   },
    define_blackholegroup: function(){
    blackholes = game.add.group();
    blackholes.enableBody = true;
   
   
 },
  define_bear: function() {
    var bear = bears.create(0,0, "bear");
    bear.game.height = 100;
    bear.game.width = 60;
    game.physics.arcade.enable(bear);
    bear.enableBody = true;
    bear.x = game.rnd.integerInRange(5, 2000);
    bear.y = game.rnd.integerInRange(5, 2000);
    bear.body.collideWorldBounds = true;
    bear.body.bounce.x = 0;
    bear.body.velocity.x = 5;
    bear.body.velocity.y = 5;
    bear.body.bounce.y = 0;
    game.physics.arcade.enable(this);
  },
    
   define_blackhole: function() {
   

    
    var blackhole = blackholes.create(400, 400, "blackhole");
    
    blackhole.animations.add("rotate", [0, 1, 2], 3, true);
    blackhole.animations.play("rotate");
    blackhole.height = 100;
    blackhole.width = 60;
    game.physics.arcade.enable(blackhole);
    blackhole.enableBody = true;
    blackhole.x = game.rnd.integerInRange(5, 2000);
    blackhole.y = game.rnd.integerInRange(5, 2000);
    blackhole.body.collideWorldBounds = true;
    blackhole.body.bounce.x = 0;
    blackhole.body.velocity.x = 5;
    blackhole.body.velocity.y = 5;
    blackhole.body.bounce.y = 0;
    game.physics.arcade.enable(this); 
   },
       

    
    define_bear2: function() {
    var bear2 = bears.create(0,0, "bear2");
    
    bear2.game.height = 100;
    bear2.game.width = 60;
    game.physics.arcade.enable(bear2);
    bear2.enableBody = true;
    bear2.x = game.rnd.integerInRange(5, 2000);
    bear2.y = game.rnd.integerInRange(5, 2000);
    bear2.body.collideWorldBounds = true;
    bear2.body.bounce.x = 0;
    bear2.body.velocity.x = 5;
    bear2.body.velocity.y = 5;
    bear2.body.bounce.y = 0;
    game.physics.arcade.enable(this);
    
    },
  bearkill: function(mainchar, bear){ 
    bear.kill();
    this.increase_score();
    this.increase_sweets();
    this.playergainhp();
    this.youWin();
     
 },
 playerlosehp: function() {
     game.p1health -= 20;
  
     
 },
    playergainhp: function() {
    game.p1health +=10; 
    this.update_p1health_text();
    },
    
  playerhithazard: function(mainchar, blackhole){
    
    blackhole = blackhole.height =- 50;
    blackhole = blackhole.width =- 30;
     
     
 },
  
    localstorWin: function(){
    if(localStorage.getItem("Sweets-Collected") >= 3){
    game.state.start("winScreenState");
 
    }
        
        
    },
    hptest: function(){
    iscollide = false;
    
    
        
        
        
    },
    
    
    
    hptestcheck: function(){
        
        if (iscollide == false){
            
            this.playerlosehp();
             iscollide = true;
             game.time.events.add(1000, this.hptest);
        }
        if ( iscollide == true){
            //game.time.events.add(2000, this.hptest);
            
        }
    },
        
    
    youWin: function(){
     if(game.sweets == 10){
        this.save_sweets();
        game.state.start("winScreenState");
    
    }
    
  },
    
   
    
 home_button: function(){
        home_button = game.add.button(0, 0, "mainmenubtn", this.home_page);
        home_button.x = 25;
        home_button.y = 80;
        home_button.height = 35;
        home_button.width = 60;
        home_button.inputEnabled = true;
        game.camera.follow(mainchar);
        home_button.fixedToCamera = true;
},
      
    home_page: function(){
      game.state.start("TitleScreenState");
      
    },
onscreenctrl_button: function(){
        up_button = game.add.button(0, 0, "movearrow",this.move_up);
        down_button = game.add.button(0,0, "movearrow", this.move_down);
        left_button = game.add.button(0,0, "movearrow", this.move_left);
        right_button = game.add.button(0,0, "movearrow", this.move_right);
        saveSweets_button = game.add.button(0,0, "savesweetsbtn", this.save_sweets);
    loadSweets_button = game.add.button(0,0, "loadsweetsbtn", this.load_sweets);

        up_button.x = 55;
        up_button.y = 300;
        
        down_button.x = 83;
        down_button.y = 360;
        
        down_button.anchor.setTo(0.5,0.5);
        down_button.angle = 180;
    
        
        left_button.x = 46;
        left_button.y = 340;
    
        left_button.anchor.setTo(0.5,0.5);
        left_button.angle = 270;
    
        right_button.x = 115;
        right_button.y = 340;
    
        right_button.anchor.setTo(0.5,0.5);
        right_button.angle = -270;
    
    
    saveSweets_button.x = 350;
    saveSweets_button.y = 0;
    
    loadSweets_button.x = 420;
    loadSweets_button.y = 0;
        up_button.height = 35;
        up_button.width = 60;
    
        down_button.height = 35;
        down_button.width = 60;
    
        left_button.height = 35;
        left_button.width = 60;
    
        right_button.height = 35;
        right_button.width = 60;
    saveSweets_button.height = 35;
    saveSweets_button.width = 60;
    
    loadSweets_button.height = 35;
    loadSweets_button.width = 60;
       
    up_button.inputEnabled = true;
    down_button.inputEnabled = true;
    left_button.inputEnabled = true;
    right_button.inputEnabled = true;
    
    saveSweets_button.inputEnabled = true;
    loadSweets_button.inputEnabled = true;
    game.camera.follow(mainchar);
        
       up_button.fixedToCamera = true;
       down_button.fixedToCamera = true;
       left_button.fixedToCamera = true;
       right_button.fixedToCamera = true;
        
        saveSweets_button.fixedToCamera = true;
        loadSweets_button.fixedToCamera = true;
}
      
        
        

    
     
    
    
    
    
};
    
    




