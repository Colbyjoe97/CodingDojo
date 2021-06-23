// This is the best solution
function string_to_array(str)
{
    return str.trim().split(/\s+/);
};
console.log(string_to_array("Favorite              quote here,             with puntuations . ! , # & () "));



// Instructor's solution
// function stringToArray(strInput){
//     let result = [];
//     let word = ""
//     for (var i = 0; i< strInput.length; i++){
//         if (strInput[i] != " "){
//             word += strInput[i]
//         }
//         else if (strInput[i] == " "){
//             if (word.length > 0){
//                 result.push(word)
//             }
//             word = ""
//         }
//     }
//     console.log(result)
// }
// stringToArray("  Life   is not a drill! ")