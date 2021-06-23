function insertionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let temp = arr[i]
        let j = i
        while(j > 0 && temp < arr[j-1])
        {
            arr[j] = arr[j-1]
            j = j-1
        }
        arr[j] = temp
    }
    console.log(arr)
}
insertionSort([10,6,2,5,4,1,8,3,9,7])