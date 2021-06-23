// My solution
// function selSort(arr)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         for(let j = i + 1; j < arr.length; j++)
//         {
//             var max = arr[i]
//             if(arr[j] < max)
//             {
//                 max = arr[j]
//                 temp = arr[i]
//                 arr[i] = max
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// selSort([1,6,3,10,9,2,5,4,8,7])

// Instructor's solution
function selectionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let bigIdx = 0
        let big = arr[0]
        for(let j = 0; j < arr.length - i; j++)
        {
            if(arr[j] > big)
            {
                bigIdx = j
                big = arr[j]
            }
        }
        let temp = arr[bigIdx]
        arr[bigIdx] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    console.log(arr)
    return arr
}
selectionSort([8,3,6,9,1,5])