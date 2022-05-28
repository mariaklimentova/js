'use strict'

function getSum() {
    return a + b;
}

function getDivision() {
    return a / b;
}

function getSubtraction() {
    return a - b;
}

function getMultiplication() {
    return a * b;
}

let a = 3;
let b = 5;

let resultSum = getSum();
console.log('сумма =' + resultSum);

let resultDivision = getDivision()
console.log('деление =' + resultDivision)

let resultSubtraction = getSubtraction();
console.log('вычитание =' + resultSubtraction);

let resultMultiplication = getMultiplication();
console.log('умножение =' + resultMultiplication);



