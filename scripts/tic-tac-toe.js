  var play = 1;
  var squares = document.getElementsByClassName("square");
  var turn = "";

window.onload = function() {
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeSquare);
    //squares[i].addEventListener('click', xOrO);
  }
}

//function xOrO() {}


function changeSquare() {
  if (play == 1) {
  //console.log(this.id);
  this.innerHTML = "X";
  //document.getElementsByClassName("square").innerHTML = "X"
  this.style.backgroundColor = 'red';
  this.style.pointerEvents = 'none';
  play -= 1;
  //return i;
  //alert("It is" + i);
  winner();
  }

  else {
    this.innerHTML = "O";
    this.value = "O";
    this.style.backgroundColor = 'blue';
    this.style.pointerEvents = 'none';
    play += 1;
    //turn = "O";
    winner();

  }
  //return turn
}
checkWin();
