class Scene_Score extends Phaser.Scene {
  constructor(){
    super("scene_Score")
  }


preload(){

///// typo /////

    this.load.image('score_png','Score and Transitions/Score.png');

}


create(){
cursors = this.input.keyboard.createCursorKeys();


///// Musics and Sounds /////
music_Menu.volume = 0.08;
music_Menu.play();


//////// Background ////////
background_Score = this.add.sprite(450,800,'score_png');


///// Typo /////
score_text = this.add.bitmapText(380, 240, 'pomino', '', 128).setScrollFactor(0);
bestScore_text = this.add.bitmapText(380, 750, 'pomino', '', 128).setScrollFactor(0);
rank_text = this.add.bitmapText(260, 1335, 'pomino', '', 80).setScrollFactor(0);

}

update(){

///// Best Score /////

if (score >= best_Score){
  best_Score = score;
}

///// Rank /////

if (best_Score >= 270) {
rank_text.setText('DIVINE');
} else if (best_Score >= 220) {
rank_text.setText('EXPERT');
} else if (best_Score >= 160) {
rank_text.setText('EXPERIENCED');
} else if (best_Score >= 100) {
rank_text.setText('TALENTED');
} else if (best_Score >= 0) {
rank_text.setText('NOVICE');
}


///// Score Text ////

score_text.setText(score);
bestScore_text.setText(best_Score);


///// Switch to Menu_Scene

this.input.on('pointerdown', function (pointer) {
    if (chest == 0){
    music_Menu.stop();
    score = 0;
    chest = 1;
    this.scene.start("scene_Menu");
    }
}, this);

}

}
