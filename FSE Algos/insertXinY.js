function vidInsert(arr, idx, num) {
    arr.push(0)
    for(let i = arr.length - 1; i > idx; i--) {
        arr[i] = arr[i - 1]
    }
    arr[idx] = num
    console.log(arr)
}

vidInsert([1,2,3,4,5], 2, 10)