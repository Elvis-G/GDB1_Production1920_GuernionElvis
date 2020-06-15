class Scene_Menu extends Phaser.Scene {
  constructor(){
    super("scene_Menu")
  }


preload(){

///// La typo /////
// this.load.bitmapFont('myfont','font.png','font.fnt');

    this.load.image('menu_png','Main_Menu/Menu.png');
    this.load.image('select_png','Main_Menu/Select.png');


/// Musics and sounds load///
    this.load.audio("song_menu",'Sounds/Menu Song.mp3');
    this.load.audio("song_transi_win",'Sounds/Transi_Win.mp3');
    this.load.audio("song_transi_lose",'Sounds/Transi_Lose.mp3');
    this.load.audio("song_micro_game",'Sounds/Micro-Game.mp3');
    this.load.audio("song_check",'Sounds/Validation.mp3');
    this.load.audio("sound_select",'Sounds/Menu_Select.mp3');

}


create(){
cursors = this.input.keyboard.createCursorKeys();



///// Les sons/musiques /////
music_Menu = this.sound.add('song_menu');
music_Transi_Lose = this.sound.add('song_transi_lose');
music_Transi_Win = this.sound.add('song_transi_win');
music_Micro_Game = this.sound.add('song_micro_game');
sound_Check = this.sound.add('song_check');
sound_Select = this.sound.add('sound_select');

music_Menu.volume = 0.05;
music_Menu.play();


//////// Background ////////
menu = this.add.sprite(450,800,'menu_png');
menu_select = this.add.sprite(450,800,'select_png');

menu_select.visible = false;

//////////////////////////////////////////////////////////////// MENU CLICKABLE
this.input.mouse.disableContextMenu();



this.input.on('pointerdown', function (pointer) {

     if (pointer.x > 115 & pointer.x < 380 & pointer.y > 765 & pointer.y < 905)
     {
         if (pointer.leftButtonDown())
         {
            music_Menu.stop();
              this.scene.start("scene_Micro_Game_1");
         }
      }
 }, this);


}

update(){

pointer = this.input.activePointer;

if (pointer.x > 410 & pointer.x < 670 & pointer.y > 1131 & pointer.y < 1250) {
  menu_select.visible = true;
  menu_select.x = 545;
  menu_select.y = 1193;
} else if (pointer.x > 410 & pointer.x < 670 & pointer.y > 185 & pointer.y < 315) {
  menu_select.visible = true;
  menu_select.x = 545;
  menu_select.y = 247;
} else if (pointer.x > 115 & pointer.x < 380 & pointer.y > 765 & pointer.y < 905) {
  menu_select.visible = true;
  menu_select.x = 250;
  menu_select.y = 837;
} else {
  sound_Select.volume = 0.02;
  sound_Select.play();
  menu_select.visible = false;
}

}

}
