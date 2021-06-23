let arr1 = [2, 4, 6, 8, 10]
let arr2 = [1, 3, 5, 7, 9]

function merge(arr1, arr2)
{
    let results = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length)
    {
        if (arr1[i] < arr2[j])
        {
            results.push(arr1[i])
            i++
        }
        else
        {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length)
    {
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length)
    {
        results.push(arr2[j])
        j++
    }
    console.log(results)
    return results
}
merge(arr1, arr2);

function mergeSort(arr)
{
    // Base case
    if (arr.length <= 1 ){
        return arr
    }
    let midPoint = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint, arr.length))

    return merge(left, right)

}

// console.log(mergeSort([13, 4, -5, 8, 5,10, 3]))