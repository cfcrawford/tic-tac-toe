  var play = 1;
  var squares = document.getElementsByClassName("square");

window.onload = function() {
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeSquare);
  }
}


function changeSquare() {
  if (play % 2 != 0) {
  //console.log(this.id);
  this.innerHTML = "X";
  this.style.backgroundColor = 'red';
  play -= 1;
  document.getElementsByClassName("square").disabled = "true";

  }

  else {
    this.innerHTML = "O";
    this.style.backgroundColor = 'blue';
    play += 1;
  }
}



/*
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

/* var event = new customEvent()
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