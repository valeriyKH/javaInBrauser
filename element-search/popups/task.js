const modalOne = document.getElementById('modal_main');
const modalTwo = document.getElementById('modal_success');
const btn = document.querySelector('.show-success');
const closesmodalOne = modalOne.querySelector('.modal__close');
const closesmodalTwo = modalTwo.querySelector('.modal__close');

modalOne.classList.add('modal_active');

closesmodalOne.onclick = function () {
    modalOne.classList.remove('modal_active');
};

closesmodalTwo.onclick = function () {
    modalTwo.classList.remove('modal_active');
};

btn.onclick = function () {
    modalOne.classList.remove('modal_active');
    modalTwo.classList.add('modal_active');

    const openModalTwo = document.querySelector(".btn_success");
    
    openModalTwo.onclick = function () {
        modalTwo.classList.remove('modal_active');
    };  
}  




    







