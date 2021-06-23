function removeDupe(arr)
{
    var newArr = [];
    for (var i = 1; i < arr.length; i++)
    {
        if (!newArr.includes(arr[i]))
        {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeDupe([1, 2, 1, 3, 5, 2, 3, 5, 6, 7, 6, 7]));