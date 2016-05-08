/* var button = document.getElementById("your-button-id");
button.onclick = function(){
  //do stuff
}
  alert('Welcome to Tic Tac Toe'); */

document.getElementById("one").onclick = changeColor;

    function changeColor() {
        document.body.style.color = "purple";
        return false;
    }
    changeColor();
