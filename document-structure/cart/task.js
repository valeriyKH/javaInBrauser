const cart = document.querySelector('.cart__products');

const productsList = document.querySelectorAll('.product');
let arr = [...productsList].map((item) => item.getAttribute('data-id'));

getInfoAboutProduct = (item) => {
    const controlsItem = item.querySelector('.product__controls');
    const countBlock = controlsItem.querySelector('.product__quantity-value');
    const imgItem = item.querySelector('.product_image').src;
    const quantity = item.querySelectorAll('.product__quantity-control');
    const dataId = item.getAttribute('data-id');

    quantity.forEach(item => {
        item.addEventListener('click', e => {
            if(e.target.classList.contains('.product__quantity-control_dec')){
                if(countBlock.textContent > 1) {
                    countMlock.innerHTML = countBlock.textContent -1;
                }
            } else {
                countBlock.innerHTML = +countBlock.textContent + 1;
            }
        });
    });

    const addBtn = controlsItem.querySelector('.product__add');
    addBtn.addEventListener('click', () => {
        const div = document.createElement('div');

        div.setAttribute('id', dataId);
        div.classList.add('cart__product');

        div.innerHTML = ` 
        <img class = 'cart__product-image' src=${imgItem}>
        <div class = 'cart__product-count'>${countBlock.textContent}</div>
        `;

        const idRenderElem = arr.find(item => item === dataId);

        if(document.getElementById(idRenderElem)) {
            const foundElement = document.getElementById(idRenderElem);
            const prevCount = foundElement.querySelector('.cart__product-count').textContent;
            foundElement.querySelector('.cart__product-count').innerHTML = countBlock.textContent + +prevCount;
        } else {
            cart.appendChild(div);
        }
    });
};