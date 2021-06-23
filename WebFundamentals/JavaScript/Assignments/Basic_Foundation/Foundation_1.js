// Returns an array 1-255
function arr255() {
    var arr = []
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

// Adds all even numbers from 1-1000 to the total sum
function even1000() {
    var sum = 0
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum;
}
even1000()

// Adds all odd numbers from 1-5000 to the total sum
function odd5000() {
    var sum = 0
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum;
}

// Returns the sum of all values within an array
function iterateArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

// Returns the maximum number within an array
function findmax(arr) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

// Returns the average number within an array
function findavg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var avg = sum / arr.length
    return avg
}

// Returns an array of all odd numbers 1-50
function arrayodd() {
    var arr = []
    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i)
        }
    }
    return arr;
}

// Returns number of values greater than Y
function greaterthany(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count;
}

// Replaces an array where each index is squared
function squared(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2)
    }
    return arr;
}

// Replaces any negatives with the value of 0
function nonegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
}

// Find the min/max/avg of an array
function min_max_avg(arr) {
    var min = arr[0]
    var max = arr[0]
    var sum = arr[0]

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg]
    return arrnew;
}

// Swap first and last values in an array
function swap(arr) {
    var temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[0]
    arr[0] = temp
    return arr
}

// Replaces any negative values with "Dojo"
function dojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr;
}