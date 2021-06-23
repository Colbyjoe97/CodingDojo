// let sum = 0;
// function printSum() {
//     for(let i = 0; i <= 5000; i++) {
//         if(i % 2 !== 0) {
//             sum += i
//         }
//     }
//     console.log("Sum: ", sum)
// }
// printSum();


function sec(arr) {
    let big = 0
    let big2 = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > big) {
            big = arr[i]
        }
        if(arr[i] < big && arr[i] > big2) {
            big2 = arr[i]
        }
    }
    console.log(big)
    console.log(big2)
}

sec([111,2,3,25,5,6])