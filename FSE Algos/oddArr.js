function oddArr(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

oddArr([1,2,3,4,5,6])