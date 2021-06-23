import random
def randInt(min='', max='', repeat=2):
    max = round(random.randrange(1, 100))
    print(f"max: {max}\n")
    min = round(random.randrange(1, max - 1))
    print(f"min: {min}\n")
    return max, min
print(randInt())