class Scene_Intro extends Phaser.Scene {
  constructor(){
    super("scene_Intro")
  }


preload(){

///// La typo /////
this.load.image('zeppelin','Introduction/Zep.png');


/// Musics and sounds load///
this.load.audio("song_intro",'Sounds/Intro Song.mp3');


//// Timer ////
timer_Intro = this.time.addEvent({ delay: 5000, callback: function_Intro, loop: true });

}


create(){
cursors = this.input.keyboard.createCursorKeys();



///// Les sons/musiques /////
music_Intro = this.sound.add('song_intro');

music_Intro.volume = 0.05;
music_Intro.play();


//////// Background ////////
background_Intro = this.add.sprite(450,800,'zeppelin');


}

update(){

if (chest == 1){
  chest = 0;
  this.scene.start("scene_Menu");
}

}

}
