window.onload = function () {
  game = new Phaser.Game(600, 400, Phaser.CANVAS);
  game.score = 0;
  game.p1health = 500;
  game.p1health_text = "";
  game.score_text = "";
  game.sweets_text = "";
  game.state.add("PreLoadState", preloadAssets);
  game.state.add("TitleScreenState", titleScreen);
  game.state.add("PlayGameState", playGame);
  game.state.add("GameOverState", gameOver);
  game.state.start("PreLoadState");
  game.state.add("LevelScreenState", levelScreen);
  game.state.add("winScreenState", winScreen);
};
