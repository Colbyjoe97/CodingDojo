function shift(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = 0
    console.log(arr)
}

shift([1,2,3,4,5])