let lost = document.getElementById('lost');
let dead = document.getElementById('dead');
let hole = document.getElementsByClassName('hole');

for (let ind = 1; ind < hole.length; ind++) {
    
  function addHole (ind) {
    let holeClick = document.getElementById(`hole${ind}`);
    return holeClick;
  }

  let hole = addHole (ind);

  hole.onclick = function() {

  if (hole.className.includes("hole_has-mole") === true) {
    dead.innerHTML++;
  } else {
    lost.innerHTML++; 
  }

  if (dead.innerHTML == 10) {
    alert ("Вы победили!");
    lost.innerHTML = 0;
    dead.innerHTML = 0;
  }
  
  if (lost.innerHTML == 5) {
    alert ("Вы проиграли");
    lost.innerHTML = 0;
    dead.innerHTML = 0;
  }

  };
  
};