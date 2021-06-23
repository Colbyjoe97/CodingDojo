//partition an array

//it will help to accept three arguments: an array, start index, and an end index (these can default to 0 and array.length-1, respectively)

//grab the pivot from the start of the array
//store the current pivot index in a variable (this will keep track of where the pivot should end up)
//loop through the array from the start until the end
    //if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

//swap the starting element(i.e the pivot) with the pivot index
//return the pivot index

function pivot(arr, start= 0, end= arr.length-1){
    function swap(array, i, j)
    {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    var pivot = arr[start]
    var swapIndex = start
    for(var i = start + 1; i <= end; i++)
    {
        if(pivot > arr[i])
        {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    console.log(arr)
    return swapIndex
}

function quickSort(arr, left=0, right=arr.length - 1)
{
    if(left < right)
    {
        let pivotIndex = pivot(arr, left, right)
        // left side
        quickSort(arr, left, pivotIndex - 1)
        // right side
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
quickSort([6,2,5,8,-7,9,-10,100,12])
// pivot([6,2,5,8,-7,9,-10,100,12])