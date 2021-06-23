function pushFront(arr, num) {
    let newArr = [num]
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}
// pushFront([1,2,3,4,5], 100)

function popFront(arr) {
    let newArr = []
    for(let i = 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}

popFront([1,2,3,4,5])