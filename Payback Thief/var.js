
var cursors;
var platforms;
var player;
var spawner;
var pointer;
var chrono = 10;

var chest = 0;
var timer_chrono;

var game_status = 0;


///// Actions, Moves... /////
var spacebar;
var echap;
var enter;


///// Texts /////
var text;
var text_indication;
var text_transition;


///// Sounds, Musics... /////
var music_Intro;
var music_Menu;
var music_Transi_Lose;
var music_Transi_Win;
var music_Micro_Game;
var sound_Check;
var sound_Select;


///// Introduction /////
var background_Intro;
var timer_Intro;


///// Scene_Menu /////
var menu;
var menu_select;


///// Scene_Micro_Game1 /////
var background_Micro_1;

var normalKey_one;
var normalKey_two;
var normalKey_three;
var goldenKey_one;
var goldenKey_two;
var goldenKey_three;

var golden_answer = 0;


///// Scene_Micro_Game2 /////
var background_Micro_2;

var laser_up_chest;
var laser_down_chest;

var medaillon;
var laser_bot;
var laser_top;

var laser_answer = 0;


///// Scene_Micro_Game3 /////
var background_Micro_3;

var hit_up_chest;
var hit_down_chest;

var hitZone_top;
var hitZone_mid;
var hitZone_bot;

var hit_answer = 0;


///// Scene_Transi_Win /////
var background_Transi_Win_1;
var background_Transi_Win_2;
var background_Transi_Win_3;

var timer_win;
var advancement = 1;


///// Scene_Transi_Lose /////
var background_Transi_Lose;
var timer_lose;


///// Scene_Score /////
var background_Score;

var score = 0;
var best_Score = 0;

var score_text;
var bestScore_text;
var rank_text;
