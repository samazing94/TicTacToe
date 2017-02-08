//JS code goes here
//JS code goes here
var turn = true;
var player = [];
var clicked = [];
function play(event){
  var element = event.target;

  if (!clicked[element.id]) {
    clicked[element.id] = true;
    console.log(clicked);
    console.log(event);
    if (player[1])
    {
      element.innerHTML = "X";
    }
    else if (player[2]){
      element.innerHTML = "X";
    }
    element.innerHTML = turn ? "X" : "O";
    turn = !turn;
  }
}

function status (event) {

}
function restart (event){
  var element = document.getElementById("clear");
    for(var i = 0; i < clicked.length; i++){
      clicked[i] = "";
    }
}
