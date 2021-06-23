// My solution
function encode(str)
{
    let count = 1;
    let newStr = ""
    for(let i = 0; i < str.length; i++)
    {
        for(let j = 1 + i; j < str.length; j++)
        {
            if(str[j] == str[i])
            {
                count++
            }
        }
        while(str[i] == str[i + 1])
        {
            i++
        }
        newStr += str[i]
        newStr += count
        newStr += "  "
        count = 1
    }
    console.log(newStr)
}
// encode("ABBCCCDDDDEEEEEFFFFFFGGGGGGG")

function decode(str) {
    let result = ""
    for (let i = 0; i < str.length; i += 2) {
        let character = str[i]
        let count = str[i+1]
        for (let j = 0; j < count; j++) {
            result += character
        }
        result += " "
    }
    console.log(result)
    return result
}
// decode("A1B2C3D4E5F6G7")



// Instructors solution
