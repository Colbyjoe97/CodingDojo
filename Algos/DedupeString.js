function dedupe(str)
{
    let tempArr = []
    for(var i = 0; i < str.length; i++)
    {
        if(tempArr.includes(str[i]) != true)
        {
            tempArr.push(str[i])
        }
        else
        {
            for(var j = 0; j < tempArr.length; j++)
            {
                if(tempArr[j] == str[i])
                {
                    tempArr.splice(j, 1)
                    break
                }
            }
            tempArr.push(str[i])
        }
    }
    console.log(tempArr)
}
dedupe("Snaps! crackles! pops!");