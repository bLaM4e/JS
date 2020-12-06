// С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
// где val – заданное число, pow – степень.

function myMathPow(val, pow) {
    if (!Number.isInteger(pow)) return 'Ошибка. В нашей примере мы используеем только целую степень'
    if (pow === 1) return val;
    return myMathPow(val, pow-1) * val;
}

const val = 3, pow = 5;
console.log(`Задача 8:\n${val} ** ${pow} = ${myMathPow(val, pow)}`);
