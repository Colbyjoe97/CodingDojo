def odd_even():
    for i in range(1, 2000):
        if i % 2 == 0:
            print "Number is {}. This is an even number".format(i)
        else:
            print 'Number is {}. This is an odd number'.format(i)
# odd_even()


def multiply(arr, num):
    newArr = []
    for i in arr:
        newArr.append(i * num)
    return(newArr)
# print(multiply([1,2,3,4,5], 10))


def layered_multiples(arr):
    new_array = []
    for x in arr:
        val_arr = []
        for i in range(0,x):
            val_arr.append(1)
        new_array.append(val_arr)
    return(new_array)
# print(layered_multiples(multiply([2,4,5],3)))