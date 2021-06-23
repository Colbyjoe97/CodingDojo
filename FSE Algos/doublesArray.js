function doubles(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}

console.log(doubles([1,2,3,4,5]))