function toBinary(num) {
    var result = ""
    var value = num
    while(value >= 1) {
        remainder = value % 2
        result += remainder
        value = Math.floor(value / 2)
    }
    result = result.split("").reverse().join("")
    // split makes it a string, reverse reverses it, and join combines them together (removing commas)
    result = "0b" + result
    console.log(result)
}
toBinary(25)