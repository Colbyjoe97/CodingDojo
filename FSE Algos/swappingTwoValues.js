function firstToLast(arr) {
    let temp = arr[0]
    arr[0] = arr[arr.length -1 ]
    arr[arr.length -1 ] = temp
    console.log(arr)
}

firstToLast([1,2,3,4,5])