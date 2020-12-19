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

    countBasketPrice() {
        return this.products.reduce((accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.quantity, 0);
    }
}

console.log(shoppingCart.countBasketPrice());
