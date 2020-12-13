function countBasketPrice(arr) {
    let resSum = 0;
    for (let el = 0; el < arr.length; el++) {
        resSum += Number.parseInt(arr[el][1]) * arr[el][2]
    }
    return(resSum);
}


const arr = [['Отвертка', '100руб.', 3], ['Топор', '150руб.', 1], ['Лопата', '200руб.', 5]];

console.log(countBasketPrice(arr))
