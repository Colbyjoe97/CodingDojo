function change(amount) {
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    while(amount >= 25) {
        amount -= 25
        quarter++
    }
    while(amount >= 10) {
        amount -= 10
        dime++
    }
    while(amount >= 5) {
        amount -= 5
        nickel++
    }
    while(amount > 0) {
        amount--
        penny++
    }
    console.log("Quarters: ", quarter)
    console.log("Dimes: ", dime)
    console.log("Nickels: ", nickel)
    console.log("Pennies: ", penny)
}

change(41)