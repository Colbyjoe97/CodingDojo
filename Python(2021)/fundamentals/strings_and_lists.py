# 1.)
words = "It's thanksgiving day. It's my birthday,too!"
x = words.find("day")
y = words.replace("day", "month")
print(x)
print(y)

# 2.)
x = [2,54,-2,7,12,98]
print(max(x))
print(min(x))

# 3.)
x = ["hello",2,54,-2,7,12,98,"world"]
print(x[0])
print(x[len(x)-1])

# 4.)
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
# DOUBLE SLASH IS FLOOR DIVISION OPERATOR
# THIS MAKES IT ROUND DOWN AUTOMATICALLY
first_list = x[:len(x)//2] 
second_list = x[len(x)//2:]
# ^ COLON PLACEMENT IS IMPORTANT - FRONT GETS FIRST HALF
# END GETS THE BACK HALF
print("first list", first_list)
print("second_list", second_list)
second_list.insert(0,first_list)
print(second_list)