function validate(str) {
    let arr = []
    for(i = 0; i < str.length; i++) {
        let char = arr[arr.length - 1]

        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            arr.push(str[i])
        }
        else if(
            (char == "(" && str[i] == ")") ||
            (char == "{" && str[i] == "}") ||
            (char == "[" && str[i] == "]")) {
            arr.pop()
        }
        else {
            return false
        }
    }
    return arr.length? false : true
}

console.log(validate("({[]})"))