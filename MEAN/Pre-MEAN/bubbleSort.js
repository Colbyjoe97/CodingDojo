function bubble(arr) {
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        if(arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = temp
        }
    }
    console.log(arr)
}
bubble([5,4,3,2,1])