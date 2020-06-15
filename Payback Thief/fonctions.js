///// Le timer /////
function function_Chrono () {
  if (chrono < 0.1) {
    game_status = 1; // (Lose)
  }

  if (chrono > 0.1) {
    chrono -= 0.1;
  }

}
