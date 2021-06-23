// ## Balance Point

// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

// node >js file name here< (include .js)

function balancePoint(arr){

    let leftsum = 0;

    let rightsum = 0;
    for(let k = 0; k<arr.length;k++){
        rightsum += arr[k]
    }

    for(let i = 0;i<arr.length-1;i++){
        leftsum += arr[i]
        rightsum -= arr[i]

        if(leftsum==rightsum){
            return true
        }
    }
    return false
}

console.log(balancePoint([1,2,3,4,10]))
console.log(balancePoint([1,2,4,2,1]))
console.log(balancePoint([2,3]))

// Balance Index

// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

function balanceIndex(arr){
    if(arr.length<3){
        return -1
    }
    let leftsum = arr[0];

    let rightsum = 0;
    for(let k = 2; k<arr.length;k++){
        rightsum += arr[k]
    }

    for(let i = 1;i<arr.length-1;i++){
        if(leftsum==rightsum){
            return i
        }
        leftsum += arr[i]
        rightsum -= arr[i+1]
    }
    return -1
}

// console.log(balanceIndex([-2,5,7,0,3]))
// console.log(balanceIndex([9,9,5,5]))