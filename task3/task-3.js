let a = (parseInt(prompt("введите число 'a'")));
let b = (parseInt(prompt("введите число 'b'")));

if (a >= 0 && b >= 0) {
    alert(a - b)
}
if (a < 0 && b < 0) {
    alert(a * b)
}
if (a < 0 && b >= 0) {
    alert(a + b)
}
if (a >= 0 && b < 0) {
    alert(a + b)
}
