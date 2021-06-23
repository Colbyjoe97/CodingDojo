function elimateNegatives(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr)
}
elimateNegatives([1,2,-3,4,-5])