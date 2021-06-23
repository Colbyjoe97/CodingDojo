// My solution
let words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]
]

let str = ""
function combo(arr)
{
    for(let i = 0; i < arr[0].length; i++)
    {
        for(let j = 0; j < arr[1].length; j++)
        {
            for(let k = 0; k < arr[2].length; k++)
            {
                str += (arr[0][i] + " " + arr[1][j] + " " + arr[2][k])
                console.log(str)
                str = ""
            }
        }
    }
}
combo(words)

// Instructor's Solution
function allCombinations(words)
{
    let result = [];
    function helper(comb, i)
    {
        if(i==words.length)
        {
            result.push(comb)
        }
        else
        {
            for(var j = 0; j< words[i].length; j++)
            {
                helper(comb + words[i][j] + " ", i+1 )
            }
        }
    }
    helper("", 0)
    return result

}
console.log(allCombinations(words))