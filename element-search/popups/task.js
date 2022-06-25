let numb = document.getElementById('modal_main')
let number = document.getElementById('modal_success') 

numb.onclick =function myFunction() {
    numb.style.display = "none";
}

number.onclick = function mySecondFunction () {
    number.style.display ="none";
    
}

numb.addEventListener("click", myFunction);
numb.addEventListener("click", mySecondFunction);

let closes = document.getElementsByClassName('modal__close')
let modal = document.getElementsByClassName('modal_active')


closes.onclikc = function () {
    modal.remove()
}


    