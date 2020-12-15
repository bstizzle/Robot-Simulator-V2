document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const ul = document.querySelector("#moves-container");

  function addMove(event){
    if(event.key === "ArrowDown"){
      let down = document.createElement("li");
      down.innerText = "down";
      ul.appendChild(down);
    } else if(event.key === "ArrowUp") {
      let up = document.createElement("li");
      up.innerText = "up";
      ul.appendChild(up);
    } else if(event.key === "ArrowLeft") {
      let left = document.createElement("li");
      left.innerText = "left";
      ul.appendChild(left);
    } else if(event.key === "ArrowRight"){
      let right = document.createElement("li");
      right.innerText = "right";
      ul.appendChild(right);
    };
  };

  document.addEventListener("keydown", addMove);

  const moveButton = document.querySelector("#move-button");

  moveButton.addEventListener("click", function(){
    let direction = ul.firstElementChild.innerText;
    move(direction);
    ul.firstElementChild.remove();
  });

});