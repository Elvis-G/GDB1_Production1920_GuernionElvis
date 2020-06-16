class Scene_Micro_Game_3 extends Phaser.Scene {
  constructor(){
    super("scene_Micro_Game_3")
  }


preload(){

///// La typo /////
    this.load.bitmapFont('pomino','Typo/pomino.png','Typo/pomino.xml');
    this.load.bitmapFont('pomino_gilt','Typo/pomino_gilt.png','Typo/pomino_gilt.xml');

    this.load.image('background_micro_3','Micro_Game_3/Background_Micro_Game_3.png');

    this.load.image('hitZone','Micro_Game_3/hitZone.png');

}


create(){
cursors = this.input.keyboard.createCursorKeys();

timer_chrono = this.time.addEvent({ delay: 100, callback: function_Chrono, loop: true });

///// Musics and Sounds /////
music_Micro_Game.volume = 0.05;
music_Micro_Game.play();


//////// Background ////////
background_Micro_3 = this.add.sprite(450,800,'background_micro_3');


///// Sprites /////

hitZone_top = this.add.sprite(450,650,'hitZone');
hitZone_mid = this.add.sprite(500,850,'hitZone');
hitZone_bot = this.add.sprite(500,1050,'hitZone');

hitZone_top.visible = false;
hitZone_mid.visible = false;
hitZone_bot.visible = false;


///// Typo /////
text = this.add.bitmapText(750, 1435, 'pomino', '', 64).setScrollFactor(0);
text_indication = this.add.bitmapText(340, 20, 'pomino', 'HIT', 128).setScrollFactor(0);



////// Answer Zone ///////

this.input.mouse.disableContextMenu();



}

update(){


this.input.on('pointerdown', function (pointer) {
    if (hit_answer == 1){
      if (pointer.x > 200 & pointer.x < 700 & pointer.y > 550& pointer.y < 750){
        hit_down_chest = pointer.x
        }
    } else if (hit_answer == 2){
      if (pointer.x > 200 & pointer.x < 700 & pointer.y > 750& pointer.y < 950){
        hit_down_chest = pointer.x
        }
    } else if (hit_answer == 3){
      if (pointer.x > 200 & pointer.x < 700 & pointer.y > 950& pointer.y < 1150){
        hit_down_chest = pointer.x
        }
    }
}, this);

this.input.on('pointerup', function (pointer) {
    hit_up_chest = pointer.x;
}, this);

if (hit_answer == 1) {
  if (hit_up_chest+300 <= hit_down_chest) {
      game_status = 1;
    }
}
if (hit_answer == 2) {
  if (hit_up_chest+300 <= hit_down_chest) {
      game_status = 1;
    }
}
if (hit_answer == 3) {
  if (hit_up_chest+300 <= hit_down_chest) {
      game_status = 1;
    }
}

///// HitZone Top, Bot or Mid /////

if (hit_answer == 0) {
  hit_answer = Phaser.Math.Between(1,3);
}

if (hit_answer == 1) {
  hitZone_top.visible = true;
} else if (hit_answer == 2) {
  hitZone_mid.visible = true;
} else if (hit_answer == 3) {
  hitZone_bot.visible = true;
}


////// Text Indication  Destroy/////

if (chrono < 9.1) {
text_indication.destroy();
}



///// TIMER ////

if (chrono == 10) {
  text.setText("10");
  if (game_status == 1) {
    score += 100
  }
} else if (chrono == 9.9) {
  text.setText("9.9");
  if (game_status == 1) {
    score += 99
  }
} else if (chrono == 9.8) {
  text.setText("9.8");
  if (game_status == 1) {
    score += 98
  }
} else if (chrono > 9.7) {
  text.setText("9.7");
  if (game_status == 1) {
    score += 97
  }
} else if (chrono > 9.6) {
  text.setText("9.6");
  if (game_status == 1) {
    score += 96
  }
} else if (chrono > 9.5) {
  text.setText("9.5");
  if (game_status == 1) {
    score += 95
  }
} else if (chrono > 9.4) {
  text.setText("9.4");
  if (game_status == 1) {
    score += 94
  }
} else if (chrono > 9.3) {
  text.setText("9.3");
  if (game_status == 1) {
    score += 93
  }
} else if (chrono > 9.2) {
  text.setText("9.2");
  if (game_status == 1) {
    score += 92
  }
} else if (chrono > 9.1) {
  text.setText("9.1");
  if (game_status == 1) {
    score += 91
  }
} else if (chrono > 9.0) {
  text.setText("9.0");
  if (game_status == 1) {
    score += 90
  }
} else if (chrono > 8.9) {
  text.setText("8.9");
  if (game_status == 1) {
    score += 89
  }
} else if (chrono > 8.8) {
  text.setText("8.8");
  if (game_status == 1) {
    score += 88
  }
} else if (chrono > 8.7) {
  text.setText("8.7");
  if (game_status == 1) {
    score += 87
  }
}else if (chrono > 8.6) {
  text.setText("8.6");
  if (game_status == 1) {
    score += 86
  }
}else if (chrono > 8.5) {
  text.setText("8.5");
  if (game_status == 1) {
    score += 85
  }
} else if (chrono > 8.4) {
  text.setText("8.4");
  if (game_status == 1) {
    score += 84
  }
} else if (chrono > 8.3) {
  text.setText("8.3");
  if (game_status == 1) {
    score += 83
  }
} else if (chrono > 8.2) {
  text.setText("8.2");
  if (game_status == 1) {
    score += 82
  }
} else if (chrono > 8.1) {
  text.setText("8.1");
  if (game_status == 1) {
    score += 81
  }
} else if (chrono > 8.0) {
  text.setText("8.0");
  if (game_status == 1) {
    score += 80
  }
} else if (chrono > 7.9) {
  text.setText("7.9");
  if (game_status == 1) {
    score += 79
  }
} else if (chrono > 7.8) {
  text.setText("7.8");
  if (game_status == 1) {
    score += 78
  }
} else if (chrono > 7.7) {
  text.setText("7.7");
  if (game_status == 1) {
    score += 77
  }
} else if (chrono > 7.6) {
  text.setText("7.6");
  if (game_status == 1) {
    score += 76
  }
} else if (chrono > 7.5) {
  text.setText("7.5");
  if (game_status == 1) {
    score += 75
  }
} else if (chrono > 7.4) {
  text.setText("7.4");
  if (game_status == 1) {
    score += 74
  }
} else if (chrono > 7.3) {
  text.setText("7.3");
  if (game_status == 1) {
    score += 73
  }
} else if (chrono > 7.2) {
  text.setText("7.2");
  if (game_status == 1) {
    score += 72
  }
} else if (chrono > 7.1) {
  text.setText("7.1");
  if (game_status == 1) {
    score += 71
  }
} else if (chrono > 7.0) {
  text.setText("7.0");
  if (game_status == 1) {
    score += 70
  }
} else if (chrono > 6.9) {
  text.setText("6.9");
  if (game_status == 1) {
    score += 69
  }
} else if (chrono > 6.8) {
  text.setText("6.8");
  if (game_status == 1) {
    score += 68
  }
} else if (chrono > 6.7) {
  text.setText("6.7");
  if (game_status == 1) {
    score += 67
  }
} else if (chrono > 6.6) {
  text.setText("6.6");
  if (game_status == 1) {
    score += 66
  }
} else if (chrono > 6.5) {
  text.setText("6.5");
  if (game_status == 1) {
    score += 65
  }
} else if (chrono > 6.4) {
  text.setText("6.4");
  if (game_status == 1) {
    score += 64
  }
} else if (chrono > 6.3) {
  text.setText("6.3");
  if (game_status == 1) {
    score += 63
  }
} else if (chrono > 6.2) {
  text.setText("6.2");
  if (game_status == 1) {
    score += 62
  }
} else if (chrono > 6.1) {
  text.setText("6.1");
  if (game_status == 1) {
    score += 61
  }
} else if (chrono > 6.0) {
  text.setText("6.0");
  if (game_status == 1) {
    score += 60
  }
} else if (chrono > 5.9) {
  text.setText("5.9");
  if (game_status == 1) {
    score += 59
  }
} else if (chrono > 5.8) {
  text.setText("5.8");
  if (game_status == 1) {
    score += 58
  }
} else if (chrono > 5.7) {
  text.setText("5.7");
  if (game_status == 1) {
    score += 57
  }
} else if (chrono > 5.6) {
  text.setText("5.6");
  if (game_status == 1) {
    score += 56
  }
} else if (chrono > 5.5) {
  text.setText("5.5");
  if (game_status == 1) {
    score += 55
  }
} else if (chrono > 5.4) {
  text.setText("5.4");
  if (game_status == 1) {
    score += 54
  }
} else if (chrono > 5.3) {
  text.setText("5.3");
  if (game_status == 1) {
    score += 53
  }
} else if (chrono > 5.2) {
  text.setText("5.2");
  if (game_status == 1) {
    score += 52
  }
} else if (chrono > 5.1) {
  text.setText("5.1");
  if (game_status > 1) {
    score += 51
  }
} else if (chrono > 5.0) {
  text.setText("5.0");
  if (game_status == 1) {
    score += 50
  }
} else if (chrono > 4.9) {
  text.setText("4.9");
  if (game_status == 1) {
    score += 49
  }
} else if (chrono > 4.8) {
  text.setText("4.8");
  if (game_status == 1) {
    score += 48
  }
} else if (chrono > 4.7) {
  text.setText("4.7");
  if (game_status == 1) {
    score += 47
  }
} else if (chrono > 4.6) {
  text.setText("4.6");
  if (game_status == 1) {
    score += 46
  }
} else if (chrono > 4.5) {
  text.setText("4.5");
  if (game_status == 1) {
    score += 45
  }
} else if (chrono > 4.4) {
  text.setText("4.4");
  if (game_status == 1) {
    score += 44
  }
} else if (chrono > 4.3) {
  text.setText("4.3");
  if (game_status == 1) {
    score += 43
  }
} else if (chrono > 4.2) {
  text.setText("4.2");
  if (game_status == 1) {
    score += 42
  }
} else if (chrono > 4.1) {
  text.setText("4.1");
  if (game_status == 1) {
    score += 41
  }
} else if (chrono > 4.0) {
  text.setText("4.0");
  if (game_status == 1) {
    score += 40
  }
} else if (chrono > 3.9) {
  text.setText("3.9");
  if (game_status == 1) {
    score += 39
  }
} else if (chrono > 3.8) {
  text.setText("3.8");
  if (game_status == 1) {
    score += 38
  }
} else if (chrono > 3.7) {
  text.setText("3.7");
  if (game_status == 1) {
    score += 37
  }
} else if (chrono > 3.6) {
  text.setText("3.6");
  if (game_status > 1) {
    score += 36
  }
} else if (chrono > 3.5) {
  text.setText("3.5");
  if (game_status == 1) {
    score += 35
  }
} else if (chrono > 3.4) {
  text.setText("3.4");
  if (game_status == 1) {
    score += 34
  }
} else if (chrono > 3.3) {
  text.setText("3.3");
  if (game_status == 1) {
    score += 33
  }
} else if (chrono > 3.2) {
  text.setText("3.2");
  if (game_status == 1) {
    score += 32
  }
} else if (chrono > 3.1) {
  text.setText("3.1");
  if (game_status == 1) {
    score += 31
  }
} else if (chrono > 3.0) {
  text.setText("3.0");
  if (game_status == 1) {
    score += 30
  }
} else if (chrono > 2.9) {
  text.setText("2.9");
  if (game_status == 1) {
    score += 29
  }
} else if (chrono > 2.8) {
  text.setText("2.8");
  if (game_status == 1) {
    score += 28
  }
} else if (chrono > 2.7) {
  text.setText("2.7");
  if (game_status == 1) {
    score += 27
  }
} else if (chrono > 2.6) {
  text.setText("2.6");
  if (game_status == 1) {
    score += 26
  }
} else if (chrono > 2.5) {
  text.setText("2.5");
  if (game_status == 1) {
    score += 25
  }
} else if (chrono > 2.4) {
  text.setText("2.4");
  if (game_status == 1) {
    score += 24
  }
} else if (chrono > 2.3) {
  text.setText("2.3");
  if (game_status == 1) {
    score += 23
  }
} else if (chrono > 2.2) {
  text.setText("2.2");
  if (game_status == 1) {
    score += 22
  }
} else if (chrono > 2.1) {
  text.setText("2.1");
  if (game_status == 1) {
    score += 21
  }
} else if (chrono > 2.0) {
  text.setText("2.0");
  if (game_status == 1) {
    score += 20
  }
} else if (chrono > 1.9) {
  text.setText("1.9");
  if (game_status == 1) {
    score += 19
  }
} else if (chrono > 1.8) {
  text.setText("1.8");
  if (game_status == 1) {
    score += 18
  }
} else if (chrono > 1.7) {
  text.setText("1.7");
  if (game_status == 1) {
    score += 17
  }
} else if (chrono > 1.6) {
  text.setText("1.6");
  if (game_status == 1) {
    score += 16
  }
} else if (chrono > 1.5) {
  text.setText("1.5");
  if (game_status == 1) {
    score += 15
  }
} else if (chrono > 1.4) {
  text.setText("1.4");
  if (game_status == 1) {
    score += 14
  }
} else if (chrono > 1.3) {
  text.setText("1.3");
  if (game_status == 1) {
    score += 13
  }
} else if (chrono > 1.2) {
  text.setText("1.2");
  if (game_status == 1) {
    score += 12
  }
} else if (chrono > 1.1) {
  text.setText("1.1");
  if (game_status == 1) {
    score += 11
  }
} else if (chrono > 1.0) {
  text.setText("1.0");
  if (game_status == 1) {
    score += 10
  }
} else if (chrono > 0.9) {
  text.setText("0.9");
  text.x = 745;
  if (game_status == 1) {
    score += 9
  }
} else if (chrono > 0.8) {
  text.setText("0.8");
  if (game_status == 1) {
    score += 8
  }
} else if (chrono > 0.7) {
  text.setText("0.7");
  if (game_status == 1) {
    score += 7
  }
} else if (chrono > 0.6) {
  text.setText("0.6");
  if (game_status == 1) {
    score += 6
  }
} else if (chrono > 0.5) {
  text.setText("0.5");
  if (game_status == 1) {
    score += 5
  }
} else if (chrono > 0.4) {
  text.setText("0.4");
  if (game_status == 1) {
    score += 4
  }
} else if (chrono > 0.3) {
  text.setText("0.3");
  if (game_status == 1) {
    score += 3
  }
} else if (chrono > 0.2) {
  text.setText("0.2");
  if (game_status == 1) {
    score += 2
  }
} else if (chrono > 0.1) {
  text.setText("0.1");
  if (game_status == 1) {
    score += 1
  }
}

if (game_status == 2) {
  music_Micro_Game.stop();
  hit_answer = 0;
  chrono = 10;
  game_status = 0;
  advancement = 0;
  hit_up_chest = 0;
  hit_down_chest = 0;
  this.scene.start("scene_Transi_Lose");
} else if (game_status == 1) {
  music_Micro_Game.stop();
  hit_answer = 0;
  chrono = 10;
  game_status = 0;
  advancement = 1;
  hit_up_chest = 0;
  hit_down_chest = 0;
  this.scene.start("scene_Score");
}


}

}
