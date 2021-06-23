function greaterThanY(arr, num) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            count++
        }
    }
    console.log(count)
}

greaterThanY([1,2,3,4,5], 2)