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

scene: [Scene_Menu, Scene_Micro_Game_1, Scene_Score]

};

var game = new Phaser.Game(config);
