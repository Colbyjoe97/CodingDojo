import random

def toss():
    headsCount = 0
    tailsCount = 0
    for i in range(1, 5001):
        randNum = random.randint(1,2)
        if randNum == 1:
            headsCount += 1
            print(f"Attempt #{i}: Throwing a coin.. It's Heads! Got {headsCount} head(s) so far and {tailsCount} tail(s) so far")
        if randNum == 2:
            tailsCount += 1
            print(f"Attempt #{i}: Throwing a coin.. It's Tails! Got {headsCount} head(s) so far and {tailsCount} tail(s) so far")
    print(f"You got {headsCount} total Heads, and {tailsCount} total Tails!")

toss()