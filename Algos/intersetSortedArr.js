// Alison's Solution
function overlap(arr1, arr2) {
    let i = 0
    let j = 0
    let result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            result.push(arr1[i])
            i++
            j++
        }
        else if (arr1[i] > arr2[j]) {
            j++
        }
        else {
            i++
        }
    }
    console.log(result)
    return result
}
// overlap([1,2,2,2,7],[2,2,6,6,7])

// Instructor's Solution
const intersect = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] == arr2[j]) {
            result.push(arr1[i])
            i++
            j++
        }
        else if(arr1[i] < arr2[j]) {
            i++
        }
        else {
            j++
        }
    }
    console.log(result)
    return result
}
intersect([1,2,2,2,7],[2,2,6,6,7])