var config = {
	type: Phaser.AUTO,
	width: 900,
	height: 1600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

scene: [Scene_Intro, Scene_Menu, Scene_Transi_Win, Scene_Micro_Game_1, Scene_Micro_Game_2, Scene_Micro_Game_3, Scene_Transi_Lose, Scene_Score]

};

var game = new Phaser.Game(config);
