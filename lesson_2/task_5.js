// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function sum(x, y) {
    return x + y;
}

function difference(x, y) {
    return (x >= y) ? x - y : y - x;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return (x >= y) ? x / y : y / x;
}

let x = -5, y = 10;

console.log(`Задача 5:\nРаботаем с числами ${x} и ${y}`);
console.log(`Сумма равна: ${sum(x, y)}`);
console.log(`Большее минус меньшее: ${difference(x, y)}`);
console.log(`Произведение равно: ${multiplication(x, y)}`);
console.log(`Большее делить на меньшее: ${division(x, y)}`);
