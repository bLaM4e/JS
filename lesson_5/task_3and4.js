// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, 
// в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// 4. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog”
// без вложенного кода. Весь вид каталога генерируется JS.

// 'use strict';

let shoppingCart = {
    products: [
        {
            title: 'mouse',
            price: 100,
            quantity: 3
        },
        {
            title: 'board',
            price: 200,
            quantity: 5
        },
        {
            title: 'monitor',
            price: 900,
            quantity: 1
        }
    ],

    // products: [],

    countBasketPrice() {
        return this.products.reduce((accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.quantity, 0);
    },

    showSumCart() {
        if(this.products.length === 0) {
            document.querySelector('div').insertAdjacentHTML('beforeend', '<p><b>Корзина пуста</b></p>');
        } else {
            const n = this.products.length;
            const sum = this.countBasketPrice();
            document.querySelector('div').insertAdjacentHTML('beforeend', `<p><b>В корзине ${n} вида товаров на сумму ${sum} руб.</b></p>`);
        }
    },

    init() {
        for(el of this.products) {
            const text = `${el.title}: Цена ${el.price}: Количество ${el.quantity}`;
            document.querySelector('div').insertAdjacentHTML('afterbegin', `<p>${text}</p>`);
            // const p = document.createElement('p')
            // document.querySelector('div').appendChild(p);
            // p.textContent = `${el.title}: Цена ${el.price}: Количество ${el.quantity}`;            
        }

        this.showSumCart();
    }
}

shoppingCart.init();
