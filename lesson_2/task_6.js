// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических
// операций(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case 'сложение': return `Сумма: ${sum(arg1, arg2)}`;
        case 'вычитание': return `Большее минус меньшее: ${difference(arg1, arg2)}`;
        case 'умножение': return `Умножение: ${multiplication(arg1, arg2)}`;
        case 'деление': return `Большее делить на меньшее: ${division(arg1, arg2)}`;
    }
}

let _arg1 = prompt('Введите первое число для задачи 6:');
let _arg2 = prompt('Введите второе число для задачи 6:');
let _operation = prompt('Введите одну из операций(сложение, вычитание, умножение, деление)');

console.log(`Задача 6:\nВы ввели числа ${_arg1}, ${_arg2} и операцию ${_operation}\n
${mathOperation(_arg1, _arg2, _operation)}`)


