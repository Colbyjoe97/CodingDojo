function flatArr(arr)
{
    var newArr = []
    for (var i = 0; i < arr.length; i++)
    {
        if (!Array.isArray(arr[i]))
        {
            newArr.push(arr[i])
        }
        else
        {
            for (var j = 0; j < arr[i].length; j++)
            {
                newArr.push(arr[i][j])
            }
        }
    }
    console.log(newArr)
    return newArr
}
flatArr([1,2,[3,4],5,[]])