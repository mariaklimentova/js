'use strict'

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + ' -это ноль')
        continue
    }
    if (i % 2 == 0) {
        console.log(i + ' -четное число')
        continue
    }
    console.log(i + ' -нечетное число');
}
