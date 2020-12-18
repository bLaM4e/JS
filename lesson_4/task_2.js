function countBasketPrice(cart) {
    let total = 0;
    for (const prop in cart) {
        total += cart[prop].price * cart[prop].quantity
    }
    return total
}


let shoppingCart = {
    mouse: {
        price: 100,
        quantity: 3 
    },
    board: {
        price: 200,
        quantity: 5 
    },
    monitor: {
        price: 900,
        quantity: 1 
    },
    countBasketPrice() {
        let total = 0;
        for (const prop in shoppingCart) {
            total += this.prop.price * this.prop.quantity
        }
        return total;
    }
}

// console.log(countBasketPrice(shoppingCart));
console.log(shoppingCart.countBasketPrice());
