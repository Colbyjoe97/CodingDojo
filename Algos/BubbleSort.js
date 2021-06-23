// function sort(arr)
// {
//     for(var i = 0; i < arr.length; i++)
//     {
//         if(arr[i] > arr[i + 1])
//         {
//             var temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//             return sort(arr)
//         }
//     }
//     return arr
// }
// console.log(sort([3,1,5,6,2,4,10,9,8,7]))


// Instructors method
function bubbleSort(arr)
{
    for(var j = 0; j < arr.length; j++)
    {
        for(var i = 0; i < arr.length - j; i++)
        {
            if(arr[i] > arr[i + 1])
            {
                var temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    console.log(arr)
}
bubbleSort([3,1,5,6,2,4,10,9,8,7])