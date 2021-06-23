var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;

for (var i = 0; i < testArr.length; i++) {
    sum += testArr[i]
    console.log("Current num: " + testArr[i])
    console.log("current sum: " + sum)
    testArr[i] = testArr[i] * i;
}
console.log(testArr)