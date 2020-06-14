class Scene_Menu extends Phaser.Scene {
  constructor(){
    super("scene_Menu")
  }


preload(){

    this.load.spritesheet('menu_sprite','Assets_Scene/Menu/Menu_Sheet.png',{frameWidth: 1024, frameHeight: 768});

    this.load.spritesheet('fondu','Assets_Scene/Fondu_Sheet.png',{frameWidth: 1024, frameHeight: 764});

}


create(){
cursors = this.input.keyboard.createCursorKeys();

music = this.sound.add('soundtrack');
audioEat = this.sound.add('audioEat');
audioDialogue = this.sound.add('audioDialogue');
audioBullet = this.sound.add('audioBullet');

music.volume = 0.02;
music.play();
//////////////////////////////////////////////////////////////// MENU CLICKABLE
this.input.mouse.disableContextMenu();



this.input.on('pointerdown', function (pointer) {

     if (pointer.x > 250 & pointer.x < 800 & pointer.y < 450 & pointer.y > 300)
     {
         if (pointer.leftButtonDown())
         {
              coffre=0;
              delai=0;
              this.scene.start("2_scene");
         }
      }
 }, this);

//////////////////////////////////////////////////////////////// ANIMATION
this.menu_sprite = this.add.sprite(512,384,'menu_sprite');

this.anims.create({
  key: 'animMenu',
  frames: this.anims.generateFrameNumbers('menu_sprite', {start: 0, end: 13}),
  frameRate: 15,
});

}

update(){



pointer = this.input.activePointer;

if (delai == 0){
  this.menu_sprite.anims.play('animMenu', true);
  delai =1;
}

}

}
