'use strict';


function converter(с) {
    return (9 / 5) * с + 32;
}


let Tc = prompt('Введите температуру в градусах цельсия');
let Tf = converter(Tc);
alert(Tf);
