// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function con(num) {
    let resObj = {};
    if (num > 999) {
        console.log('Число должно быть строго меньше 1000');
        return resObj
    }
    let category = 0;
    let i = 1;
    while (i <= 3) {
        category = num % 10;
        num = Math.floor(num / 10);
        switch (i) {
            case 1: 
                resObj['единицы'] = category;
                break;
            case 2: 
                resObj['десятки'] = category;
                break;
            case 3: 
                resObj['сотни'] = category;
        } 
        // if (i === 1) {
        //     resObj['единицы'] = category;
        // } else if (i === 2) {
        //     resObj['десятки'] = category;
        // } else if (i === 3) {
        //     resObj['сотни'] = category;
        // }
        i++;
    }
    return resObj;
}


console.log(con(3));