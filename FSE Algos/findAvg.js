function findAvg(arr) {
    let avg = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = sum / arr.length
    console.log(avg)
}

findAvg([1,2,3])