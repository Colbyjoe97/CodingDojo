// Changes all positive numbers to "big"
function biggie() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
}

// Print lowest array number return highest array number
function low_to_high() {
    var max = arr[0]
    var min = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
    return max
}

// Print second to last value, return first odd number
function print_and_return(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr.length - 2)
        if (i % 2 !== 0) {
            return arr[i]
        }
        break;
    }
}

// Double an array without changing the original
function double(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

/* Replace last value in an array with number of
positive values */
function totalpositives(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
        arr[arr.length - 1] = count
    }
    return arr
}

// 3 odds or evens in a row
var arr = [1,3,5,6,8,10]
function evensAndOdds(arr) {
  var evenCount = 0
  var oddCount = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenCount++
      oddCount = 0
      if (evenCount == 3) {
        console.log("Even more so!")
        evenCount = 0
      }
    }
    else {
      oddCount++
      evenCount = 0
      if (oddCount == 3) {
        console.log("That's odd!")
        oddCount = 0
      }
    }
  }
}
evensAndOdds(arr)

/* add 1 to every other index, log each value, return
arr */
function increment_the_seconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i]++
        }
        console.log(arr[i])
    }
    return arr
}

/* Replace each string with the length number of the
prevous index string */
function stringlength(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
}

/* Add 7 to each index in an array without changing
the original array */
function add_seven(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7)
    }
    return newArr;
}

// Reverse Array
var arr = [1,3,5,7]
function reverse(arr) {
    newArr = arr.reverse()
    console.log(newArr)
}
reverse(arr)

// Make the array negative
function negative(arr) {
    var negArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negArr.push(arr[i])
        }
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1
            negArr.push(arr[i])
        }
    }
    return negArr;
}

/* print "yummy" if arr[i] = "food" or "i'm hungry"
if there's no "food" */
function food(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== "food") {
            console.log("No food")
            break;
        }
        if (arr[i] === "food") {
            console.log("yummy")
        }
    }
}

// Swap an array towards the center
function swap(arr) {
    var temp = arr[arr.length - 1]
    var temp2 = arr[arr.length - 2]
    var temp3 = arr[arr.length - 3]
    arr[arr.length - 1] = arr[0]
    arr[arr.length - 3] = arr[2]
    arr[arr.length - 4] = arr[3]
    arr[0] = temp
    arr[4] = temp2
    arr[2] = temp3
    return arr
}

// Multiply the values in an array by a given number
function multiply(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num
    }
    return arr
}