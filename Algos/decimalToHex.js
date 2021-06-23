function toHex(num) {
    var remainders = []
    var hexChars = "0123456789ABCDEF"
    var output = "0x"
    while(num>0) {
        // Find the remainder
        remainder = num % 16
        remainders.push(remainder) // Push remainder to the array to store it for later
        num = Math.floor(num / 16)
    }
    console.log(remainders)

    for(var i = remainders.length-1; i >= 0; i--) {
        output += hexChars[remainders[i]]
    }
    console.log("output: ", output)
}

toHex(479) // 0x1df