function removeCookies(){
    document.querySelector('.cookies').remove()
}

function changeWeather(element){
    console.log(element.value)

    if(element.value == "C") {
        for(let i = 1; i < 5; i++) {
            tempHigh = document.querySelector('.high' + i)
            tempLow = document.querySelector('.low' + i)
            
            tempHigh.innerText = Math.round((parseInt(tempHigh.innerText) - 32) * 5/9)
            tempLow.innerText = Math.round((parseInt(tempLow.innerText) - 32) * 5/9)
        }
    }
    else{
        for(let i = 1; i < 5; i++) {
            tempHigh= document.querySelector('.high' + i)
            tempLow = document.querySelector('.low' + i)

            tempHigh.innerText = Math.round(((parseInt(tempHigh.innerText) * 9/5) + 32))
            tempLow.innerText = Math.round(((parseInt(tempLow.innerText) * 9/5) + 32))
        }
    }
}