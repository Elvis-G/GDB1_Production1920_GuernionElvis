class Scene_Transi_Win extends Phaser.Scene {
  constructor(){
    super("scene_Transi_Win")
  }


preload(){

///// Sprite /////

    this.load.image('transi_Win_1','Score and Transitions/Transi_Win_1.png');
    this.load.image('transi_Win_2','Score and Transitions/Transi_Win_2.png');
    this.load.image('transi_Win_3','Score and Transitions/Transi_Win_3.png');


}

create(){
cursors = this.input.keyboard.createCursorKeys();

background_Transi_Win_1 = this.add.sprite(450,800,'transi_Win_1');
background_Transi_Win_2 = this.add.sprite(450,800,'transi_Win_2');
background_Transi_Win_3 = this.add.sprite(450,800,'transi_Win_3');

background_Transi_Win_1.visible = false;
background_Transi_Win_2.visible = false;
background_Transi_Win_3.visible = false;

timer_win = this.time.addEvent({ delay: 4500, callback: function_Transi_Win, loop: true });


///// Musics and Sounds /////
music_Transi_Win.volume = 0.2;
music_Transi_Win.play();



}

update(){

if(advancement == 1) {
background_Transi_Win_1.visible = true;
} else if (advancement == 2) {
background_Transi_Win_2.visible = true;
} else if (advancement == 3) {
background_Transi_Win_3.visible = true;
}


///// Next Micro Game /////

if (chest == 1 & advancement == 1) {
  chest = 0;
  this.scene.start("scene_Micro_Game_1");
}

if (chest == 1 & advancement == 2) {
  chest = 0;
  this.scene.start("scene_Micro_Game_2");
}


if (chest == 1 & advancement == 3) {
  chest = 0;
  this.scene.start("scene_Micro_Game_3");
}


}

}
