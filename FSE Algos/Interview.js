function max(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    console.log("Max: ", max)
    return arr
}

max([1,2,12,50,2])