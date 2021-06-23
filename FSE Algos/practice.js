function remove(arr, idx1, idx2) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(i >= idx1 && i <= idx2) {
            count++
        }
        else {
            arr[i - count] = arr[i]
        }
    }
    while(count--) {
        arr.pop()
    }
    return arr
}

console.log(remove([1,2,3,4,5,6,7,8,9], 2, 5))