let newArr = []
function numSum(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            newArr.push(arr[i] + arr[j])
        }
    }
    console.log(newArr)
}

numSum([1,2,3])