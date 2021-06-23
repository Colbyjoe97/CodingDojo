function toString(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
}

toString([1,2,3,-4,5,-7])