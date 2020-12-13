let resArr = [];
let i = 1;
resArr.push(2);
while (i < 99) {
    i += 2;
    if (i === 2 || i === 3 || i === 5 || i === 7) {
        resArr.push(i);
        continue;
    }
    if (!(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0)) resArr.push(i);
}
console.log(resArr);
