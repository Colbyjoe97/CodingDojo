function search(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            console.log(`Found number ${num} at index ${i}`)
            return arr
        }
    }
    console.log("Number not found")
}
search([1,2,3,4,5,6], 2)