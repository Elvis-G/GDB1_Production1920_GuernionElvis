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
music_Menu.volume = 0.05;
music_Menu.play();


//////// Background ////////
background_Score = this.add.sprite(450,800,'score_png');


}

update(){


}

}
