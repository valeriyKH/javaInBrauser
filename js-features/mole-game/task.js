const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

card.onclick = function(event) {
    let hole = event.target.closest('hole'); 
  
    if (!hole) return; 

    if (!card.contains('hole hole_has-mole')){
        dead.innerHTML++;
    } else{
        localStorage.innerHTML++;
    } 
  
    highlight(hole);
  };