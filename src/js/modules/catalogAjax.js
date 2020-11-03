import { getResourse } from "../services/requests";
import bindModal from "./bindModal";

const catalogAjax = () => {
    const btn = document.querySelector('.catalog__button'),
        container = document.querySelector('.catalog__grid');

    btn.addEventListener('click', () => {
        getResourse('catalog.json')
            .then(json => {
                json.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'cart';
                    card.innerHTML = `
                        <img src="${item.img}" alt="ковер" class="cart__img">
                        <div class="cart__title">${item.title}</div>
                        <div class="cart__description">${item.description}</div>
                        ${item.oldPrice && `<div class="cart__oldprice">${item.oldPrice} руб.</div>`}
                        <div class="cart__row">
                            <div class="cart__price">${item.currentPrice} руб.</div>
                            <button class="cart__button">Купить</button>
                        </div>
                    `;
                    container.appendChild(card);
                });

                bindModal('.cart__button', '.modal-product', '.modal-product__close', 'modal-product--show');
                btn.remove();
            })
            .catch(err => {
                console.log('error');
            })
    });
};

export default catalogAjax;