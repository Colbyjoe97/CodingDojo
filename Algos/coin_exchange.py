def coinExchange(num):
    quarter = 0
    dime = 0
    nickel = 0
    penny = 0
    while num >= 25:
        num -= 25
        quarter += 1
    while num >= 10:
        num -= 10
        dime += 1
    while num >= 5:
        num -= 5
        nickel += 1
    while num > 0:
        num -= 1
        penny += 1
    print("quarters:", quarter, "dimes:", dime, "nickels:", nickel, "penny:", penny)

print(coinExchange(125))