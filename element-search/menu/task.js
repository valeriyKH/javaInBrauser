let menu = document.querySelector('.menu__link');

let back = document.querySelector('body');
let main = document.querySelector('.main');

menu.onclick = function(){
    menu.classList.toggle('active');
    menus.classList.toggle('active');
    back.classList.toggle('lock');
}

menu.onclick = function () {
    main.classList.remove('active');
    back.classList.toggle('lock');
}