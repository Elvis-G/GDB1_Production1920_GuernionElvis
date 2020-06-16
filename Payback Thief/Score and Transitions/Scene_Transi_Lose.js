class Scene_Transi_Lose extends Phaser.Scene {
  constructor(){
    super("scene_Transi_Lose")
  }


preload(){

///// typo /////

    this.load.image('transi_Lose','Score and Transitions/Transi_Lose.png');

}

create(){
cursors = this.input.keyboard.createCursorKeys();

timer_lose = this.time.addEvent({ delay: 4000, callback: function_Transi_Lose, loop: true });


///// Musics and Sounds /////
music_Transi_Lose.volume = 0.05;
music_Transi_Lose.play();


//////// Background ////////
background_Transi_Lose = this.add.sprite(450,800,'transi_Lose');

}

update(){

if (chest == 1) {
  score = 0;
  chest = 0;
  advancement = 1;
  this.scene.start("scene_Menu");
}

}

}
