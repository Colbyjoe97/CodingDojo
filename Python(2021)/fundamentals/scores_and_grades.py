import random
def grades():
    for i in range(1, 11):
        randNum = random.randint(60,101)
        if randNum > 89:
            print "Score: {}, your grade is A".format(randNum)
        elif randNum > 79 and randNum < 90:
            print "Score: {}, your grade is B".format(randNum)
        elif randNum > 69 and randNum < 80:
            print "Score: {}, your grade is C".format(randNum)
        elif randNum > 59 and randNum < 70:
            print "Score: {}, your grade is D".format(randNum)
        else:
            print("You failed!")
grades()