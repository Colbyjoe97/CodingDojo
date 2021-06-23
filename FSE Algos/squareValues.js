function squareValues(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(Math.pow(arr[i], 2))
    }
    console.log(newArr)
}
squareValues([1,2,3,4,5])