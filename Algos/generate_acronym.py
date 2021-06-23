def generateAcronym(stringInput):
    acronym = ""
    acronym += stringInput[0] + '.'
    for i in range(0, len(stringInput), 1):
        if stringInput[i - 1] == ' ':
            acronym += stringInput[i].upper() + '.'
    return acronym
print(generateAcronym("National basketball association"))
#should print "NBA"