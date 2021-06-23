function removeNegatives(arr) {
    let numNegatives = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            numNegatives++
        }
        else {
            arr[i - numNegatives] = arr[i]
        }
    }
    while(numNegatives--) {
        arr.pop()
    }
    console.log(arr)
}

removeNegatives([1,2,-3,-4,5,-6])