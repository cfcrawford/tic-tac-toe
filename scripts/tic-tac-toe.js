  var play = 1;
  var squares = document.getElementsByClassName("square");
  var turn = "";

window.onload = function() {
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeSquare);
  }
  document.getElementById("button").addEventListener('click', clearSquares);
}



function changeSquare() {
  if (play == 1) {
  //console.log(this.id);
  this.innerHTML = "X";
  //document.getElementsByClassName("square").innerHTML = "X"
  this.style.backgroundColor = 'red';
  this.style.pointerEvents = 'none';
  play -= 1;
  }

  else {
    this.innerHTML = "O";
    this.style.backgroundColor = 'blue';
    this.style.pointerEvents = 'none';
    play += 1;
  }

  winnerX();
  winnerO();
}

function clearSquares() {
  document.getElementById("square1").innerHTML = "";
  document.getElementById("square2").innerHTML = "";
  document.getElementById("square3").innerHTML = "";
  document.getElementById("square4").innerHTML = "";
  document.getElementById("square5").innerHTML = "";
  document.getElementById("square6").innerHTML = "";
  document.getElementById("square7").innerHTML = "";
  document.getElementById("square8").innerHTML = "";
  document.getElementById("square9").innerHTML = "";

  document.getElementById("square1").style.backgroundColor = '';
  document.getElementById("square2").style.backgroundColor = '';
  document.getElementById("square3").style.backgroundColor = '';
  document.getElementById("square4").style.backgroundColor = '';
  document.getElementById("square5").style.backgroundColor = '';
  document.getElementById("square6").style.backgroundColor = '';
  document.getElementById("square7").style.backgroundColor = '';
  document.getElementById("square8").style.backgroundColor = '';
  document.getElementById("square9").style.backgroundColor = '';

}


function winnerX() {
  if (checkForWinner("X")) {
    newImage = "url(http://cdn.meme.am/instances/66547988.jpg)";
  document.getElementById('board').style.backgroundImage = newImage;
  document.getElementById('h1').innerHTML = "X wins!";
  }
}

function winnerO() {
  if (checkForWinner("O")) {
    newImage = "url(http://cdn.meme.am/instances/66547988.jpg)";
  document.getElementById('board').style.backgroundImage = newImage;
  document.getElementById('h1').innerHTML = "O wins!";
  }
}



function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

//gives a box based on a number
function getBox(number) {
  return document.getElementById("square" + number).innerText;
}

