// Sigma
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        if (i > 0) {
        sum += i;
      }
    }
    return sum;
  }
console.log(sigma(25));  

//Factorial
function factorial(num) {
    var sum = 1;
    for (var i = 0; i <= num; i++) {
        if (i > 0) {
          sum *= i;
        }
    }
    return sum;
  }
console.log(factorial(5)); 
  
//Fibonacci
var arr = []
function fibonacci(arr) {
  arr[0] = 0
  arr[1] = 1
  for (var i = 2; i <= 10; i++) {
    arr[i] = (arr[i-1] + arr[i-2])
  }
  return arr;
}
console.log(fibonacci(arr))

// Array: Second-To-Last
var arr = [111,52,23,124,53]
function second_to_last() {
    if (arr.length > 2) {
      console.log(arr[arr.length-2])
    }
    else {
      console.log("null")
    }
}
second_to_last();

// Array: nth-to-last
var arr = [5,2,3,6,4,9,7]
function nth_to_last(n) {
    if (arr.length > 2) {
      console.log(arr[arr.length-n])
    }
    else {
      console.log("null")
    }
}
nth_to_last(3);

// Array: Second Largest
var arr = [42,2,3.14,7,6]
function second_largest(arr) {
    var max = arr[0];
    var secondMax = arr[2];
    for (var i = 0; i <= arr.length-1; i++) {
      if (arr[i] > max) {
        secondMax = max
        max = arr[i]
      }
      else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i]
      }
      else if (arr.length < 3) {
        console.log("null")
        break;
      }
    }
    return secondMax
}
console.log(second_largest(arr))

// Double Trouble
var arr = [2,1,4,3.14,7,42]
function double_trouble(arr) {
  var newarr = []
  for (var i = 0; i <= arr.length - 1; i++) {
    newarr.push(arr[i])
    newarr.push(arr[i])
  }
  return newarr;
}
console.log(double_trouble(arr));