function findAll(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    let avg = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min)  {
            min = arr[i]
        }
        sum += arr[i]
    }
    avg = sum / arr.length
    console.log(`Max is ${max}, Min is ${min}, and the Average is ${avg}`)
}
findAll([1,2,3,4,5,6,7,8,9,10])