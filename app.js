function rollDice() {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var text = document.getElementById("text");
  //math for dice
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  //alert user of win or lose
  if (diceTotal % 2) {
    text.innerHTML += diceTotal + "! You rolled even!";
  } else {
    text.innerHTML += diceTotal + "! " + "Congrats! You rolled odd!";
  }
}
//roll dice when loading page
window.onload = function() {
  rollDice();
};
