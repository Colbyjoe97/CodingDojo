function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    avg = sum / arr.length
    console.log("max: ", max)
    console.log("Min: ", min)
    console.log("Avg: ", avg)
}
maxMinAvg([11,2,3,24,5,-6,7])