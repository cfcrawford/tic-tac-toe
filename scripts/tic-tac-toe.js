

var squares = document.getElementsByTagName("td");


function addEventListener(){
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
}
