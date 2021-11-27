function binary(str) {
    let power = 0;
    let sum = 0;
    for(let i = str.length-1; i >= 0; i--) {
        if(str[i] == "1") {
            sum += Math.pow(2, power)
            console.log("current power: ", power)
            console.log("current sum: ", sum)
            console.log("i: ", i)
        }
        power++
    }
    console.log("sum: ", sum)
    return sum
}


binary("01011001")