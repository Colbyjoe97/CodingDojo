# 1.)
for i in range(1, 1000):
    if i % 2 != 0:
        print(i)


# 2.)
# for i in range(5, 1000000):
#     if i % 5 == 0:
#         print(i)


# 3.)
a = [1, 2, 5, 10, 255, 3]
sum = 0
for i in a:
    sum += i
print(sum)


# 4.)
a = [1, 2, 5, 10, 255, 3]
sum = 0
avg = 0
for i in a:
    sum += i
avg = sum / len(a)
print(avg)