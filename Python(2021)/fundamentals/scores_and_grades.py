import random
def grades():
    for i in range(1, 11):
        randNum = random.randint(60,101)
        if randNum > 89:
            print(f"Score: {randNum}, your grade is A")
        elif randNum > 79 and randNum < 90:
            print(f"Score: {randNum}, your grade is B")
        elif randNum > 69 and randNum < 80:
            print(f"Score: {randNum}, your grade is C")
        elif randNum > 59 and randNum < 70:
            print(f"Score: {randNum}, your grade is D")
        else:
            print("You failed!")
grades()