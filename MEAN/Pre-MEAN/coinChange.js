function change(num) {
    let quarter = 0
    let dime = 0
    let nickel = 0
    let penny = 0
    while(num >= 25) {
        quarter++
        num -= 25
    }
    while(num >= 10) {
        dime++
        num -= 10
    }
    while(num >= 5) {
        nickel++
        num -= 5
    }
    while(num > 0) {
        penny++
        num--
    }
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
}
change(41)