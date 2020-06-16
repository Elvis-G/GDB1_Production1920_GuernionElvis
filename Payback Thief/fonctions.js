///// Le timer /////
function function_Chrono () {
  if (chrono < 0.1) {
    game_status = 2; // (Lose)
  }

  if (chrono > 0.1) {
    chrono -= 0.1;
  }

}


function function_Transi_Lose () {
  chest = 1;
  music_Transi_Lose.stop();
}


function function_Transi_Win () {
  chest = 1;
  music_Transi_Win.stop();
}




function function_Intro () {
  chest = 1;
  music_Intro.stop();
}
