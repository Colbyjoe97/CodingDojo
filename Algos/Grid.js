function FoodTruck(arr)
{
    var xArr = [];
    var yArr = [];
    var newArr = [];
    for (i = 0; i < arr.length; i++)
    {
        xArr.push(arr[i][0])
        yArr.push(arr[i][1])
    }
    xArr.sort(function (a, b) { return a - b });
    yArr.sort(function (a, b) { return a - b });
    newArr.push(xArr[Math.floor(xArr.length/2)])
    newArr.push(yArr[Math.floor(yArr.length / 2)])
    console.log(newArr)
    return newArr
}
FoodTruck([[10,0], [-1, -10], [2, 4]])