  var play = 1;
  var squares = document.getElementsByClassName("square");
  var turn = "";

window.onload = function() {
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeSquare);
    //squares[i].addEventListener('click', xOrO);
  }
}

function changeSquare() {
  if (play == 1) {
  //console.log(this.id);
  this.innerHTML = "X";
  //document.getElementsByClassName("square").innerHTML = "X"
  this.style.backgroundColor = 'red';
  this.style.pointerEvents = 'none';
  play -= 1;
  //var id = squares[i];
  //return i;
  //alert("It is" + squares[i]);
  //winner();
  }

  else {
    this.innerHTML = "O";
    this.style.backgroundColor = 'blue';
    this.style.pointerEvents = 'none';
    play += 1;
    //turn = "O";
    //winner();

  }
  winnerX();
  winnerO();
}
//checkWin();

/*function alertBox() {
  if (document.getElementsByClassName("square").innerHTML = "X") {
    alert("Hi!");
  }
}; */


function winnerX() {
  if (checkForWinner("X")) {
    alert("Hi!");
  }
}

function winnerO() {
  if (checkForWinner("O")) {
    alert("Whoa!!!");
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
  //alert("hi");
}

/*

//gives a box based on a number
function getSquare(number) {
  return document.getElementById("square" + number).innerText;
}


function getWinner() {
  if ((document.getElementById("square1").innerHTML = "X") && (document.getElementById("square2").innerHTML = "X") && (document.getElementById("square3").innerHTML = "X")) {
    alert("X is the winner!");
  }

} */

/*function checkRow(a, b, c) {
  if (a === "X" && b === "X" && c === "X") {
    return 1;
  }
  else if (a === "O" && b === "O" && c === "O") {
    return -1;
  }
  else {
    return 0;
  }
}

function checkWin(squares[i]) {
  if checkRow(squares[0], squares[1], squares[2]) = "X" {
    alert("hi");
  }
}

/* function changeSquare() {
  if (play == 1) {
  //console.log(this.id);
  this.innerHTML = "X";
  this.value = "X";
  this.style.backgroundColor = 'red';
  this.disabled = "true";
  play -= 1;
  document.getElementsByClassName("square").disabled = "true";

  }

  else {
    this.innerHTML = "O";
    this.value = "O";
    this.style.backgroundColor = 'blue';
    play += 1;

  }
}




function getWinner(number) {
  var result = false;
  if (getSquare === 1 && getSquare === 2 $$ getSquare === 3) ||
    (getSquare === 4 && getSquare === 5 $$ getSquare === 6) ||
    (getSquare === 7 && getSquare === 8 $$ getSquare === 9) ||
    (getSquare === 1 && getSquare === 4 $$ getSquare === 3) ||
    (getSquare === 1 && getSquare === 2 $$ getSquare === 3) ||
    (getSquare === 1 && getSquare === 2 $$ getSquare === 3) ||
    (getSquare === 1 && getSquare === 2 $$ getSquare === 3) ||
      {
        var result = true;
    }
    else result = false;
}










This function changes the color of a single square when you click on it more than once:


function changeSquare() {

  //console.log(this.id);
  this.innerHTML = "X"
  this.style.backgroundColor = this.style.backgroundColor=='red'? 'blue':'red';

}

But it's not what I'm trying to do



var button = document.getElementById("your-button-id")
window.onload = start;;
button.onclick = function(){
  //do stuff
}
  alert('Welcome to Tic Tac Toe');

.onclick = changeColor;

    function makeXAppear() {
       var text = document.getElementById('one');
       text.value = "X";
    }*/
/*
var event = new customEvent()
var square = document.getElementById('one');

    function makeXAppear() {
       document.getElementById('one');
       if text.value =
       text.value = "X";
    }


var count=1;
function changeColor(button, color) {
  var property = document.getElementById(button);
       if (count == 1) {
          property.style.backgroundColor = "#FFFFFF"
          count=1;
       }
       else {
        property.style.backgroundColor = "#7FFF00"
        count = 0;
       }
    }
*/
/*

var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

function start(){
  addXandOListener();
  addResetListener();
}

var function = xOrO() {
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  };
}


var function = changeColor() {
  for (var i = boxes.length - 1; i >= 0; i--) {
   boxes[i].backgroundColor = #7FFF00;
  }

}
*/



/* function addEventListener(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changeColor);
  }
}

function changeColor(square) {
    counter = 0;
   for (var i = 0; i < squares.length; i++){
    if ((counter % 2) === 0) {
      square.style.background = 'red';
      square.innerHTML = "X";
      counter += 1;
    }
    else {
      square.style.background = 'blue';
      square.innerHTML = "O";
    }
  }
}


function resetGrid(squares) {
  boxes.style.background = 'white';
  boxes.innerHTML = " "
}*/