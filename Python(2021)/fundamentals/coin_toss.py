import random

def toss():
    headsCount = 0
    tailsCount = 0
    for i in range(1, 5001):
        randNum = random.randint(1,2)
        if randNum == 1:
            headsCount += 1
            print "Attempt #{}: Throwing a coin.. It's Heads! Got {} head(s) so far and {} tail(s) so far".format(i, headsCount, tailsCount)
        if randNum == 2:
            tailsCount += 1
            print "Attempt #{}: Throwing a coin.. It's Tails! Got {} head(s) so far and {} tail(s) so far".format(i, headsCount, tailsCount)
    print "You got {} total Heads, and {} total Tails!".format(headsCount, tailsCount)
toss()