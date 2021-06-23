function BinarySearch(arr, num) {

    left = 0
    right = arr.length - 1

    while (left <= right)
    {
        mid = Math.floor ((left + right) / 2);
        if (arr[mid] == num)
        {
            return true;
        }
        else if (num < arr[mid])
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    return false;
}
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))