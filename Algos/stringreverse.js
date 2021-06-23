function reverseString(strInput) {
    var newStr = ""
    for (var i = strInput.length - 1; i >= 0; i--) {
        newStr = newStr + strInput[i]
    }
    return newStr
}
console.log(reverseString("Hello"))